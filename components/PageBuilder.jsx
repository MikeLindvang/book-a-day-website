'use client';

import { useState, useCallback, useMemo } from 'react';
import { FaTrash, FaChevronUp, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faList, faLayerGroup, faUpload, faChartLine } from '@fortawesome/free-solid-svg-icons';
import BlockRenderer from './BlockRenderer';
import SectionView from './SectionView';
import BulkImport from './BulkImport';
import ContentSuggestions from './ContentSuggestions';

import { ALLOWED_COLORS } from './Heading';
import styles from './PageBuilder.module.css';

export const BLOCK_TYPES = [
  'heading',
  'paragraph',
  'markdown',
  'image',
  'testimonial',
  'button',
  'embedCode',
  'productGrid',
  'list',
];

export default function PageBuilder({ blocks, setBlocks, onCollapseToggle, userId = 'admin' }) {
  const [viewMode, setViewMode] = useState(() => {
    // Auto-detect best view mode based on content
    const hasSections = blocks.some(block => block.section);
    return hasSections ? 'sections' : 'blocks';
  });

  // Memoize expensive computations
  const hasAnyBlocks = useMemo(() => blocks.length > 0, [blocks.length]);
  const [showBulkImport, setShowBulkImport] = useState(false);
  const [showContentSuggestions, setShowContentSuggestions] = useState(false);


  const addBlock = useCallback((type) => {
    setBlocks(prev => [...prev, { type, data: { collapsed: true } }]);
  }, [setBlocks]);

  const removeBlock = useCallback((index) => {
    setBlocks(prev => prev.filter((_, i) => i !== index));
  }, [setBlocks]);

  const moveBlock = useCallback((index, direction) => {
    setBlocks(prev => {
      const newBlocks = [...prev];
      const [moved] = newBlocks.splice(index, 1);
      newBlocks.splice(index + direction, 0, moved);
      return newBlocks;
    });
  }, [setBlocks]);

  const updateBlock = useCallback((index, data) => {
    setBlocks(prev => {
      const newBlocks = [...prev];
      newBlocks[index] = { ...newBlocks[index], data };
      return newBlocks;
    });
  }, [setBlocks]);

  const [menuOpenFor, setMenuOpenFor] = useState(null);

  const insertBlockBelow = useCallback((index, type) => {
    setBlocks(prev => {
      const newBlocks = [...prev];
      newBlocks.splice(index + 1, 0, { type, data: { collapsed: false } });
      if (typeof onCollapseToggle === 'function') onCollapseToggle(newBlocks);
      return newBlocks;
    });
    setMenuOpenFor(null);
  }, [setBlocks, onCollapseToggle]);

  const toggleCollapse = useCallback((index) => {
    setBlocks(prev => {
      const newBlocks = [...prev];
      const currentCollapsed = newBlocks[index].data.collapsed || false;
      newBlocks[index] = {
        ...newBlocks[index],
        data: { ...newBlocks[index].data, collapsed: !currentCollapsed },
      };
      if (typeof onCollapseToggle === 'function') onCollapseToggle(newBlocks);
      return newBlocks;
    });
  }, [setBlocks, onCollapseToggle]);

  /**
   * Auto-generate a short snippet for collapsed block headers.
   */
  const getSnippet = useCallback((block) => {
    const d = block.data || {};
    let text = '';
    switch (block.type) {
      case 'heading':
        text = d.text;
        break;
      case 'paragraph':
        text = d.text;
        break;
      case 'markdown':
        text = d.markdown;
        break;
      case 'testimonial':
        text = d.quote;
        break;
      case 'button':
        text = d.label;
        break;
      case 'list':
        text = Array.isArray(d.items) && d.items.length ? d.items[0] : '';
        break;
      case 'image':
        text = d.alt || d.src;
        break;
      default:
        text = '';
    }
    if (!text) return '';
    // collapse whitespace and truncate
    const normalized = text.replace(/\s+/g, ' ').trim();
    return normalized.length > 30 ? normalized.slice(0, 30) + '…' : normalized;
  }, []);

  const handleBulkImport = useCallback((importedBlocks) => {
    setBlocks(prev => [...prev, ...importedBlocks]);
    setShowBulkImport(false);
  }, [setBlocks]);



  return (
    <div className={styles.builder}>
      <div className={styles.viewToggle}>
        <h3>Content Editor</h3>
        <div className={styles.toggleControls}>
          <div className={styles.toggleButtons}>
            <button 
              className={`${styles.toggleBtn} ${viewMode === 'blocks' ? styles.active : ''}`}
              onClick={() => setViewMode('blocks')}
              aria-pressed={viewMode === 'blocks'}
              aria-label="Switch to block view"
            >
              <FontAwesomeIcon icon={faList} aria-hidden="true" />
              Block View
            </button>
            <button 
              className={`${styles.toggleBtn} ${viewMode === 'sections' ? styles.active : ''}`}
              onClick={() => setViewMode('sections')}
              aria-pressed={viewMode === 'sections'}
              aria-label="Switch to section view"
            >
              <FontAwesomeIcon icon={faLayerGroup} aria-hidden="true" />
              Section View
            </button>
          </div>
          <button 
            className={styles.bulkImportBtn}
            onClick={() => setShowBulkImport(true)}
            aria-label="Open bulk import dialog"
          >
            <FontAwesomeIcon icon={faUpload} aria-hidden="true" />
            Bulk Import
          </button>
          <button 
            className={styles.analysisBtn}
            onClick={() => setShowContentSuggestions(true)}
            disabled={!hasAnyBlocks}
            aria-label={!hasAnyBlocks ? "AI Analysis - Add content blocks first" : "Open AI content analysis"}
          >
            <FontAwesomeIcon icon={faChartLine} aria-hidden="true" />
            AI Analysis
          </button>

        </div>
      </div>

      {viewMode === 'sections' ? (
        <SectionView blocks={blocks} setBlocks={setBlocks} />
      ) : (
        <div className={styles.builderContent}>
          <div className={styles.palette}>
            <h3 id="add-block-heading">Add Block</h3>
            <div role="group" aria-labelledby="add-block-heading">
              {BLOCK_TYPES.map((type) => (
                <button 
                  key={type} 
                  onClick={() => addBlock(type)}
                  aria-label={`Add ${type} block`}
                >
                  <FontAwesomeIcon icon={faPlus} className={styles.icon} aria-hidden="true" />
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.blocks}>
        {blocks.map((block, i) => {
          const collapsed = block.data.collapsed || false;
          const isTemplateBlock = block.metadata?.placeholder;
          const sectionInfo = block.metadata?.sectionTitle;
          return (
          <div key={i} className={`${styles.block} ${isTemplateBlock ? styles.templateBlock : ''}`}>
              <div className={styles.blockHeader}>
                <span className={styles.blockType}>
                  {block.type}
                  {getSnippet(block) && ` — ${getSnippet(block)}`}
                </span>
                {sectionInfo && (
                  <span className={styles.sectionBadge}>
                    📋 {sectionInfo}
                  </span>
                )}
                {isTemplateBlock && (
                  <span className={styles.placeholderBadge}>
                    ✏️ Template
                  </span>
                )}
                <div>
                  <button 
                    onClick={() => moveBlock(i, -1)}
                    aria-label={`Move ${block.type} block up`}
                    disabled={i === 0}
                  >
                    <FaChevronUp aria-hidden="true" />
                  </button>
                  <button 
                    onClick={() => moveBlock(i, 1)}
                    aria-label={`Move ${block.type} block down`}
                    disabled={i === blocks.length - 1}
                  >
                    <FaChevronDown aria-hidden="true" />
                  </button>
                  <button 
                    onClick={() => removeBlock(i)}
                    aria-label={`Delete ${block.type} block`}
                  >
                    <FaTrash aria-hidden="true" />
                  </button>
                  <button
                    onClick={() => toggleCollapse(i)}
                    className={styles.collapseButton}
                    aria-label={collapsed ? `Expand ${block.type} block` : `Collapse ${block.type} block`}
                    aria-expanded={!collapsed}
                  >
                    {collapsed ? <FaChevronRight aria-hidden="true" /> : <FaChevronDown aria-hidden="true" />}
                  </button>
                  <button
                    onClick={() => setMenuOpenFor(i)}
                    className={styles.insertButton}
                    aria-label={`Insert new block after ${block.type} block`}
                    aria-expanded={menuOpenFor === i}
                    title="Insert block below"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  {menuOpenFor === i && (
                    <div 
                      className={styles.insertMenu}
                      role="menu"
                      aria-label="Insert block options"
                    >
                      {BLOCK_TYPES.map((type) => (
                        <button
                          key={type}
                          onClick={() => insertBlockBelow(i, type)}
                          className={styles.insertMenuItem}
                          role="menuitem"
                          aria-label={`Insert ${type} block below`}
                        >
                          <FontAwesomeIcon icon={faPlus} className={styles.icon} aria-hidden="true" />
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {!collapsed && (
                <>
                  <div className={styles.blockEditor}>
                    {(() => {
                      switch (block.type) {
                  case 'heading':
                    return (
                      <>
                        <label>
                          Text
                          <input
                            value={block.data.text || ''}
                            onChange={(e) => updateBlock(i, { ...block.data, text: e.target.value })}
                          />
                        </label>
                        <label>
                          Level
                          <select
                            value={block.data.level || '2'}
                            onChange={(e) =>
                              updateBlock(i, { ...block.data, level: e.target.value })
                            }
                          >
                            <option value="1">H1</option>
                            <option value="2">H2</option>
                            <option value="3">H3</option>
                            <option value="4">H4</option>
                          </select>
                        </label>
                        <label>
                          Color
                          <select
                            value={block.data.color || 'primary'}
                            onChange={(e) => updateBlock(i, { ...block.data, color: e.target.value })}
                          >
                            {ALLOWED_COLORS.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        </label>
                      </>
                    );
                  case 'paragraph':
                    return (
                      <label className={styles.fullWidth}>
                        Text
                        <textarea
                          value={block.data.text || ''}
                          onChange={(e) => updateBlock(i, { ...block.data, text: e.target.value })}
                        />
                      </label>
                    );
                  case 'markdown':
                    return (
                      <>
                        <label className={styles.fullWidth}>
                          Markdown
                          <textarea
                            value={block.data.markdown || ''}
                            onChange={(e) =>
                              updateBlock(i, { ...block.data, markdown: e.target.value })
                            }
                          />
                        </label>
                        <label className={styles.fullWidth}>
                          Card style
                          <select
                            value={block.data.cardVariant || ''}
                            onChange={(e) =>
                              updateBlock(i, {
                                ...block.data,
                                cardVariant: e.target.value || undefined,
                              })
                            }
                          >
                            <option value="">None</option>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="accent">Accent</option>
                            <option value="info">Info</option>
                            <option value="success">Success</option>
                          </select>
                        </label>
                      </>
                    );
                  case 'image':
                    return (
                      <>
                        <label>
                          Source
                          <input
                            value={block.data.src || ''}
                            onChange={(e) => updateBlock(i, { ...block.data, src: e.target.value })}
                          />
                        </label>
                        <label>
                          Alt text
                          <input
                            value={block.data.alt || ''}
                            onChange={(e) => updateBlock(i, { ...block.data, alt: e.target.value })}
                          />
                        </label>
                      </>
                    );
                  case 'testimonial':
                    return (
                      <>
                        <label>
                          Quote
                          <textarea
                            value={block.data.quote || ''}
                            onChange={(e) => updateBlock(i, { ...block.data, quote: e.target.value })}
                          />
                        </label>
                        <label>
                          Author
                          <input
                            value={block.data.author || ''}
                            onChange={(e) => updateBlock(i, { ...block.data, author: e.target.value })}
                          />
                        </label>
                      </>
                    );
                  case 'button':
                    return (
                      <>
                        <label>
                          Label
                          <input
                            value={block.data.label || ''}
                            onChange={(e) => updateBlock(i, { ...block.data, label: e.target.value })}
                          />
                        </label>
                        <label>
                          Link
                          <input
                            value={block.data.href || ''}
                            onChange={(e) => updateBlock(i, { ...block.data, href: e.target.value })}
                          />
                        </label>
                        <label>
                          Alignment
                          <select
                            value={block.data.align || 'left'}
                            onChange={(e) => updateBlock(i, { ...block.data, align: e.target.value })}
                          >
                            <option value="left">Left</option>
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                          </select>
                        </label>
                      </>
                    );
                  case 'embedCode':
                    return (
                      <>
                        <label className={styles.fullWidth}>
                          Code
                          <textarea
                            value={block.data.code || ''}
                            onChange={(e) => updateBlock(i, { ...block.data, code: e.target.value })}
                            rows={3}
                          />
                        </label>
                        <label>
                          Alignment
                          <select
                            value={block.data.align || 'left'}
                            onChange={(e) => updateBlock(i, { ...block.data, align: e.target.value })}
                          >
                            <option value="left">Left</option>
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                          </select>
                        </label>
                      </>
                    );
                  case 'productGrid':
                    return (
                      <label className={styles.fullWidth}>
                        Products (comma-separated slugs)
                        <input
                          value={(block.data.products || []).join(', ')}
                          onChange={(e) =>
                            updateBlock(i, {
                              ...block.data,
                              products: e.target.value
                                .split(',')
                                .map((s) => s.trim()),
                            })
                          }
                        />
                      </label>
                    );
                  case 'list':
                    return (
                      <>
                        <label className={styles.fullWidth}>
                          Items (comma-separated)
                          <input
                            value={(block.data.items || []).join(', ')}
                            onChange={(e) =>
                              updateBlock(i, {
                                ...block.data,
                                items: e.target.value
                                  .split(',')
                                  .map((s) => s.trim()),
                              })
                            }
                          />
                        </label>
                        <label>
                          Ordered
                          <input
                            type="checkbox"
                            checked={block.data.ordered || false}
                            onChange={(e) =>
                              updateBlock(i, { ...block.data, ordered: e.target.checked })
                            }
                          />
                        </label>
                        <label>
                          Alternate
                          <input
                            type="checkbox"
                            checked={block.data.alternate || false}
                            onChange={(e) =>
                              updateBlock(i, { ...block.data, alternate: e.target.checked })
                            }
                          />
                        </label>
                      </>
                    );
                  default:
                    return null;
                }
              })()}
              </div>
              <div className={styles.blockPreview}>
                <BlockRenderer block={block} />
              </div>
            </>
          )}
        </div>
      );
    })}
          </div>
        </div>
      )}

      {/* Modals - rendered at the top level to avoid duplication */}
      {showBulkImport && (
        <BulkImport 
          onImport={handleBulkImport}
          onClose={() => setShowBulkImport(false)}
        />
      )}
      
      {showContentSuggestions && (
        <ContentSuggestions 
          blocks={blocks}
          onUpdateBlock={updateBlock}
          onClose={() => setShowContentSuggestions(false)}
        />
      )}
      

    </div>
  );
}