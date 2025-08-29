'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import AutoResizeTextarea from './AutoResizeTextarea';
import styles from './DocumentsPane.module.css';

const DOCUMENT_TYPES = [
  { value: 'product', label: 'Product', description: 'Product features, benefits, specifications' },
  { value: 'style', label: 'Style', description: 'Brand voice, tone, messaging style' },
  { value: 'customer', label: 'Customer', description: 'Target audience, demographics, pain points' },
  { value: 'offer', label: 'Offer', description: 'Special offers, pricing, deals' },
  { value: 'proof', label: 'Proof', description: 'Testimonials, case studies, social proof' },
  { value: 'objections', label: 'Objections', description: 'Common objections and responses' },
  { value: 'faq', label: 'FAQ', description: 'Frequently asked questions' }
];

export default function DocumentsPane({ projectId, onDocumentsChange }) {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingDoc, setEditingDoc] = useState(null);
  const [showNewForm, setShowNewForm] = useState(false);
  const [saving, setSaving] = useState(false);

  const [newDoc, setNewDoc] = useState({
    title: '',
    type: 'product',
    content: ''
  });

  useEffect(() => {
    loadDocuments();
  }, [projectId]);

  async function loadDocuments() {
    if (!projectId) return;
    
    try {
      setLoading(true);
      const response = await fetch('/api/documents/list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId })
      });
      const data = await response.json();
      
      if (data.ok) {
        setDocuments(data.documents || []);
        onDocumentsChange?.(data.documents || []);
      } else {
        setError(data.error || 'Failed to load documents');
      }
    } catch (err) {
      setError('Network error loading documents');
    } finally {
      setLoading(false);
    }
  }

  async function saveDocument(docData, isNew = false) {
    setSaving(true);
    try {
      const endpoint = isNew ? '/api/documents/create' : '/api/documents/update';
      const payload = isNew 
        ? { ...docData, projectId } 
        : { ...docData, _id: docData._id };
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      
      if (data.ok) {
        await loadDocuments(); // Reload to get fresh data
        setEditingDoc(null);
        setShowNewForm(false);
        setNewDoc({ title: '', type: 'product', content: '' });
      } else {
        setError(data.error || 'Failed to save document');
      }
    } catch (err) {
      setError('Network error saving document');
    } finally {
      setSaving(false);
    }
  }

  async function deleteDocument(docId) {
    if (!confirm('Are you sure you want to delete this document?')) return;
    
    try {
      const response = await fetch('/api/documents/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: docId })
      });

      const data = await response.json();
      
      if (data.ok) {
        await loadDocuments();
      } else {
        setError(data.error || 'Failed to delete document');
      }
    } catch (err) {
      setError('Network error deleting document');
    }
  }

  function handleEdit(doc) {
    setEditingDoc({ ...doc });
    setShowNewForm(false);
  }

  function handleCancelEdit() {
    setEditingDoc(null);
    setShowNewForm(false);
  }

  function handleNewDocument() {
    setShowNewForm(true);
    setEditingDoc(null);
  }

  if (loading) {
    return <div className={styles.loading}>Loading documents...</div>;
  }

  return (
    <div className={styles.documentsPane}>
      <div className={styles.header}>
        <h3>Documents</h3>
        <button 
          className={styles.addButton}
          onClick={handleNewDocument}
          disabled={saving}
        >
          <FontAwesomeIcon icon={faPlus} />
          Add Document
        </button>
      </div>

      {error && (
        <div className={styles.error}>
          {error}
          <button onClick={() => setError('')}>×</button>
        </div>
      )}

      {/* New document form */}
      {showNewForm && (
        <div className={styles.documentForm}>
          <div className={styles.formHeader}>
            <h4>New Document</h4>
            <button onClick={handleCancelEdit} className={styles.cancelButton}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          
          <div className={styles.formField}>
            <label>Title</label>
            <input
              type="text"
              value={newDoc.title}
              onChange={(e) => setNewDoc({ ...newDoc, title: e.target.value })}
              placeholder="Document title"
            />
          </div>

          <div className={styles.formField}>
            <label>Type</label>
            <select
              value={newDoc.type}
              onChange={(e) => setNewDoc({ ...newDoc, type: e.target.value })}
            >
              {DOCUMENT_TYPES.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <small>{DOCUMENT_TYPES.find(t => t.value === newDoc.type)?.description}</small>
          </div>

          <div className={styles.formField}>
            <label>Content</label>
            <AutoResizeTextarea
              value={newDoc.content}
              onChange={(e) => setNewDoc({ ...newDoc, content: e.target.value })}
              placeholder="Paste your content here..."
              minRows={4}
            />
          </div>

          <div className={styles.formActions}>
            <button 
              onClick={() => saveDocument(newDoc, true)}
              disabled={!newDoc.title || !newDoc.content || saving}
              className={styles.saveButton}
            >
              <FontAwesomeIcon icon={faSave} />
              {saving ? 'Saving...' : 'Save Document'}
            </button>
          </div>
        </div>
      )}

      {/* Documents list grouped by type */}
      <div className={styles.documentsList}>
        {documents.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No documents yet. Add your first document to get started!</p>
          </div>
        ) : (
          DOCUMENT_TYPES.map(docType => {
            const docsOfType = documents.filter(doc => doc.type === docType.value);
            if (docsOfType.length === 0) return null;
            
            return (
              <div key={docType.value} className={styles.typeSection}>
                <h4 className={styles.typeHeader}>{docType.label}</h4>
                {docsOfType.map(doc => (
            <div key={doc._id} className={styles.documentCard}>
              {editingDoc && editingDoc._id === doc._id ? (
                // Edit form
                <div className={styles.documentForm}>
                  <div className={styles.formHeader}>
                    <h4>Edit Document</h4>
                    <button onClick={handleCancelEdit} className={styles.cancelButton}>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                  
                  <div className={styles.formField}>
                    <label>Title</label>
                    <input
                      type="text"
                      value={editingDoc.title}
                      onChange={(e) => setEditingDoc({ ...editingDoc, title: e.target.value })}
                    />
                  </div>

                  <div className={styles.formField}>
                    <label>Type</label>
                    <select
                      value={editingDoc.type}
                      onChange={(e) => setEditingDoc({ ...editingDoc, type: e.target.value })}
                    >
                      {DOCUMENT_TYPES.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formField}>
                    <label>Content</label>
                    <AutoResizeTextarea
                      value={editingDoc.content}
                      onChange={(e) => setEditingDoc({ ...editingDoc, content: e.target.value })}
                      minRows={4}
                    />
                  </div>

                  <div className={styles.formActions}>
                    <button 
                      onClick={() => saveDocument(editingDoc)}
                      disabled={!editingDoc.title || !editingDoc.content || saving}
                      className={styles.saveButton}
                    >
                      <FontAwesomeIcon icon={faSave} />
                      {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </div>
              ) : (
                // View mode
                <>
                  <div className={styles.documentHeader}>
                    <div className={styles.documentTitle}>
                      <h4>{doc.title}</h4>
                      <span className={styles.documentType}>
                        {DOCUMENT_TYPES.find(t => t.value === doc.type)?.label}
                      </span>
                    </div>
                    <div className={styles.documentActions}>
                      <button onClick={() => handleEdit(doc)} className={styles.editButton}>
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button onClick={() => deleteDocument(doc._id)} className={styles.deleteButton}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>

                  
                  <div className={styles.documentContent}>
                    {doc.content.substring(0, 200)}
                    {doc.content.length > 200 && '...'}
                  </div>
                  
                  <div className={styles.documentMeta}>
                    <small>Updated {new Date(doc.updatedAt).toLocaleDateString()}</small>
                  </div>
                </>
              )}
            </div>
                ))}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
