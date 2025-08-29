'use client';

import { useEffect, useState } from 'react';
import Table from '../../components/Table';
import Button from '../../components/Button';
import GenerateDraftPanel from '../../components/GenerateDraftPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPencilAlt, faTrash, faPlus, faFileAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './page.module.css';

export default function AdminPageList() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/pages')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch pages');
        return res.json();
      })
      .then((data) => {
        setPages(data || []);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function handleDelete(slug) {
    if (!confirm('Delete this page?')) return;
    try {
      const response = await fetch(`/api/pages?slug=${encodeURIComponent(slug)}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete page');
      setPages((prev) => prev.filter((p) => p.slug !== slug));
    } catch (err) {
      alert('Failed to delete page: ' + err.message);
    }
  }

  // Loading state
  if (loading) {
    return (
      <div className={styles.adminContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.header}>
            <h1 className={styles.title}>Pages</h1>
            <Button href="/admin/new" icon={faPlus} label="New Page" />
          </div>
          <div className={styles.loadingContainer}>
            <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />
            <p className={styles.loadingText}>Loading pages...</p>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <GenerateDraftPanel 
            projectId="demo" 
            mode="server"
            onDraftGenerated={(blocks, metadata) => {
              console.log('Draft generated:', { blocks, metadata });
              // TODO: Handle draft generation - could redirect to new page or show success message
            }}
          />
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={styles.adminContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.header}>
            <h1 className={styles.title}>Pages</h1>
            <Button href="/admin/new" icon={faPlus} label="New Page" />
          </div>
          <div className={styles.errorContainer}>
            <p className={styles.errorText}>Error: {error}</p>
            <Button 
              label="Retry" 
              onClick={() => window.location.reload()} 
              className={styles.retryButton}
            />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <GenerateDraftPanel 
            projectId="demo" 
            mode="server"
            onDraftGenerated={(blocks, metadata) => {
              console.log('Draft generated:', { blocks, metadata });
              // TODO: Handle draft generation - could redirect to new page or show success message
            }}
          />
        </div>
      </div>
    );
  }

  // Empty state
  if (pages.length === 0) {
    return (
      <div className={styles.adminContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.header}>
            <h1 className={styles.title}>Pages</h1>
            <Button href="/admin/new" icon={faPlus} label="New Page" />
          </div>
          <div className={styles.emptyContainer}>
            <FontAwesomeIcon icon={faFileAlt} className={styles.emptyIcon} />
            <h3 className={styles.emptyTitle}>No pages found</h3>
            <p className={styles.emptyText}>Get started by creating your first sales page.</p>
            <Button href="/admin/new" icon={faPlus} label="Create Your First Page" />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <GenerateDraftPanel 
            projectId="demo" 
            mode="server"
            onDraftGenerated={(blocks, metadata) => {
              console.log('Draft generated:', { blocks, metadata });
              // TODO: Handle draft generation - could redirect to new page or show success message
            }}
          />
        </div>
      </div>
    );
  }

  const rows = pages.map((p) => ({
    cells: [
      p.slug,
      p.title,
      <span key="published" className={`${styles.statusBadge} ${p.published ? styles.published : styles.draft}`}>
        {p.published ? 'Published' : 'Draft'}
      </span>,
      <div key="actions" className={styles.actions}>
        <a href={`/${p.slug}`} title="View page" className={styles.iconButton} aria-label={`View ${p.title}`}>
          <FontAwesomeIcon icon={faEye} />
        </a>
        <a href={`/admin/${p.slug}`} title="Edit page" className={styles.iconButton} aria-label={`Edit ${p.title}`}>
          <FontAwesomeIcon icon={faPencilAlt} />
        </a>
        <button
          onClick={() => handleDelete(p.slug)}
          title="Delete page"
          className={`${styles.iconButton} ${styles.deleteIcon}`}
          aria-label={`Delete ${p.title}`}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>,
    ],
  }));

  return (
    <div className={styles.adminContainer}>
      <div className={styles.leftColumn}>
        <div className={styles.header}>
          <h1 className={styles.title}>Pages</h1>
          <Button href="/admin/new" icon={faPlus} label="New Page" />
        </div>
        <Table headers={['Slug', 'Title', 'Status', 'Actions']} rows={rows} />
      </div>
      <div className={styles.rightColumn}>
        <GenerateDraftPanel 
          projectId="demo" 
          mode="server"
          onDraftGenerated={(blocks, metadata) => {
            console.log('Draft generated:', { blocks, metadata });
            // TODO: Handle draft generation - could redirect to new page or show success message
          }}
        />
      </div>
    </div>
  );
}