'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faRocket, 
  faSpinner, 
  faEdit, 
  faSave,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import AutoResizeTextarea from './AutoResizeTextarea';
import styles from './GenerateDraftModal.module.css';

const TONE_OPTIONS = [
  { value: 'professional', label: 'Professional', description: 'Authoritative and trustworthy' },
  { value: 'friendly', label: 'Friendly', description: 'Conversational and approachable' },
  { value: 'urgent', label: 'Urgent', description: 'Creating immediate action' },
  { value: 'luxurious', label: 'Luxurious', description: 'Premium and exclusive' },
  { value: 'casual', label: 'Casual', description: 'Relaxed and informal' },
  { value: 'bold', label: 'Bold', description: 'Confident and assertive' }
];

const LENGTH_OPTIONS = [
  { value: 'short', label: 'Short', description: '~300-500 words' },
  { value: 'medium', label: 'Medium', description: '~500-1000 words' },
  { value: 'long', label: 'Long', description: '~1000-2000 words' }
];

export default function GenerateDraftModal({ 
  isOpen, 
  onClose, 
  userId, 
  insightSheet,
  onDraftGenerated 
}) {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [tone, setTone] = useState('professional');
  const [length, setLength] = useState('medium');
  const [customInstructions, setCustomInstructions] = useState('');
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState('configure'); // 'configure', 'preview', 'edit'
  const [generatedDraft, setGeneratedDraft] = useState(null);
  const [editingSection, setEditingSection] = useState(null);

  useEffect(() => {
    if (isOpen) {
      loadTemplates();
      // Reset state when modal opens
      setStep('configure');
      setGeneratedDraft(null);
      setError('');
    }
  }, [isOpen]);

  async function loadTemplates() {
    try {
      setLoading(true);
      const response = await fetch('/api/templates');
      const data = await response.json();
      
      if (response.ok) {
        setTemplates(data.templates || []);
        if (data.templates?.length > 0) {
          setSelectedTemplate(data.templates[0]._id);
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

  async function generateDraft() {
    if (!selectedTemplate || !insightSheet) {
      setError('Please select a template and ensure insights are available');
      return;
    }

    setGenerating(true);
    setError('');

    try {
      const response = await fetch('/api/generate/draft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          templateId: selectedTemplate,
          tone,
          length,
          customInstructions
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        setGeneratedDraft(data.draft);
        setStep('preview');
      } else {
        setError(data.error || 'Failed to generate draft');
      }
    } catch (err) {
      setError('Network error generating draft');
    } finally {
      setGenerating(false);
    }
  }

  function handleEditSection(sectionIndex) {
    setEditingSection(sectionIndex);
  }

  function handleSaveSection(sectionIndex, newContent) {
    if (!generatedDraft) return;

    const updatedBlocks = [...generatedDraft.blocks];
    updatedBlocks[sectionIndex] = {
      ...updatedBlocks[sectionIndex],
      data: {
        ...updatedBlocks[sectionIndex].data,
        text: newContent
      }
    };

    setGeneratedDraft({
      ...generatedDraft,
      blocks: updatedBlocks
    });

    setEditingSection(null);
  }

  function handleUseDraft() {
    if (generatedDraft && onDraftGenerated) {
      onDraftGenerated(generatedDraft.blocks);
      onClose();
    }
  }

  if (!isOpen) return null;

  const selectedTemplateData = templates.find(t => t._id === selectedTemplate);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>
            {step === 'configure' && 'Generate AI Sales Copy'}
            {step === 'preview' && 'Review Generated Draft'}
            {step === 'edit' && 'Edit Draft'}
          </h2>
          <button onClick={onClose} className={styles.closeButton}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {error && (
          <div className={styles.error}>
            {error}
            <button onClick={() => setError('')}>×</button>
          </div>
        )}

        <div className={styles.modalContent}>
          {step === 'configure' && (
            <div className={styles.configureStep}>
              {!insightSheet && (
                <div className={styles.warning}>
                  <p>⚠️ No insights available. Please build insights first for better results.</p>
                </div>
              )}

              {/* Template Selection */}
              <div className={styles.section}>
                <h3>1. Choose Template</h3>
                {loading ? (
                  <div className={styles.loading}>Loading templates...</div>
                ) : (
                  <div className={styles.templateGrid}>
                    {templates.map(template => (
                      <div 
                        key={template._id}
                        className={`${styles.templateCard} ${
                          selectedTemplate === template._id ? styles.selected : ''
                        }`}
                        onClick={() => setSelectedTemplate(template._id)}
                      >
                        <h4>{template.name}</h4>
                        <p className={styles.framework}>{template.framework}</p>
                        <p className={styles.description}>{template.description}</p>
                        <div className={styles.templateMeta}>
                          <span className={styles.category}>{template.category}</span>
                          <span className={styles.length}>{template.estimatedLength}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

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
                <AutoResizeTextarea
                  value={customInstructions}
                  onChange={(e) => setCustomInstructions(e.target.value)}
                  placeholder="Any specific requirements, style preferences, or additional context..."
                  minRows={3}
                />
              </div>

              <div className={styles.generateSection}>
                <button 
                  onClick={generateDraft}
                  disabled={!selectedTemplate || generating}
                  className={styles.generateButton}
                >
                  {generating ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} spin />
                      Generating...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faRocket} />
                      Generate Sales Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {step === 'preview' && generatedDraft && (
            <div className={styles.previewStep}>
              <div className={styles.draftMeta}>
                <h3>Generated Draft</h3>
                <div className={styles.draftInfo}>
                  <span>Template: {selectedTemplateData?.name}</span>
                  <span>Tone: {tone}</span>
                  <span>Length: {length}</span>
                  <span>Sections: {generatedDraft.blocks.length}</span>
                </div>
              </div>

              <div className={styles.draftPreview}>
                {generatedDraft.blocks.map((block, index) => (
                  <div key={index} className={styles.sectionPreview}>
                    <div className={styles.sectionHeader}>
                      <h4>{block.section || `Section ${index + 1}`}</h4>
                      <button 
                        onClick={() => handleEditSection(index)}
                        className={styles.editSectionButton}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </div>
                    
                    {editingSection === index ? (
                      <EditSectionForm
                        content={block.data.text || ''}
                        onSave={(content) => handleSaveSection(index, content)}
                        onCancel={() => setEditingSection(null)}
                      />
                    ) : (
                      <div className={styles.sectionContent}>
                        {block.type === 'heading' ? (
                          <h2>{block.data.text}</h2>
                        ) : block.type === 'list' ? (
                          <ul>
                            {block.data.items?.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{block.data.text}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className={styles.draftActions}>
                <button 
                  onClick={() => setStep('configure')}
                  className={styles.backButton}
                >
                  Back to Configure
                </button>
                <button 
                  onClick={handleUseDraft}
                  className={styles.useDraftButton}
                >
                  <FontAwesomeIcon icon={faCheck} />
                  Use This Draft
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EditSectionForm({ content, onSave, onCancel }) {
  const [editedContent, setEditedContent] = useState(content);

  return (
    <div className={styles.editForm}>
      <AutoResizeTextarea
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
        minRows={4}
      />
      <div className={styles.editFormActions}>
        <button 
          onClick={() => onSave(editedContent)}
          className={styles.saveButton}
        >
          <FontAwesomeIcon icon={faSave} />
          Save
        </button>
        <button 
          onClick={onCancel}
          className={styles.cancelButton}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
