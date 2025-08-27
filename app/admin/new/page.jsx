'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../../../components/Button';
import PageBuilder from '../../../components/PageBuilder';
import TemplateSelector from '../../../components/TemplateSelector';
import styles from './page.module.css';

import { faSave, faArrowLeft, faEye } from '@fortawesome/free-solid-svg-icons';

export default function NewPage() {
  const router = useRouter();
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [published, setPublished] = useState(false);
  const [blocks, setBlocks] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showTemplateSelector, setShowTemplateSelector] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const channelRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSuccess('');
    const payload = { slug, title, description, heroImage, published, blocks };
    const res = await fetch('/api/pages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      router.replace(`/admin/${encodeURIComponent(slug)}?status=created`);
    } else {
      setError('Failed to create page');
    }
  }

  useEffect(() => {
    channelRef.current = new BroadcastChannel('sales-preview');
    return () => channelRef.current.close();
  }, []);

  useEffect(() => {
    if (channelRef.current) {
      channelRef.current.postMessage({
        title,
        description,
        heroImage,
        blocks,
        published,
      });
    }
  }, [title, description, heroImage, blocks, published]);

  function openLivePreview() {
    const w = window.open(
      '/admin/preview',
      '_blank',
      'toolbar=0,location=0,status=0,menubar=0,width=800,height=600'
    );
    if (w) w.focus();
  }

  function handleTemplateSelect(templateBlocks, template) {
    setBlocks(templateBlocks);
    setSelectedTemplate(template);
    setShowTemplateSelector(false);
    
    // Auto-populate some fields based on template
    if (template && !title) {
      setTitle(`New ${template.name} Sales Page`);
    }
    if (template && !description) {
      setDescription(`Sales page created using the ${template.name} framework`);
    }
  }

  function handleSkipTemplate() {
    setShowTemplateSelector(false);
    setSelectedTemplate(null);
  }

  function changeTemplate() {
    setShowTemplateSelector(true);
  }

  // Ctrl+S to save (prevent browser save dialog)
  useEffect(() => {
    function onKeyDown(e) {
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        handleSubmit(e);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [slug, title, description, heroImage, published, blocks]);

  // Show template selector first
  if (showTemplateSelector) {
    return (
      <>
        <div className={styles.header}>
          <h1 className={styles.title}>Create New Sales Page</h1>
          <Button href="/admin" icon={faArrowLeft} label="Back to List" />
        </div>
        <TemplateSelector 
          onSelectTemplate={handleTemplateSelect}
          onSkip={handleSkipTemplate}
        />
      </>
    );
  }

  // Show page builder after template selection
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>
          New Page
          {selectedTemplate && (
            <span className={styles.templateBadge}>
              Using: {selectedTemplate.name}
            </span>
          )}
        </h1>
        <div className={styles.headerActions}>
          <Button
            icon={faEye}
            label="Open Live Preview"
            onClick={openLivePreview}
          />
          <button 
            className={styles.changeTemplateBtn}
            onClick={changeTemplate}
            type="button"
          >
            📋 Change Template
          </button>
        </div>
        <Button href="/admin" icon={faArrowLeft} label="Back to List" />
      </div>
      <div className={styles.container}>
        <div className={styles.editor}>
          {success && <p className={styles.success}>{success}</p>}
          {selectedTemplate && (
            <div className={styles.templateInfo}>
              <h3>🎯 Template: {selectedTemplate.name}</h3>
              <p>{selectedTemplate.description}</p>
              <small>
                💡 <strong>Tip:</strong> Replace the placeholder text with your content. 
                Sections marked with [brackets] need your specific information.
              </small>
            </div>
          )}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fields}>
              <label>
                Slug
                <input
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                  placeholder="e.g., my-awesome-product"
                />
              </label>
              <label>
                Title
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="Page title for SEO and browser tab"
                />
              </label>
              <div className={styles.fullWidth}>
                <label>
                  Description
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Meta description for search engines"
                  />
                </label>
              </div>
              <label>
                Hero Image URL
                <input
                  value={heroImage}
                  onChange={(e) => setHeroImage(e.target.value)}
                  placeholder="https://example.com/hero-image.jpg"
                />
              </label>
              <label>
                Published
                <input
                  type="checkbox"
                  checked={published}
                  onChange={(e) => setPublished(e.target.checked)}
                />
                <span className={styles.checkboxLabel}>Make page public</span>
              </label>
            </div>
            <div>
              <h2>Content Blocks</h2>
              <PageBuilder blocks={blocks} setBlocks={setBlocks} />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <Button type="submit" icon={faSave} label="Create Page" />
          </form>
        </div>
      </div>
    </>
  );
}
