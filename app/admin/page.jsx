'use client';

import { useEffect, useState } from 'react';
import Table from '../../components/Table';
import Button from '../../components/Button';
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
        <Button href={`/${p.slug}`} label="View" />
        <Button href={`/admin/${p.slug}`} label="Edit" />
        <Button onClick={() => handleDelete(p.slug)} label="Delete" />
      </div>,
    ],
  }));

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Pages</h1>
        <Button href="/admin/new" label="New Page" />
      </div>
      <Table headers={['Slug', 'Title', 'Published', 'Actions']} rows={rows} />
    </>
  );
}