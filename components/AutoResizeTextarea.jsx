// components/AutoResizeTextarea.jsx
'use client';

import { useEffect } from 'react';

/**
 * Automatically resizes textareas to fit their content.
 * Should be included once at the app root.
 */
export default function AutoResizeTextarea() {
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'TEXTAREA') {
        const ta = e.target;
        ta.style.height = 'auto';
        ta.style.height = `${ta.scrollHeight}px`;
      }
    };

    document.addEventListener('input', handler);

    // Initialize existing textareas on mount
    document.querySelectorAll('textarea').forEach((ta) => {
      ta.style.height = 'auto';
      ta.style.height = `${ta.scrollHeight}px`;
    });

    return () => document.removeEventListener('input', handler);
  }, []);

  return null;
}