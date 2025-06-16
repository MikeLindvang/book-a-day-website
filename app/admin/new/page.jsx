'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../../../components/Button';
import PageBuilder from '../../../components/PageBuilder';
import styles from './page.module.css';

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
      channelRef.current.postMessage({ title, description, heroImage, blocks, published });
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

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>New Page</h1>
        <Button href="/admin" label="← Back to List" />
      </div>
      <div className={styles.container}>
        <div className={styles.editor}>
          {success && <p className={styles.success}>{success}</p>}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fields}>
              <label>
                Slug
                <input value={slug} onChange={(e) => setSlug(e.target.value)} required />
              </label>
              <label>
                Title
                <input value={title} onChange={(e) => setTitle(e.target.value)} required />
              </label>
              <div className={styles.fullWidth}>
                <label>
                  Description
                  <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
              </div>
              <label>
                Hero Image URL
                <input value={heroImage} onChange={(e) => setHeroImage(e.target.value)} />
              </label>
              <label>
                Published
                <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
              </label>
            </div>
            <div>
              <h2>Content Blocks</h2>
              <PageBuilder blocks={blocks} setBlocks={setBlocks} />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <Button type="submit" label="Create Page" />
          </form>
        </div>
        <div className={styles.preview}>
          <Button label="Open Live Preview" onClick={openLivePreview} />
        </div>
      </div>
    </>
  );
}