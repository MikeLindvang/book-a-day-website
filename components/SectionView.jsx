'use client';

import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faChevronDown, 
  faChevronRight, 
  faGripVertical,
  faTrash,
  faCopy,
  faArrowUp,
  faArrowDown,
  faEye,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons';
import BlockRenderer from './BlockRenderer';
import { BLOCK_TYPES } from './PageBuilder';
import styles from './SectionView.module.css';

// Section templates for quick adding
const SECTION_TEMPLATES = {
  'hook': {
    name: 'Hook/Attention Grabber',
    description: 'Opening that grabs attention',
    icon: '🎯',
    blocks: [
      { type: 'heading', data: { text: '[Attention-Grabbing Headline]', level: '1', color: 'red', align: 'center' } }
    ]
  },
  'problem': {
    name: 'Problem/Pain Points',
    description: 'Identify and agitate the problem',
    icon: '⚠️',
    blocks: [
      { type: 'heading', data: { text: 'The Problem With [Current Situation]', level: '2', color: 'primary' } },
      { type: 'paragraph', data: { text: 'Are you struggling with [specific pain point]?' } }
    ]
  },
  'solution': {
    name: 'Solution/Method',
    description: 'Present your solution',
    icon: '💡',
    blocks: [
      { type: 'heading', data: { text: 'Here\'s What Actually Works', level: '2', color: 'blue' } },
      { type: 'paragraph', data: { text: '[Explain your solution approach]' } }
    ]
  },
  'benefits': {
    name: 'Benefits/Features',
    description: 'What they get',
    icon: '⭐',
    blocks: [
      { type: 'heading', data: { text: 'What You Get', level: '3', color: 'primary' } },
      { type: 'list', data: { items: ['[Benefit 1]', '[Benefit 2]', '[Benefit 3]'] } }
    ]
  },
  'social-proof': {
    name: 'Social Proof',
    description: 'Testimonials and credibility',
    icon: '👥',
    blocks: [
      { type: 'heading', data: { text: 'What Others Are Saying', level: '3', color: 'primary' } },
      { type: 'testimonial', data: { quote: '[Customer testimonial here]', author: '[Customer Name]' } }
    ]
  },
  'cta': {
    name: 'Call to Action',
    description: 'Purchase or signup section',
    icon: '🎯',
    blocks: [
      { type: 'heading', data: { text: 'Get Started Today', level: '3', color: 'blue', align: 'center' } },
      { type: 'embedCode', data: { code: '<!-- Your buy button code -->', align: 'center' } }
    ]
  },
  'guarantee': {
    name: 'Guarantee/Risk Reversal',
    description: 'Address risk concerns',
    icon: '🛡️',
    blocks: [
      { type: 'heading', data: { text: 'Your Investment is Protected', level: '3', color: 'green', align: 'center' } },
      { type: 'paragraph', data: { text: '[Your guarantee terms]' } }
    ]
  },
  'urgency': {
    name: 'Urgency/Scarcity',
    description: 'Create urgency to act now',
    icon: '⏰',
    blocks: [
      { type: 'heading', data: { text: 'Limited Time Offer', level: '3', color: 'red', align: 'center' } },
      { type: 'paragraph', data: { text: '[Scarcity or urgency message]' } }
    ]
  },
  'custom': {
    name: 'Custom Section',
    description: 'Start with empty section',
    icon: '📝',
    blocks: []
  }
};

