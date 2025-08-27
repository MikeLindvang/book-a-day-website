'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faEdit, 
  faTrash,
  faDownload,
  faStar,
  faTag,
  faArrowLeft,
  faEye,
  faSearch,
  faFilter
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button';
import styles from './page.module.css';

export default function TemplatesPage() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    fetchTemplates();
  }, [selectedCategory, sortBy]);

  async function fetchTemplates() {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        category: selectedCategory,
        sortBy: sortBy,
        limit: '50'
      });
      
      const response = await fetch(`/api/templates?${params}`);
      if (response.ok) {
        const data = await response.json();
        setTemplates(data);
      } else {
        setError('Failed to fetch templates');
      }
    } catch (err) {
      setError('Error loading templates');
    } finally {
      setLoading(false);
    }
  }

  async function deleteTemplate(templateId) {
    if (!confirm('Are you sure you want to delete this template?')) return;

    try {
      const response = await fetch(`/api/templates/${templateId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setTemplates(templates.filter(t => t._id !== templateId));
      } else {
        setError('Failed to delete template');
      }
    } catch (err) {
      setError('Error deleting template');
    }
  }

  const filteredTemplates = templates.filter(template => 
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (template.tags && template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1>Template Library</h1>
          <p>Manage your custom sales page templates</p>
        </div>
        <div className={styles.headerActions}>
          <Button 
            href="/admin/new" 
            icon={faPlus} 
            label="Create Page" 
          />
          <Button 
            href="/admin" 
            icon={faArrowLeft} 
            label="Back to Admin" 
          />
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.filters}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="all">All Categories</option>
            <option value="SaaS">SaaS</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Coaching">Coaching</option>
            <option value="Course">Online Course</option>
            <option value="Agency">Agency</option>
            <option value="Other">Other</option>
          </select>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="newest">Newest First</option>
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="name">A-Z</option>
          </select>
        </div>
      </div>

      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}

      {loading ? (
        <div className={styles.loading}>
          <p>Loading templates...</p>
        </div>
      ) : (
        <>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>{templates.length}</strong>
              <span>Total Templates</span>
            </div>
            <div className={styles.stat}>
              <strong>{templates.filter(t => !t.isBuiltIn).length}</strong>
              <span>Custom Templates</span>
            </div>
            <div className={styles.stat}>
              <strong>{templates.reduce((sum, t) => sum + (t.usageCount || 0), 0)}</strong>
              <span>Total Uses</span>
            </div>
          </div>

          <div className={styles.templateGrid}>
            {filteredTemplates.length === 0 ? (
              <div className={styles.empty}>
                <h3>No templates found</h3>
                <p>Try adjusting your search or filters, or create a new template.</p>
              </div>
            ) : (
              filteredTemplates.map((template) => (
                <div key={template._id || template.id} className={styles.templateCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardMeta}>
                      <div className={`${styles.category} ${styles[template.difficulty?.toLowerCase()]}`}>
                        {template.category}
                      </div>
                      {template.isBuiltIn ? (
                        <div className={styles.builtInBadge}>Built-in</div>
                      ) : (
                        <div className={styles.customBadge}>Custom</div>
                      )}
                    </div>
                    <div className={styles.cardActions}>
                      <button
                        className={styles.actionBtn}
                        title="View Template"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      {!template.isBuiltIn && (
                        <>
                          <button
                            className={styles.actionBtn}
                            title="Edit Template"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button
                            className={`${styles.actionBtn} ${styles.dangerBtn}`}
                            title="Delete Template"
                            onClick={() => deleteTemplate(template._id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  <h3 className={styles.templateName}>{template.name}</h3>
                  <p className={styles.templateDescription}>{template.description}</p>

                  <div className={styles.templateStats}>
                    <div className={styles.statItem}>
                      <FontAwesomeIcon icon={faDownload} />
                      <span>{template.usageCount || 0} uses</span>
                    </div>
                    <div className={styles.statItem}>
                      <FontAwesomeIcon icon={faStar} />
                      <span>{template.rating || 0}/5</span>
                    </div>
                    <div className={styles.statItem}>
                      <span>{template.sections?.length || 0} sections</span>
                    </div>
                  </div>

                  {template.tags && template.tags.length > 0 && (
                    <div className={styles.tags}>
                      <FontAwesomeIcon icon={faTag} />
                      {template.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                      ))}
                      {template.tags.length > 3 && (
                        <span className={styles.moreTag}>+{template.tags.length - 3}</span>
                      )}
                    </div>
                  )}

                  <div className={styles.cardFooter}>
                    <small>Created {formatDate(template.createdAt)}</small>
                    {template.framework && (
                      <small className={styles.framework}>{template.framework}</small>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}
