'use client';

import { useState } from 'react';
import { FaTrash, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import BlockRenderer from './BlockRenderer';
import styles from './PageBuilder.module.css';

const BLOCK_TYPES = [
  'heading',
  'paragraph',
  'image',
  'testimonial',
  'button',
  'embedCode',
  'productGrid',
  'list',
];

export default function PageBuilder({ blocks, setBlocks }) {
  function addBlock(type) {
    setBlocks([...blocks, { type, data: {} }]);
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

  return (
    <div className={styles.builder}>
      <div className={styles.palette}>
        <h3>Add Block</h3>
        {BLOCK_TYPES.map((type) => (
          <button key={type} onClick={() => addBlock(type)}>{type}</button>
        ))}
      </div>
      <div className={styles.blocks}>
        {blocks.map((block, i) => (
          <div key={i} className={styles.block}>
            <div className={styles.blockHeader}>
              <span>{block.type}</span>
              <div>
                <button onClick={() => moveBlock(i, -1)}><FaChevronUp /></button>
                <button onClick={() => moveBlock(i, 1)}><FaChevronDown /></button>
                <button onClick={() => removeBlock(i)}><FaTrash /></button>
              </div>
            </div>
            <div className={styles.blockEditor}>
              {/* TODO: implement editor inputs for each block type */}
            </div>
            <div className={styles.blockPreview}>
              <BlockRenderer block={block} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}