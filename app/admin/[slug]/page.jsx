'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Button from '../../../components/Button';
import PageBuilder from '../../../components/PageBuilder';
import SaveTemplateModal from '../../../components/SaveTemplateModal';
import styles from './page.module.css';

import { faSave, faArrowLeft, faEye, faBookmark } from '@fortawesome/free-solid-svg-icons';

export default function EditPage({ params: { slug: initialSlug } }) {
  const router = useRouter();
  const [slug, setSlug] = useState(initialSlug);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [published, setPublished] = useState(false);
  const [blocks, setBlocks] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showSaveTemplate, setShowSaveTemplate] = useState(false);
  const channelRef = useRef(null);

  useEffect(() => {
    fetch(`/api/pages?slug=${encodeURIComponent(initialSlug)}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title || '');
        setDescription(data.description || '');
        setHeroImage(data.heroImage || '');
        setPublished(data.published || false);
        setBlocks(
          (data.blocks || []).map((blk) => ({
            ...blk,
            data: { ...blk.data, collapsed: blk.data?.collapsed ?? true },
          }))
        );
      });
  }, [initialSlug]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSuccess('');
    const payload = { slug, title, description, heroImage, published, blocks };
    const res = await fetch(
      `/api/pages?slug=${encodeURIComponent(initialSlug)}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );
    if (res.ok) {
      if (slug !== initialSlug) {
        window.history.replaceState(
          null,
          '',
          `/admin/${encodeURIComponent(slug)}`
        );
      }
      setSuccess('Page updated successfully.');
    } else {
      setError('Failed to update page');
    }
  }

  /**
   * Auto-save blocks when a block is collapsed/expanded.
   */
  async function handleCollapseToggle(newBlocks) {
    try {
      await fetch(
        `/api/pages?slug=${encodeURIComponent(initialSlug)}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug, title, description, heroImage, published, blocks: newBlocks }),
        }
      );
    } catch (err) {
      setError('Failed to save collapse state');
    }
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

  useEffect(() => {
    channelRef.current = new BroadcastChannel('sales-preview');
    return () => channelRef.current.close();
  }, []);

  // show creation success if redirected from new page
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.get('status') === 'created') {
      setSuccess('Page created successfully.');
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [searchParams]);

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

  function handleTemplateSaved(template) {
    setSuccess(`Template "${template.name}" saved successfully! You can now use it when creating new pages.`);
  }

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Edit Page</h1>
        <div className={styles.actions}>
          <Button
            icon={faEye}
            label="Open Live Preview"
            onClick={openLivePreview}
          />
          <Button
            icon={faBookmark}
            label="Save as Template"
            onClick={() => setShowSaveTemplate(true)}
          />
        </div>
        <Button href="/admin" icon={faArrowLeft} label="Back to List" />
      </div>
      <div className={styles.container}>
        <div className={styles.editor}>
          {success && <p className={styles.success}>{success}</p>}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fields}>
              <label>
                Slug
                <input
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                />
              </label>
              <label>
                Title
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </label>
              <div className={styles.fullWidth}>
                <label>
                  Description
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
              </div>
              <label>
                Hero Image URL
                <input
                  value={heroImage}
                  onChange={(e) => setHeroImage(e.target.value)}
                />
              </label>
              <label>
                Published
                <input
                  type="checkbox"
                  checked={published}
                  onChange={(e) => setPublished(e.target.checked)}
                />
              </label>
            </div>
            <div>
              <h2>Content Blocks</h2>
              <PageBuilder
                blocks={blocks}
                setBlocks={setBlocks}
                onCollapseToggle={handleCollapseToggle}
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <Button type="submit" icon={faSave} label="Update Page" />
          </form>
        </div>
      </div>

      {showSaveTemplate && (
        <SaveTemplateModal
          blocks={blocks}
          title={title}
          description={description}
          onSave={handleTemplateSaved}
          onClose={() => setShowSaveTemplate(false)}
        />
      )}
    </>
  );
}

