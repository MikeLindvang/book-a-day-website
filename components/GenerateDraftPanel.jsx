'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faSpinner, 
  faCheck, 
  faExclamationTriangle,
  faEye,
  faClock,
  faUsers,
  faStar,
  faSearch,
  faFilter,
  faCopy,
  faEdit,
  faRefresh,
  faSave,
  faChevronDown,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import styles from './GenerateDraftPanel.module.css';

const TONE_OPTIONS = [
  { value: 'professional', label: 'Professional', description: 'Authoritative and trustworthy' },
  { value: 'friendly', label: 'Friendly', description: 'Conversational and approachable' },
  { value: 'urgent', label: 'Urgent', description: 'Creating immediate action' },
  { value: 'luxurious', label: 'Luxurious', description: 'Premium and exclusive' },
  { value: 'casual', label: 'Casual', description: 'Relaxed and informal' },
  { value: 'bold', label: 'Bold', description: 'Confident and assertive' }
];

const LENGTH_OPTIONS = [
  { value: 'short', label: 'Short', description: '~300-500 words per section' },
  { value: 'medium', label: 'Medium', description: '~500-1000 words per section' },
  { value: 'long', label: 'Long', description: '~1000-2000 words per section' }
];

export default function GenerateDraftPanel({ 
  userId, 
  projectId,
  insightSheet,
  onDraftGenerated,
  mode = 'server' // 'server' for single call, 'client' for progressive per-section calls
}) {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedTemplateDetails, setSelectedTemplateDetails] = useState(null);
  const [tone, setTone] = useState('professional');
  const [length, setLength] = useState('medium');
  const [customInstructions, setCustomInstructions] = useState('');
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [generationProgress, setGenerationProgress] = useState({
    currentSection: 0,
    totalSections: 0,
    message: ''
  });
  const [generatedSections, setGeneratedSections] = useState([]);
  const [showGeneratedContent, setShowGeneratedContent] = useState(false);

  useEffect(() => {
    loadTemplates();
  }, []);

  async function loadTemplates() {
    try {
      setLoading(true);
      const response = await fetch('/api/templates');
      const data = await response.json();
      
      if (response.ok) {
        // The API returns templates directly, not wrapped in templates property
        const templateList = Array.isArray(data) ? data : data.templates || [];
        setTemplates(templateList);
        if (templateList.length > 0) {
          setSelectedTemplate(templateList[0]._id);
        }
      } else {
        setError('Failed to load templates');
      }
    } catch (err) {
      setError('Network error loading templates');
    } finally {
      setLoading(false);
    }
  }

  // Load full template details when template is selected
  async function loadTemplateDetails(templateId) {
    if (!templateId) {
      setSelectedTemplateDetails(null);
      return;
    }

    try {
      const response = await fetch(`/api/templates/${templateId}`);
      const data = await response.json();
      
      if (response.ok) {
        setSelectedTemplateDetails(data);
      } else {
        console.error('Failed to load template details:', data.error);
      }
    } catch (err) {
      console.error('Network error loading template details:', err);
    }
  }

  // Watch for template selection changes
  useEffect(() => {
    if (selectedTemplate) {
      loadTemplateDetails(selectedTemplate);
    }
  }, [selectedTemplate]);

  async function generateDraft() {
    if (!selectedTemplate || !projectId) {
      setError('Please select a template and ensure project is available');
      return;
    }

    if (!selectedTemplateDetails) {
      setError('Template details not loaded. Please try again.');
      return;
    }

    setGenerating(true);
    setError('');
    setGeneratedSections([]);
    setShowGeneratedContent(false);
    
    const totalSections = selectedTemplateDetails.sections?.length || 0;
    
    setGenerationProgress({
      currentSection: 0,
      totalSections,
      message: 'Initializing draft generation...'
    });

    try {
      if (mode === 'server') {
        // Server-orchestrated: Single API call that handles all sections server-side
        const response = await fetch('/api/generate/draft', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            projectId,
            templateId: selectedTemplate,
            options: {
              tone,
              length,
              customInstructions
            }
          })
        });

        const data = await response.json();
        
        if (response.ok) {
          setGenerationProgress({
            currentSection: totalSections,
            totalSections,
            message: 'Draft generation completed!'
          });
          
          // Store generated sections for rendering
          setGeneratedSections(data.draft.sections || []);
          setShowGeneratedContent(true);
          
          // Convert draft sections to blocks format for the page builder if callback provided
          if (onDraftGenerated) {
            const blocks = convertDraftToBlocks(data.draft);
            onDraftGenerated(blocks, {
              templateId: selectedTemplate,
              templateName: selectedTemplateDetails.name,
              tone,
              length,
              customInstructions,
              metadata: data.draft.metadata,
              warnings: data.warnings
            });
          }
        } else {
          setError(data.error || 'Failed to generate draft');
        }
      } else if (mode === 'client') {
        // Client-progressive: Multiple API calls, one per section with real-time updates
        await generateProgressiveDraft();
      } else {
        setError('Invalid generation mode specified.');
      }
    } catch (err) {
      setError('Network error generating draft');
    } finally {
      setGenerating(false);
      setTimeout(() => {
        setGenerationProgress({ currentSection: 0, totalSections: 0, message: '' });
      }, 2000);
    }
  }

  async function generateProgressiveDraft() {
    const sections = selectedTemplateDetails.sections || [];
    const generatedResults = [];
    
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      
      setGenerationProgress({
        currentSection: i + 1,
        totalSections: sections.length,
        message: `Generating ${section.label || section.key}...`
      });

      try {
        const response = await fetch('/api/generate/section', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            projectId,
            templateId: selectedTemplate,
            sectionKey: section.key,
            options: {
              tone,
              length,
              customInstructions
            }
          })
        });

        const data = await response.json();
        
        if (response.ok) {
          const sectionResult = {
            ...data.section,
            label: section.label,
            order: i,
            warnings: data.warnings || []
          };
          
          generatedResults.push(sectionResult);
          
          // Update state to show section as it's generated
          setGeneratedSections([...generatedResults]);
          setShowGeneratedContent(true);
        } else {
          // Add error section
          generatedResults.push({
            key: section.key,
            label: section.label,
            html: `<p class="error">Failed to generate ${section.label || section.key}: ${data.error}</p>`,
            headlineAlts: [],
            order: i,
            warnings: [`Generation failed: ${data.error}`]
          });
          setGeneratedSections([...generatedResults]);
        }
      } catch (err) {
        // Add error section for network failures
        generatedResults.push({
          key: section.key,
          label: section.label,
          html: `<p class="error">Network error generating ${section.label || section.key}</p>`,
          headlineAlts: [],
          order: i,
          warnings: [`Network error: ${err.message}`]
        });
        setGeneratedSections([...generatedResults]);
      }
    }

    setGenerationProgress({
      currentSection: sections.length,
      totalSections: sections.length,
      message: 'Progressive generation completed!'
    });

    // Call onDraftGenerated if provided
    if (onDraftGenerated) {
      const blocks = convertSectionResultsToBlocks(generatedResults);
      onDraftGenerated(blocks, {
        templateId: selectedTemplate,
        templateName: selectedTemplateDetails.name,
        tone,
        length,
        customInstructions,
        metadata: {
          generated: true,
          mode: 'progressive'
        }
      });
    }
  }

  function convertDraftToBlocks(draft) {
    if (!draft.sections) return [];
    
    return draft.sections.map((section, index) => ({
      type: 'paragraph', // Default type, will be enhanced based on content
      data: {
        text: section.html || section.content || ''
      },
      section: section.key,
      metadata: {
        sectionIndex: index,
        sectionKey: section.key,
        generated: true,
        headlineAlts: section.headlineAlts || [],
        warnings: section.warnings || []
      }
    }));
  }

  function convertSectionResultsToBlocks(sectionResults) {
    return sectionResults.map((section, index) => ({
      type: 'paragraph',
      data: {
        text: section.html || ''
      },
      section: section.key,
      metadata: {
        sectionIndex: index,
        sectionKey: section.key,
        generated: true,
        headlineAlts: section.headlineAlts || [],
        warnings: section.warnings || []
      }
    }));
  }

  // Function to regenerate a single section
  async function regenerateSection(sectionKey) {
    if (!selectedTemplate || !projectId || !selectedTemplateDetails) {
      setError('Missing required data for regeneration');
      return;
    }

    const sectionIndex = generatedSections.findIndex(s => s.key === sectionKey);
    if (sectionIndex === -1) {
      setError('Section not found');
      return;
    }

    // Mark section as regenerating
    const updatedSections = [...generatedSections];
    updatedSections[sectionIndex] = {
      ...updatedSections[sectionIndex],
      regenerating: true
    };
    setGeneratedSections(updatedSections);

    try {
      const response = await fetch('/api/generate/section', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId,
          templateId: selectedTemplate,
          sectionKey,
          options: {
            tone,
            length,
            customInstructions
          }
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        // Update the specific section
        updatedSections[sectionIndex] = {
          ...data.section,
          label: updatedSections[sectionIndex].label,
          order: updatedSections[sectionIndex].order,
          warnings: data.warnings || [],
          regenerating: false
        };
        setGeneratedSections([...updatedSections]);
      } else {
        updatedSections[sectionIndex] = {
          ...updatedSections[sectionIndex],
          regenerating: false,
          warnings: [...(updatedSections[sectionIndex].warnings || []), `Regeneration failed: ${data.error}`]
        };
        setGeneratedSections([...updatedSections]);
        setError(`Failed to regenerate section: ${data.error}`);
      }
    } catch (err) {
      updatedSections[sectionIndex] = {
        ...updatedSections[sectionIndex],
        regenerating: false,
        warnings: [...(updatedSections[sectionIndex].warnings || []), `Network error during regeneration`]
      };
      setGeneratedSections([...updatedSections]);
      setError('Network error during regeneration');
    }
  }

  // Function to update section content
  function updateSectionContent(sectionKey, newHtml) {
    const updatedSections = generatedSections.map(section => 
      section.key === sectionKey 
        ? { ...section, html: newHtml, edited: true }
        : section
    );
    setGeneratedSections(updatedSections);
  }

  // Function to copy HTML to clipboard
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      // Could add a toast notification here
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  }

  function getCategoryIcon(category) {
    switch (category) {
      case 'Direct Response': return faRocket;
      case 'Transformation': return faCheck;
      case 'Authority': return faStar;
      default: return faRocket;
    }
  }

  function getDifficultyColor(difficulty) {
    switch (difficulty) {
      case 'Beginner': return styles.beginner;
      case 'Intermediate': return styles.intermediate;
      case 'Advanced': return styles.advanced;
      default: return styles.beginner;
    }
  }

  // Filter templates based on search and category
  const filteredTemplates = templates.filter(template => {
    const matchesSearch = !searchTerm || 
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const selectedTemplateData = selectedTemplateDetails || templates.find(t => t._id === selectedTemplate);

  return (
    <div className={styles.generateDraftPanel}>
      <div className={styles.header}>
        <h2>Generate AI Sales Copy</h2>
        <p>Choose a template and let AI create your sales page content based on your insights.</p>
        
        {!insightSheet && (
          <div className={styles.warning}>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <span>No insights available. Please build insights first for better results.</span>
          </div>
        )}
      </div>

      {error && (
        <div className={styles.error}>
          <span>{error}</span>
          <button onClick={() => setError('')} aria-label="Dismiss error">×</button>
        </div>
      )}

      {/* Template Selection */}
      <div className={styles.section}>
        <h3>1. Choose Template</h3>
        
        <div className={styles.filters}>
          <div className={styles.searchBox}>
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="all">All Categories</option>
            <option value="Direct Response">Direct Response</option>
            <option value="Transformation">Transformation</option>
            <option value="Authority">Authority</option>
            <option value="SaaS">SaaS</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Coaching">Coaching</option>
            <option value="Course">Online Course</option>
          </select>
        </div>

        {loading ? (
          <div className={styles.loading}>
            <FontAwesomeIcon icon={faSpinner} spin />
            <span>Loading templates...</span>
          </div>
        ) : (
          <div className={styles.templateGrid}>
            {filteredTemplates.map(template => (
              <div 
                key={template._id}
                className={`${styles.templateCard} ${
                  selectedTemplate === template._id ? styles.selected : ''
                }`}
                onClick={() => setSelectedTemplate(template._id)}
              >
                <div className={styles.templateHeader}>
                  <div className={styles.templateIcon}>
                    <FontAwesomeIcon icon={getCategoryIcon(template.category)} />
                  </div>
                  <div className={styles.templateMeta}>
                    <div className={`${styles.difficulty} ${getDifficultyColor(template.difficulty)}`}>
                      {template.difficulty}
                    </div>
                    <div className={styles.category}>{template.category}</div>
                  </div>
                </div>

                <h4 className={styles.templateName}>{template.name}</h4>
                <p className={styles.framework}>{template.framework}</p>
                <p className={styles.description}>{template.description}</p>

                <div className={styles.templateStats}>
                  <div className={styles.stat}>
                    <FontAwesomeIcon icon={faClock} />
                    <span>{template.estimatedLength}</span>
                  </div>
                  <div className={styles.stat}>
                    <FontAwesomeIcon icon={faUsers} />
                    <span>{template.sections?.length || 0} sections</span>
                  </div>
                </div>

                <div className={styles.bestFor}>
                  <strong>Best for:</strong> {template.bestFor}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Configuration Options */}
      {selectedTemplate && (
        <>
          {/* Tone Selection */}
          <div className={styles.section}>
            <h3>2. Select Tone</h3>
            <div className={styles.optionsGrid}>
              {TONE_OPTIONS.map(option => (
                <div 
                  key={option.value}
                  className={`${styles.optionCard} ${
                    tone === option.value ? styles.selected : ''
                  }`}
                  onClick={() => setTone(option.value)}
                >
                  <h4>{option.label}</h4>
                  <p>{option.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Length Selection */}
          <div className={styles.section}>
            <h3>3. Choose Length</h3>
            <div className={styles.optionsGrid}>
              {LENGTH_OPTIONS.map(option => (
                <div 
                  key={option.value}
                  className={`${styles.optionCard} ${
                    length === option.value ? styles.selected : ''
                  }`}
                  onClick={() => setLength(option.value)}
                >
                  <h4>{option.label}</h4>
                  <p>{option.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Instructions */}
          <div className={styles.section}>
            <h3>4. Custom Instructions (Optional)</h3>
            <textarea
              value={customInstructions}
              onChange={(e) => setCustomInstructions(e.target.value)}
              placeholder="Any specific requirements, style preferences, or additional context..."
              className={styles.customInstructions}
              rows={4}
            />
          </div>

          {/* Template Preview */}
          <div className={styles.section}>
            <h3>Selected Template: {selectedTemplateData?.name}</h3>
            <div className={styles.templatePreview}>
              <div className={styles.templateInfo}>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <strong>Framework:</strong> {selectedTemplateData?.framework}
                  </div>
                  <div className={styles.infoItem}>
                    <strong>Sections:</strong> {selectedTemplateData?.sections?.length || 0}
                  </div>
                  <div className={styles.infoItem}>
                    <strong>Difficulty:</strong> 
                    <span className={getDifficultyColor(selectedTemplateData?.difficulty)}>
                      {selectedTemplateData?.difficulty}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <strong>Length:</strong> {selectedTemplateData?.estimatedLength}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Generation Progress */}
          {generating && (
            <div className={styles.generationProgress}>
              <div className={styles.progressHeader}>
                <FontAwesomeIcon icon={faSpinner} spin />
                <span>Generating your sales copy...</span>
              </div>
              
              {generationProgress.totalSections > 0 && (
                <div className={styles.progressDetails}>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ 
                        width: `${(generationProgress.currentSection / generationProgress.totalSections) * 100}%` 
                      }}
                    />
                  </div>
                  <div className={styles.progressText}>
                    {generationProgress.message || 
                     `Generating section ${generationProgress.currentSection} of ${generationProgress.totalSections}...`}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Generate Button */}
          <div className={styles.generateSection}>
            <button 
              onClick={generateDraft}
              disabled={!selectedTemplate || generating}
              className={styles.generateButton}
            >
              {generating ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin />
                  Generating Draft...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faRocket} />
                  Generate Sales Copy
                </>
              )}
            </button>
          </div>
        </>
      )}

      {/* Generated Content */}
      {showGeneratedContent && generatedSections.length > 0 && (
        <div className={styles.generatedContent}>
          <div className={styles.generatedHeader}>
            <h3>Generated Sales Copy</h3>
            <div className={styles.contentActions}>
              <button
                onClick={() => setShowGeneratedContent(!showGeneratedContent)}
                className={styles.toggleButton}
              >
                <FontAwesomeIcon icon={showGeneratedContent ? faChevronUp : faChevronDown} />
                {showGeneratedContent ? 'Hide' : 'Show'} Content
              </button>
            </div>
          </div>

          <div className={styles.sectionsContainer}>
            {generatedSections
              .sort((a, b) => (a.order || 0) - (b.order || 0))
              .map((section, index) => (
              <div key={section.key} className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionTitle}>
                    <h4>{section.label || section.key}</h4>
                    <span className={styles.sectionKey}>{section.key}</span>
                  </div>
                  <div className={styles.sectionActions}>
                    <button
                      onClick={() => copyToClipboard(section.html)}
                      className={styles.actionButton}
                      title="Copy HTML"
                    >
                      <FontAwesomeIcon icon={faCopy} />
                    </button>
                    <button
                      onClick={() => regenerateSection(section.key)}
                      disabled={section.regenerating}
                      className={styles.actionButton}
                      title="Regenerate Section"
                    >
                      <FontAwesomeIcon icon={section.regenerating ? faSpinner : faRefresh} spin={section.regenerating} />
                    </button>
                  </div>
                </div>

                {/* Section Content - Editable */}
                <div className={styles.sectionContent}>
                  <textarea
                    value={section.html || ''}
                    onChange={(e) => updateSectionContent(section.key, e.target.value)}
                    className={styles.sectionEditor}
                    rows={10}
                    placeholder="Section content will appear here..."
                  />
                </div>

                {/* Headline Alternatives */}
                {section.headlineAlts && section.headlineAlts.length > 0 && (
                  <div className={styles.headlineAlts}>
                    <h5>Alternative Headlines:</h5>
                    <div className={styles.altChips}>
                      {section.headlineAlts.map((alt, altIndex) => (
                        <span key={altIndex} className={styles.altChip}>
                          {alt}
                          <button
                            onClick={() => copyToClipboard(alt)}
                            className={styles.chipCopy}
                            title="Copy headline"
                          >
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Warnings */}
                {section.warnings && section.warnings.length > 0 && (
                  <div className={styles.sectionWarnings}>
                    <h6>Warnings:</h6>
                    <ul>
                      {section.warnings.map((warning, wIndex) => (
                        <li key={wIndex}>{warning}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Status Indicators */}
                <div className={styles.sectionStatus}>
                  {section.edited && <span className={styles.statusBadge}>Edited</span>}
                  {section.regenerating && <span className={styles.statusBadge}>Regenerating...</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Combined Actions */}
          <div className={styles.combinedActions}>
            <button
              onClick={() => {
                const combinedHtml = generatedSections
                  .sort((a, b) => (a.order || 0) - (b.order || 0))
                  .map(s => s.html)
                  .join('\n\n');
                copyToClipboard(combinedHtml);
              }}
              className={styles.combinedButton}
            >
              <FontAwesomeIcon icon={faCopy} />
              Copy All HTML
            </button>
            
            {onDraftGenerated && (
              <button
                onClick={() => {
                  const blocks = convertSectionResultsToBlocks(generatedSections);
                  onDraftGenerated(blocks, {
                    templateId: selectedTemplate,
                    templateName: selectedTemplateData?.name,
                    tone,
                    length,
                    customInstructions,
                    metadata: { updated: true }
                  });
                }}
                className={styles.combinedButton}
              >
                <FontAwesomeIcon icon={faSave} />
                Save to Page Builder
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
