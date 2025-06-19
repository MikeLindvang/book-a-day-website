'use client';

import { useState } from 'react';
import { FaTrash, FaChevronUp, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import BlockRenderer from './BlockRenderer';
import { ALLOWED_COLORS } from './Heading';
import styles from './PageBuilder.module.css';

const BLOCK_TYPES = [
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

export default function PageBuilder({ blocks, setBlocks, onCollapseToggle }) {
  function addBlock(type) {
    setBlocks([...blocks, { type, data: { collapsed: true } }]);
  }

  function removeBlock(index) {
    setBlocks(blocks.filter((_, i) => i !== index));
  }

  function moveBlock(index, direction) {
    const newBlocks = [...blocks];
    const [moved] = newBlocks.splice(index, 1);
    newBlocks.splice(index + direction, 0, moved);
    setBlocks(newBlocks);
  }

  function updateBlock(index, data) {
    const newBlocks = [...blocks];
    newBlocks[index] = { ...newBlocks[index], data };
    setBlocks(newBlocks);
  }

  const [menuOpenFor, setMenuOpenFor] = useState(null);

  function insertBlockBelow(index, type) {
    const newBlocks = [...blocks];
    newBlocks.splice(index + 1, 0, { type, data: { collapsed: false } });
    setBlocks(newBlocks);
    setMenuOpenFor(null);
    if (typeof onCollapseToggle === 'function') onCollapseToggle(newBlocks);
  }

  function toggleCollapse(index) {
    const newBlocks = [...blocks];
    const prev = newBlocks[index].data.collapsed || false;
    newBlocks[index] = {
      ...newBlocks[index],
      data: { ...newBlocks[index].data, collapsed: !prev },
    };
    setBlocks(newBlocks);
    if (typeof onCollapseToggle === 'function') onCollapseToggle(newBlocks);
  }

  /**
   * Auto-generate a short snippet for collapsed block headers.
   */
  function getSnippet(block) {
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
  }

  return (
    <div className={styles.builder}>
      <div className={styles.palette}>
        <h3>Add Block</h3>
        {BLOCK_TYPES.map((type) => (
          <button key={type} onClick={() => addBlock(type)}>
            <FontAwesomeIcon icon={faPlus} className={styles.icon} />
            {type}
          </button>
        ))}
      </div>
      <div className={styles.blocks}>
        {blocks.map((block, i) => {
          const collapsed = block.data.collapsed || false;
          return (
          <div key={i} className={styles.block}>
              <div className={styles.blockHeader}>
                <span>
                  {block.type}
                  {getSnippet(block) && ` — ${getSnippet(block)}`}
                </span>
                <div>
                  <button onClick={() => moveBlock(i, -1)}><FaChevronUp /></button>
                  <button onClick={() => moveBlock(i, 1)}><FaChevronDown /></button>
                  <button onClick={() => removeBlock(i)}><FaTrash /></button>
                  <button
                    onClick={() => toggleCollapse(i)}
                    className={styles.collapseButton}
                    title={collapsed ? 'Expand block' : 'Collapse block'}
                  >
                    {collapsed ? <FaChevronRight /> : <FaChevronDown />}
                  </button>
                  <button
                    onClick={() => setMenuOpenFor(i)}
                    className={styles.insertButton}
                    title="Insert block below"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  {menuOpenFor === i && (
                    <div className={styles.insertMenu}>
                      {BLOCK_TYPES.map((type) => (
                        <button
                          key={type}
                          onClick={() => insertBlockBelow(i, type)}
                          className={styles.insertMenuItem}
                        >
                          <FontAwesomeIcon icon={faPlus} className={styles.icon} />
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
                      <label className={styles.fullWidth}>
                        Markdown
                        <textarea
                          value={block.data.markdown || ''}
                          onChange={(e) =>
                            updateBlock(i, { ...block.data, markdown: e.target.value })
                          }
                        />
                      </label>
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
  );
}