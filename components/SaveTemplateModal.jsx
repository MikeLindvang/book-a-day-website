'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSave, 
  faTimes, 
  faTag, 
  faInfo,
  faRocket,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import styles from './SaveTemplateModal.module.css';

export default function SaveTemplateModal({ blocks, title, description, onSave, onClose }) {
  const [templateData, setTemplateData] = useState({
    name: title || '',
    description: description || '',
    framework: 'Custom',
    category: 'Other',
    difficulty: 'Intermediate',
    estimatedLength: 'Medium',
    bestFor: '',
    tags: '',
    industry: ''
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      // Convert blocks to template sections
      const sections = extractSections(blocks);
      
      const template = {
        ...templateData,
        tags: templateData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        sections: sections,
        isPublic: false,
        isBuiltIn: false
      };

      const response = await fetch('/api/templates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(template),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save template');
      }

      const savedTemplate = await response.json();
      onSave(savedTemplate);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  function extractSections(blocks) {
    // Group blocks by section or create a single section
    const sectionMap = new Map();
    
    blocks.forEach((block, index) => {
      const sectionName = block.section || 'main';
      const sectionTitle = block.metadata?.sectionTitle || 'Main Content';
      
      if (!sectionMap.has(sectionName)) {
        sectionMap.set(sectionName, {
          key: sectionName,
          label: sectionTitle,
          purpose: `Section containing ${sectionName} content`,
          blocks: []
        });
      }
      
      // Clean the block data for template storage
      const cleanBlock = {
        type: block.type,
        data: { ...block.data },
        metadata: block.metadata ? { ...block.metadata } : {}
      };
      
      sectionMap.get(sectionName).blocks.push(cleanBlock);
    });
    
    return Array.from(sectionMap.values());
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>
            <FontAwesomeIcon icon={faRocket} />
            Save as Template
          </h2>
          <button onClick={onClose} className={styles.closeBtn}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <form onSubmit={handleSave} className={styles.form}>
          <div className={styles.section}>
            <h3>Template Information</h3>
            
            <div className={styles.formGroup}>
              <label htmlFor="name">Template Name *</label>
              <input
                id="name"
                type="text"
                value={templateData.name}
                onChange={(e) => setTemplateData({ ...templateData, name: e.target.value })}
                required
                placeholder="e.g., High-Converting SaaS Landing Page"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                value={templateData.description}
                onChange={(e) => setTemplateData({ ...templateData, description: e.target.value })}
                required
                rows={3}
                placeholder="Describe what this template is best used for..."
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="framework">Framework</label>
                <select
                  id="framework"
                  value={templateData.framework}
                  onChange={(e) => setTemplateData({ ...templateData, framework: e.target.value })}
                >
                  <option value="Custom">Custom</option>
                  <option value="PAS">PAS</option>
                  <option value="BAB">BAB</option>
                  <option value="AIDA">AIDA</option>
                  <option value="Star-Story-Solution">Star-Story-Solution</option>
                  <option value="VSL">VSL</option>
                  <option value="Webinar">Webinar</option>
                  <option value="Product Launch">Product Launch</option>
                  <option value="Lead Magnet">Lead Magnet</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  value={templateData.category}
                  onChange={(e) => setTemplateData({ ...templateData, category: e.target.value })}
                  required
                >
                  <option value="SaaS">SaaS</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Coaching">Coaching</option>
                  <option value="Course">Online Course</option>
                  <option value="Agency">Agency</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Physical Product">Physical Product</option>
                  <option value="Digital Product">Digital Product</option>
                  <option value="Lead Generation">Lead Generation</option>
                  <option value="Event">Event</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="difficulty">Difficulty</label>
                <select
                  id="difficulty"
                  value={templateData.difficulty}
                  onChange={(e) => setTemplateData({ ...templateData, difficulty: e.target.value })}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="estimatedLength">Length</label>
                <select
                  id="estimatedLength"
                  value={templateData.estimatedLength}
                  onChange={(e) => setTemplateData({ ...templateData, estimatedLength: e.target.value })}
                >
                  <option value="Short">Short</option>
                  <option value="Medium">Medium</option>
                  <option value="Long">Long</option>
                  <option value="Extra Long">Extra Long</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="bestFor">Best For</label>
              <input
                id="bestFor"
                type="text"
                value={templateData.bestFor}
                onChange={(e) => setTemplateData({ ...templateData, bestFor: e.target.value })}
                placeholder="e.g., B2B SaaS companies, new product launches..."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="industry">Industry</label>
              <input
                id="industry"
                type="text"
                value={templateData.industry}
                onChange={(e) => setTemplateData({ ...templateData, industry: e.target.value })}
                placeholder="e.g., Software, Marketing, E-commerce..."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="tags">
                Tags
                <span className={styles.helper}>
                  <FontAwesomeIcon icon={faTag} />
                  Separate with commas
                </span>
              </label>
              <input
                id="tags"
                type="text"
                value={templateData.tags}
                onChange={(e) => setTemplateData({ ...templateData, tags: e.target.value })}
                placeholder="e.g., conversion, high-converting, b2b, saas"
              />
            </div>
          </div>

          <div className={styles.preview}>
            <h3>Template Preview</h3>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <strong>{blocks.length}</strong>
                <span>Total Blocks</span>
              </div>
              <div className={styles.stat}>
                <strong>{extractSections(blocks).length}</strong>
                <span>Sections</span>
              </div>
              <div className={styles.stat}>
                <strong>{blocks.filter(b => b.type === 'heading').length}</strong>
                <span>Headlines</span>
              </div>
              <div className={styles.stat}>
                <strong>{blocks.filter(b => b.type === 'button').length}</strong>
                <span>CTAs</span>
              </div>
            </div>
          </div>

          {error && (
            <div className={styles.error}>
              <FontAwesomeIcon icon={faInfo} />
              {error}
            </div>
          )}

          <div className={styles.actions}>
            <button type="button" onClick={onClose} className={styles.cancelBtn}>
              Cancel
            </button>
            <button type="submit" disabled={saving} className={styles.saveBtn}>
              <FontAwesomeIcon icon={saving ? faRocket : faSave} />
              {saving ? 'Saving...' : 'Save Template'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
