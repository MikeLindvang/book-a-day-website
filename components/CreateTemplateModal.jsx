'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faTimes, 
  faRocket,
  faMagicWandSparkles,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';
import styles from './CreateTemplateModal.module.css';

export default function CreateTemplateModal({ onCreateFromBlank, onCreateFromExisting, onClose }) {
  const [creating, setCreating] = useState(false);

  function handleCreateBlank() {
    setCreating(true);
    // Create a blank template with basic structure
    const blankTemplate = {
      name: 'New Blank Template',
      description: 'A blank template to start from scratch',
      framework: 'Custom',
      category: 'Other',
      difficulty: 'Beginner',
      estimatedLength: 'Medium',
      bestFor: 'Custom projects',
      tags: ['custom', 'blank'],
      sections: [
        {
          name: 'header',
          title: 'Header Section',
          description: 'Main header with headline and subheadline',
          blocks: [
            {
              type: 'heading',
              data: { text: '[Your Compelling Headline]', level: '1', color: 'black', align: 'center' },
              metadata: { placeholder: true, sectionTitle: 'Header Section' }
            },
            {
              type: 'heading',
              data: { text: '[Your Supporting Subheadline]', level: '2', color: 'gray', align: 'center' },
              metadata: { placeholder: true, sectionTitle: 'Header Section' }
            }
          ]
        },
        {
          name: 'content',
          title: 'Main Content',
          description: 'Primary content area',
          blocks: [
            {
              type: 'paragraph',
              data: { text: '[Your main content goes here. Replace this placeholder text with your compelling copy.]' },
              metadata: { placeholder: true, sectionTitle: 'Main Content' }
            }
          ]
        },
        {
          name: 'cta',
          title: 'Call to Action',
          description: 'Primary call to action',
          blocks: [
            {
              type: 'button',
              data: { text: '[Your Call to Action]', href: '#', color: 'blue', size: 'large' },
              metadata: { placeholder: true, sectionTitle: 'Call to Action' }
            }
          ]
        }
      ]
    };
    
    onCreateFromBlank(blankTemplate);
    onClose();
  }

  function handleCreateFromExisting() {
    // This would open a file picker or import dialog
    // For now, let's create a simple import from JSON functionality
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (file) {
        try {
          const text = await file.text();
          const template = JSON.parse(text);
          onCreateFromExisting(template);
          onClose();
        } catch (error) {
          alert('Invalid template file. Please select a valid JSON template file.');
        }
      }
    };
    input.click();
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>
            <FontAwesomeIcon icon={faPlus} />
            Create New Template
          </h2>
          <button onClick={onClose} className={styles.closeBtn}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className={styles.content}>
          <p className={styles.description}>
            Choose how you'd like to create your new template:
          </p>

          <div className={styles.options}>
            <div className={styles.option} onClick={handleCreateBlank}>
              <div className={styles.optionIcon}>
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <div className={styles.optionContent}>
                <h3>Start from Blank</h3>
                <p>Create a new template with basic structure and placeholder content</p>
                <div className={styles.features}>
                  <span>✨ Clean structure</span>
                  <span>📝 Placeholder content</span>
                  <span>🚀 Quick start</span>
                </div>
              </div>
              <div className={styles.optionArrow}>→</div>
            </div>

            <div className={styles.option} onClick={handleCreateFromExisting}>
              <div className={styles.optionIcon}>
                <FontAwesomeIcon icon={faLayerGroup} />
              </div>
              <div className={styles.optionContent}>
                <h3>Import Template</h3>
                <p>Import an existing template from a JSON file</p>
                <div className={styles.features}>
                  <span>📁 Import JSON</span>
                  <span>🔄 Reuse existing</span>
                  <span>🎯 Proven layouts</span>
                </div>
              </div>
              <div className={styles.optionArrow}>→</div>
            </div>
          </div>

          <div className={styles.info}>
            <FontAwesomeIcon icon={faMagicWandSparkles} />
            <span>
              <strong>Pro Tip:</strong> You can also save any existing page as a template using the "Save as Template" button in the page editor.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
