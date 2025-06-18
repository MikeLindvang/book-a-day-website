'use client';

import { useEffect, useState } from 'react';
import Table from '../../components/Table';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPencilAlt, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './page.module.css';

export default function AdminPageList() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch('/api/pages')
      .then((res) => res.json())
      .then((data) => setPages(data || []));
  }, []);

  async function handleDelete(slug) {
    if (!confirm('Delete this page?')) return;
    await fetch(`/api/pages?slug=${encodeURIComponent(slug)}`, { method: 'DELETE' });
    setPages((prev) => prev.filter((p) => p.slug !== slug));
  }

  const rows = pages.map((p) => ({
    cells: [
      p.slug,
      p.title,
      p.published ? 'Yes' : 'No',
      <div key="actions" className={styles.actions}>
        <a href={`/${p.slug}`} title="View page" className={styles.iconButton}>
          <FontAwesomeIcon icon={faEye} />
        </a>
        <a href={`/admin/${p.slug}`} title="Edit page" className={styles.iconButton}>
          <FontAwesomeIcon icon={faPencilAlt} />
        </a>
        <button
          onClick={() => handleDelete(p.slug)}
          title="Delete page"
          className={`${styles.iconButton} ${styles.deleteIcon}`}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>,
    ],
  }));

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Pages</h1>
        <Button href="/admin/new" icon={faPlus} label="New Page" />
      </div>
      <Table headers={['Slug', 'Title', 'Published', 'Actions']} rows={rows} />
    </>
  );
}