export default function SectionView({ blocks, setBlocks }) {
  const [collapsedSections, setCollapsedSections] = useState(new Set());
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [draggedSection, setDraggedSection] = useState(null);
  const [draggedBlock, setDraggedBlock] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const dragOverRef = useRef(null);

  // Group blocks by section
  const sections = groupBlocksBySection(blocks);
  const sectionOrder = Object.keys(sections);

  function groupBlocksBySection(blocks) {
    const grouped = {};
    blocks.forEach((block, index) => {
      const sectionName = block.section || 'uncategorized';
      if (!grouped[sectionName]) {
        grouped[sectionName] = [];
      }
      grouped[sectionName].push({ ...block, originalIndex: index });
    });
    return grouped;
  }

  function toggleSection(sectionName) {
    const newCollapsed = new Set(collapsedSections);
    if (newCollapsed.has(sectionName)) {
      newCollapsed.delete(sectionName);
    } else {
      newCollapsed.add(sectionName);
    }
    setCollapsedSections(newCollapsed);
  }

  function addSection(templateKey) {
    const template = SECTION_TEMPLATES[templateKey];
    const sectionName = templateKey === 'custom' ? 
      `custom-${Date.now()}` : 
      templateKey;

    const newBlocks = template.blocks.map((blockTemplate, index) => ({
      ...blockTemplate,
      section: sectionName,
      sectionIndex: index,
      metadata: {
        placeholder: true,
        template: templateKey,
        sectionTitle: template.name,
        editable: true
      }
    }));

    setBlocks([...blocks, ...newBlocks]);
    setShowAddMenu(false);
  }

  function deleteSection(sectionName) {
    if (confirm(`Delete entire "${formatSectionName(sectionName)}" section?`)) {
      const newBlocks = blocks.filter(block => block.section !== sectionName);
      setBlocks(newBlocks);
    }
  }

  function duplicateSection(sectionName) {
    const sectionBlocks = sections[sectionName];
    const newSectionName = `${sectionName}-copy-${Date.now()}`;
    
    const duplicatedBlocks = sectionBlocks.map(block => ({
      ...block,
      section: newSectionName,
      metadata: {
        ...block.metadata,
        sectionTitle: `${block.metadata?.sectionTitle || formatSectionName(sectionName)} (Copy)`
      }
    }));

    setBlocks([...blocks, ...duplicatedBlocks]);
  }

  function moveSection(sectionName, direction) {
    const currentIndex = sectionOrder.indexOf(sectionName);
    const newIndex = currentIndex + direction;
    
    if (newIndex < 0 || newIndex >= sectionOrder.length) return;

    const newBlocks = [...blocks];
    const sectionBlocks = newBlocks.filter(block => block.section === sectionName);
    const otherBlocks = newBlocks.filter(block => block.section !== sectionName);
    
    // Calculate insertion point based on new position
    const targetSection = sectionOrder[newIndex];
    const targetBlocks = otherBlocks.filter(block => block.section === targetSection);
    
    if (direction > 0) {
      // Moving down - insert after target section
      const insertIndex = Math.max(...targetBlocks.map(block => block.originalIndex)) + 1;
      otherBlocks.splice(insertIndex, 0, ...sectionBlocks);
    } else {
      // Moving up - insert before target section
      const insertIndex = Math.min(...targetBlocks.map(block => block.originalIndex));
      otherBlocks.splice(insertIndex, 0, ...sectionBlocks);
    }

    setBlocks(otherBlocks);
  }

  function addBlockToSection(sectionName, blockType) {
    const newBlock = {
      type: blockType,
      data: { collapsed: false },
      section: sectionName,
      sectionIndex: sections[sectionName]?.length || 0,
      metadata: {
        editable: true,
        sectionTitle: formatSectionName(sectionName)
      }
    };

    setBlocks([...blocks, newBlock]);
  }

  function updateBlock(originalIndex, newData) {
    const newBlocks = [...blocks];
    newBlocks[originalIndex] = { ...newBlocks[originalIndex], data: newData };
    setBlocks(newBlocks);
  }

  function removeBlock(originalIndex) {
    const newBlocks = blocks.filter((_, index) => index !== originalIndex);
    setBlocks(newBlocks);
  }

  function formatSectionName(sectionName) {
    if (sectionName === 'uncategorized') return 'Uncategorized';
    return sectionName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  function getSectionIcon(sectionName) {
    const template = SECTION_TEMPLATES[sectionName];
    if (template) return template.icon;
    
    // Fallback icons based on section name
    if (sectionName.includes('hook') || sectionName.includes('headline')) return '🎯';
    if (sectionName.includes('problem') || sectionName.includes('pain')) return '⚠️';
    if (sectionName.includes('solution') || sectionName.includes('method')) return '💡';
    if (sectionName.includes('benefit') || sectionName.includes('feature')) return '⭐';
    if (sectionName.includes('proof') || sectionName.includes('testimonial')) return '👥';
    if (sectionName.includes('cta') || sectionName.includes('action')) return '🎯';
    if (sectionName.includes('guarantee') || sectionName.includes('risk')) return '🛡️';
    if (sectionName.includes('urgency') || sectionName.includes('scarcity')) return '⏰';
    return '📄';
  }

  // Drag and drop handlers
  function handleSectionDragStart(e, sectionName) {
    setDraggedSection(sectionName);
    e.dataTransfer.effectAllowed = 'move';
  }

  function handleSectionDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function handleSectionDrop(e, targetSection) {
    e.preventDefault();
    if (draggedSection && draggedSection !== targetSection) {
      const fromIndex = sectionOrder.indexOf(draggedSection);
      const toIndex = sectionOrder.indexOf(targetSection);
      moveSection(draggedSection, toIndex - fromIndex);
    }
    setDraggedSection(null);
  }

  if (previewMode) {
    return (
      <div className={styles.previewMode}>
        <div className={styles.previewHeader}>
          <h3>📖 Preview Mode</h3>
          <button 
            onClick={() => setPreviewMode(false)}
            className={styles.exitPreview}
          >
            <FontAwesomeIcon icon={faEyeSlash} />
            Exit Preview
          </button>
        </div>
        <div className={styles.previewContent}>
          {blocks.map((block, index) => (
            <div key={index} className={styles.previewBlock}>
              <BlockRenderer block={block} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.sectionView}>
      <div className={styles.sectionHeader}>
        <h3>📋 Section View</h3>
        <div className={styles.sectionControls}>
          <button 
            onClick={() => setPreviewMode(true)}
            className={styles.previewBtn}
            title="Preview entire page"
          >
            <FontAwesomeIcon icon={faEye} />
            Preview
          </button>
          <button 
            onClick={() => setShowAddMenu(!showAddMenu)}
            className={styles.addSectionBtn}
          >
            <FontAwesomeIcon icon={faPlus} />
            Add Section
          </button>
        </div>
      </div>

      {showAddMenu && (
        <div className={styles.addSectionMenu}>
          <h4>Choose Section Type:</h4>
          <div className={styles.sectionTemplates}>
            {Object.entries(SECTION_TEMPLATES).map(([key, template]) => (
              <button
                key={key}
                onClick={() => addSection(key)}
                className={styles.sectionTemplate}
              >
                <span className={styles.templateIcon}>{template.icon}</span>
                <div className={styles.templateInfo}>
                  <strong>{template.name}</strong>
                  <small>{template.description}</small>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={styles.sections}>
        {sectionOrder.map((sectionName, sectionIndex) => {
          const sectionBlocks = sections[sectionName];
          const isCollapsed = collapsedSections.has(sectionName);
          const isDragging = draggedSection === sectionName;

          return (
            <div 
              key={sectionName}
              className={`${styles.section} ${isDragging ? styles.dragging : ''}`}
              draggable
              onDragStart={(e) => handleSectionDragStart(e, sectionName)}
              onDragOver={handleSectionDragOver}
              onDrop={(e) => handleSectionDrop(e, sectionName)}
            >
              <div className={styles.sectionHeaderBar}>
                <div className={styles.sectionInfo}>
                  <FontAwesomeIcon icon={faGripVertical} className={styles.dragHandle} />
                  <span className={styles.sectionIcon}>
                    {getSectionIcon(sectionName)}
                  </span>
                  <h4 className={styles.sectionTitle}>
                    {formatSectionName(sectionName)}
                  </h4>
                  <span className={styles.blockCount}>
                    {sectionBlocks.length} block{sectionBlocks.length !== 1 ? 's' : ''}
                  </span>
                </div>
                
                <div className={styles.sectionActions}>
                  <button
                    onClick={() => toggleSection(sectionName)}
                    className={styles.collapseBtn}
                    title={isCollapsed ? 'Expand section' : 'Collapse section'}
                  >
                    <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronDown} />
                  </button>
                  
                  <div className={styles.sectionMenu}>
                    <button
                      onClick={() => moveSection(sectionName, -1)}
                      disabled={sectionIndex === 0}
                      title="Move section up"
                    >
                      <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                    <button
                      onClick={() => moveSection(sectionName, 1)}
                      disabled={sectionIndex === sectionOrder.length - 1}
                      title="Move section down"
                    >
                      <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                    <button
                      onClick={() => duplicateSection(sectionName)}
                      title="Duplicate section"
                    >
                      <FontAwesomeIcon icon={faCopy} />
                    </button>
                    <button
                      onClick={() => deleteSection(sectionName)}
                      className={styles.deleteBtn}
                      title="Delete section"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              </div>

              {!isCollapsed && (
                <div className={styles.sectionContent}>
                  {sectionBlocks.map((block, blockIndex) => (
                    <div key={block.originalIndex} className={styles.blockContainer}>
                      <BlockEditor
                        block={block}
                        blockIndex={blockIndex}
                        sectionName={sectionName}
                        onUpdate={(newData) => updateBlock(block.originalIndex, newData)}
                        onDelete={() => removeBlock(block.originalIndex)}
                      />
                    </div>
                  ))}
                  
                  <div className={styles.addBlockSection}>
                    <select 
                      onChange={(e) => {
                        if (e.target.value) {
                          addBlockToSection(sectionName, e.target.value);
                          e.target.value = '';
                        }
                      }}
                      className={styles.addBlockSelect}
                    >
                      <option value="">+ Add Block to Section</option>
                      {BLOCK_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {sectionOrder.length === 0 && (
        <div className={styles.emptyState}>
          <h3>🚀 Ready to Build Your Sales Page?</h3>
          <p>Start by adding your first section using a proven template.</p>
          <button 
            onClick={() => setShowAddMenu(true)}
            className={styles.startBtn}
          >
            <FontAwesomeIcon icon={faPlus} />
            Add Your First Section
          </button>
        </div>
      )}
    </div>
  );
}

// Simplified block editor for section view
function BlockEditor({ block, blockIndex, sectionName, onUpdate, onDelete }) {
  const [collapsed, setCollapsed] = useState(block.data.collapsed || false);
  const isTemplate = block.metadata?.placeholder;

  function updateField(field, value) {
    onUpdate({ ...block.data, [field]: value });
  }

  return (
    <div className={`${styles.blockEditor} ${isTemplate ? styles.templateBlock : ''}`}>
      <div className={styles.blockHeader}>
        <span className={styles.blockType}>
          {block.type}
          {isTemplate && <span className={styles.templateBadge}>📝</span>}
        </span>
        <div className={styles.blockActions}>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={styles.toggleBtn}
          >
            <FontAwesomeIcon icon={collapsed ? faChevronRight : faChevronDown} />
          </button>
          <button
            onClick={onDelete}
            className={styles.deleteBtn}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>

      {!collapsed && (
        <div className={styles.blockContent}>
          {/* Simplified editors for common block types */}
          {block.type === 'heading' && (
            <>
              <input
                value={block.data.text || ''}
                onChange={(e) => updateField('text', e.target.value)}
                placeholder="Headline text..."
                className={styles.headingInput}
              />
              <div className={styles.blockOptions}>
                <select
                  value={block.data.level || '2'}
                  onChange={(e) => updateField('level', e.target.value)}
                >
                  <option value="1">H1</option>
                  <option value="2">H2</option>
                  <option value="3">H3</option>
                  <option value="4">H4</option>
                </select>
                <select
                  value={block.data.color || 'primary'}
                  onChange={(e) => updateField('color', e.target.value)}
                >
                  <option value="primary">Primary</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                </select>
              </div>
            </>
          )}

          {block.type === 'paragraph' && (
            <textarea
              value={block.data.text || ''}
              onChange={(e) => updateField('text', e.target.value)}
              placeholder="Paragraph content..."
              className={styles.paragraphInput}
              rows={3}
            />
          )}

          {block.type === 'list' && (
            <textarea
              value={(block.data.items || []).join('\n')}
              onChange={(e) => updateField('items', e.target.value.split('\n').filter(Boolean))}
              placeholder="One item per line..."
              className={styles.listInput}
              rows={4}
            />
          )}

          {block.type === 'testimonial' && (
            <>
              <textarea
                value={block.data.quote || ''}
                onChange={(e) => updateField('quote', e.target.value)}
                placeholder="Customer testimonial..."
                className={styles.testimonialQuote}
                rows={3}
              />
              <input
                value={block.data.author || ''}
                onChange={(e) => updateField('author', e.target.value)}
                placeholder="Customer name..."
                className={styles.testimonialAuthor}
              />
            </>
          )}

          {block.type === 'embedCode' && (
            <textarea
              value={block.data.code || ''}
              onChange={(e) => updateField('code', e.target.value)}
              placeholder="Embed code (buy buttons, tracking, etc.)..."
              className={styles.embedInput}
              rows={4}
            />
          )}

          {block.type === 'button' && (
            <>
              <input
                value={block.data.label || ''}
                onChange={(e) => updateField('label', e.target.value)}
                placeholder="Button text..."
                className={styles.buttonLabel}
              />
              <input
                value={block.data.href || ''}
                onChange={(e) => updateField('href', e.target.value)}
                placeholder="Button link..."
                className={styles.buttonHref}
              />
            </>
          )}

          {/* Preview */}
          <div className={styles.blockPreview}>
            <BlockRenderer block={block} />
          </div>
        </div>
      )}
    </div>
  );
}
