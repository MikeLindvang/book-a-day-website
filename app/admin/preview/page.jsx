'use client';

import { useState, useEffect } from 'react';
import SalesPagePreview from '../../../components/SalesPagePreview';
import styles from './page.module.css';

export default function PreviewPage() {
  const [data, setData] = useState({
    title: '',
    description: '',
    heroImage: '',
    blocks: [],
    published: false,
  });

  useEffect(() => {
    const channel = new BroadcastChannel('sales-preview');
    channel.onmessage = (event) => setData(event.data);
    return () => channel.close();
  }, []);

  return (
    <div className={styles.container}>
      <SalesPagePreview
        title={data.title}
        description={data.description}
        heroImage={data.heroImage}
        blocks={data.blocks}
        published={data.published}
      />
    </div>
  );
}