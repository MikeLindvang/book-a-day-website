'use client';

import { useState, useEffect } from 'react';
import { getAllTemplates, templateToBlocks } from '../lib/salesTemplates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateTemplateModal from './CreateTemplateModal';
import { 
  faRocket, 
  faEye, 
  faCheck, 
  faClock, 
  faUsers, 
  faStar,
  faSearch,
  faFilter,
  faPlus,
  faSave,
  faBookmark,
  faTags,
  faDownload,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import styles from './TemplateSelector.module.css';

export default function TemplateSelector({ onSelectTemplate, onSkip }) {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFramework, setSelectedFramework] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [customTemplates, setCustomTemplates] = useState([]);
  const [showCreateTemplate, setShowCreateTemplate] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const builtInTemplates = getAllTemplates();
  
  // Fetch custom templates from API
  useEffect(() => {
    fetchCustomTemplates();
  }, [selectedCategory, selectedFramework, sortBy]);

  async function fetchCustomTemplates() {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        category: selectedCategory,
        framework: selectedFramework,
        sortBy: sortBy,
        limit: '20'
      });
      
      const response = await fetch(`/api/templates?${params}`);
      if (response.ok) {
        const templates = await response.json();
        setCustomTemplates(templates);
      }
    } catch (error) {
      console.error('Error fetching custom templates:', error);
    } finally {
      setLoading(false);
    }
  }

  // Combine and filter templates
  const allTemplates = [
    ...builtInTemplates.map(t => ({ ...t, isBuiltIn: true })),
    ...customTemplates.map(t => ({ ...t, isBuiltIn: false }))
  ];

  const filteredTemplates = allTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (template.tags && template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesFramework = selectedFramework === 'all' || template.framework === selectedFramework;
    
    return matchesSearch && matchesCategory && matchesFramework;
  });

  function handleTemplateSelect(template) {
    const blocks = templateToBlocks(template);
    onSelectTemplate(blocks, template);
  }

  function handleCreateFromBlank(template) {
    const blocks = templateToBlocks(template);
    onSelectTemplate(blocks, template);
  }

  function handleCreateFromExisting(template) {
    const blocks = templateToBlocks(template);
    onSelectTemplate(blocks, template);
  }

  function getDifficultyColor(difficulty) {
    switch (difficulty) {
      case 'Beginner': return styles.beginner;
      case 'Intermediate': return styles.intermediate;
      case 'Advanced': return styles.advanced;
      default: return styles.beginner;
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

  return (
    <div className={styles.templateSelector}>
      <div className={styles.header}>
        <h1>Choose Your Sales Page Template</h1>
        <p>Start with a proven framework that converts, then customize with your content.</p>
        
        {/* Search and Filter Controls */}
        <div className={styles.controls}>
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
          
          <div className={styles.filters}>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">All Categories</option>
              <option value="SaaS">SaaS</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Coaching">Coaching</option>
              <option value="Course">Online Course</option>
              <option value="Agency">Agency</option>
              <option value="Consulting">Consulting</option>
              <option value="Physical Product">Physical Product</option>
              <option value="Digital Product">Digital Product</option>
              <option value="Lead Generation">Lead Generation</option>
            </select>
            
            <select
              value={selectedFramework}
              onChange={(e) => setSelectedFramework(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">All Frameworks</option>
              <option value="PAS">PAS</option>
              <option value="BAB">BAB</option>
              <option value="AIDA">AIDA</option>
              <option value="Star-Story-Solution">Star-Story-Solution</option>
              <option value="VSL">VSL</option>
              <option value="Custom">Custom</option>
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="rating">Highest Rated</option>
              <option value="name">A-Z</option>
            </select>
          </div>
          
          <button 
            className={styles.createButton}
            onClick={() => setShowCreateTemplate(true)}
          >
            <FontAwesomeIcon icon={faPlus} />
            Create Template
          </button>
        </div>
        
        <div className={styles.actions}>
          <button 
            className={styles.skipButton}
            onClick={onSkip}
          >
            Skip & Start Blank
          </button>
        </div>
      </div>

      {loading && (
        <div className={styles.loading}>
          <p>Loading templates...</p>
        </div>
      )}

      <div className={styles.templateGrid}>
        {filteredTemplates.map((template) => (
          <div 
            key={template.id}
            className={`${styles.templateCard} ${selectedTemplate?.id === template.id ? styles.selected : ''}`}
            onClick={() => setSelectedTemplate(template)}
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
                {!template.isBuiltIn && (
                  <div className={styles.customBadge}>
                    <FontAwesomeIcon icon={faStar} />
                    Custom
                  </div>
                )}
              </div>
            </div>

            <h3 className={styles.templateName}>{template.name}</h3>
            <p className={styles.templateDescription}>{template.description}</p>

            <div className={styles.templateStats}>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faClock} />
                <span>{template.estimatedLength}</span>
              </div>
              <div className={styles.stat}>
                <FontAwesomeIcon icon={faUsers} />
                <span>{template.sections?.length || 0} sections</span>
              </div>
              {!template.isBuiltIn && template.usageCount > 0 && (
                <div className={styles.stat}>
                  <FontAwesomeIcon icon={faDownload} />
                  <span>{template.usageCount} uses</span>
                </div>
              )}
              {!template.isBuiltIn && template.rating > 0 && (
                <div className={styles.stat}>
                  <FontAwesomeIcon icon={faStar} />
                  <span>{template.rating.toFixed(1)}</span>
                </div>
              )}
            </div>

            <div className={styles.bestFor}>
              <strong>Best for:</strong> {template.bestFor}
            </div>

            {template.tags && template.tags.length > 0 && (
              <div className={styles.tags}>
                <FontAwesomeIcon icon={faTags} />
                {template.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}

            {template.basedOn && (
              <div className={styles.basedOn}>
                <strong>Based on:</strong> {template.basedOn}
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedTemplate && (
        <div className={styles.templatePreview}>
          <div className={styles.previewHeader}>
            <h2>{selectedTemplate.name} - Structure Preview</h2>
            <div className={styles.previewActions}>
              <button 
                onClick={() => setShowPreview(!showPreview)}
                className={styles.previewToggle}
              >
                <FontAwesomeIcon icon={faEye} />
                {showPreview ? 'Hide' : 'Show'} Details
              </button>
            </div>
          </div>

          <div className={styles.templateInfo}>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <strong>Framework:</strong> {selectedTemplate.framework}
              </div>
              <div className={styles.infoItem}>
                <strong>Sections:</strong> {selectedTemplate.sections.length}
              </div>
              <div className={styles.infoItem}>
                <strong>Difficulty:</strong> 
                <span className={getDifficultyColor(selectedTemplate.difficulty)}>
                  {selectedTemplate.difficulty}
                </span>
              </div>
              <div className={styles.infoItem}>
                <strong>Length:</strong> {selectedTemplate.estimatedLength}
              </div>
            </div>
          </div>

          {showPreview && (
            <div className={styles.sectionPreview}>
              <h3>Template Structure:</h3>
              <ol className={styles.sectionList}>
                {selectedTemplate.sections.map((section, index) => (
                  <li key={index} className={styles.sectionItem}>
                    <div className={styles.sectionHeader}>
                      <strong>{section.title}</strong>
                      <span className={styles.blockCount}>
                        {section.blocks.length} block{section.blocks.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <p className={styles.sectionDescription}>{section.description}</p>
                    <div className={styles.blockTypes}>
                      {section.blocks.map((block, blockIndex) => (
                        <span key={blockIndex} className={styles.blockType}>
                          {block.type}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className={styles.selectionActions}>
            <button 
              onClick={() => handleTemplateSelect(selectedTemplate)}
              className={styles.useTemplate}
            >
              <FontAwesomeIcon icon={faCheck} />
              Use This Template
            </button>
            <button 
              onClick={() => setSelectedTemplate(null)}
              className={styles.cancelSelection}
            >
              Choose Different Template
            </button>
          </div>
        </div>
      )}

      <div className={styles.footer}>
        <p>💡 <strong>Tip:</strong> You can always modify sections, add custom content, or switch templates later.</p>
      </div>

      {showCreateTemplate && (
        <CreateTemplateModal
          onCreateFromBlank={handleCreateFromBlank}
          onCreateFromExisting={handleCreateFromExisting}
          onClose={() => setShowCreateTemplate(false)}
        />
      )}
    </div>
  );
}
