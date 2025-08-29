'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCog, 
  faSave, 
  faChevronDown, 
  faChevronRight,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import AutoResizeTextarea from './AutoResizeTextarea';
import styles from './InsightsPane.module.css';

const INSIGHT_GROUPS = [
  {
    key: 'product',
    title: 'Product',
    fields: [
      { key: 'productFacts', label: 'Product Facts' },
      { key: 'benefits', label: 'Benefits' },
      { key: 'differentiators', label: 'Differentiators' }
    ]
  },
  {
    key: 'voice',
    title: 'Voice',
    fields: [
      { key: 'voiceRules', label: 'Voice Rules' }
    ]
  },
  {
    key: 'audience',
    title: 'Audience',
    fields: [
      { key: 'audiencePain', label: 'Audience Pain Points' },
      { key: 'audienceDreams', label: 'Audience Dreams' }
    ]
  },
  {
    key: 'offer',
    title: 'Offer/Proof',
    fields: [
      { key: 'objections', label: 'Objections' },
      { key: 'offerStack', label: 'Offer Stack' },
      { key: 'proofAssets', label: 'Proof Assets' }
    ]
  }
];

export default function InsightsPane({ projectId }) {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [building, setBuilding] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [collapsedGroups, setCollapsedGroups] = useState({});
  const [editedFields, setEditedFields] = useState({});

  useEffect(() => {
    loadInsights();
  }, [projectId]);

  async function loadInsights() {
    if (!projectId) return;
    
    try {
      setLoading(true);
      const response = await fetch('/api/insights/build', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId })
      });
      const data = await response.json();
      
      if (data.ok) {
        setInsights(data.sheet);
        initializeEditedFields(data.sheet);
      } else {
        setError(data.error || 'Failed to load insights');
      }
    } catch (err) {
      setError('Network error loading insights');
    } finally {
      setLoading(false);
    }
  }

  function initializeEditedFields(sheet) {
    const fields = {};
    INSIGHT_GROUPS.forEach(group => {
      group.fields.forEach(field => {
        fields[field.key] = (sheet[field.key] || []).join('\n');
      });
    });
    setEditedFields(fields);
  }

  async function buildInsights() {
    try {
      setBuilding(true);
      setError('');
      
      const response = await fetch('/api/insights/build', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId })
      });
      const data = await response.json();
      
      if (data.ok) {
        setInsights(data.sheet);
        initializeEditedFields(data.sheet);
      } else {
        setError(data.error || 'Failed to build insights');
      }
    } catch (err) {
      setError('Network error building insights');
    } finally {
      setBuilding(false);
    }
  }

  async function saveEdits() {
    try {
      setSaving(true);
      setError('');
      
      // Convert text fields back to arrays
      const fields = {};
      Object.keys(editedFields).forEach(key => {
        fields[key] = editedFields[key]
          .split('\n')
          .map(line => line.trim())
          .filter(line => line.length > 0);
      });
      
      const response = await fetch('/api/insights/save', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, fields })
      });
      const data = await response.json();
      
      if (data.ok) {
        setInsights(data.sheet);
        // Keep edited fields in sync
      } else {
        setError(data.error || 'Failed to save insights');
      }
    } catch (err) {
      setError('Network error saving insights');
    } finally {
      setSaving(false);
    }
  }

  function toggleGroup(groupKey) {
    setCollapsedGroups(prev => ({
      ...prev,
      [groupKey]: !prev[groupKey]
    }));
  }

  function updateField(fieldKey, value) {
    setEditedFields(prev => ({
      ...prev,
      [fieldKey]: value
    }));
  }

  if (loading) {
    return <div className={styles.loading}>Loading insights...</div>;
  }

  return (
    <div className={styles.insightsPane}>
      <div className={styles.header}>
        <h3>Insights</h3>
        <div className={styles.actions}>
          <button 
            className={styles.buildButton}
            onClick={buildInsights}
            disabled={building || saving}
          >
            <FontAwesomeIcon icon={building ? faSpinner : faCog} spin={building} />
            {building ? 'Building...' : 'Build Insights'}
          </button>
          <button 
            className={styles.saveButton}
            onClick={saveEdits}
            disabled={saving || building}
          >
            <FontAwesomeIcon icon={saving ? faSpinner : faSave} spin={saving} />
            {saving ? 'Saving...' : 'Save Edits'}
          </button>
        </div>
      </div>

      {error && (
        <div className={styles.error}>
          {error}
          <button onClick={() => setError('')}>×</button>
        </div>
      )}

      {!insights ? (
        <div className={styles.emptyState}>
          <p>No insights generated yet. Click "Build Insights" to analyze your documents.</p>
        </div>
      ) : (
        <div className={styles.insightsList}>
          {INSIGHT_GROUPS.map(group => {
            const isCollapsed = collapsedGroups[group.key];
            const hasContent = group.fields.some(field => 
              insights[field.key] && insights[field.key].length > 0
            );

            return (
              <div key={group.key} className={styles.insightGroup}>
                <div 
                  className={styles.groupHeader}
                  onClick={() => toggleGroup(group.key)}
                >
                  <FontAwesomeIcon 
                    icon={isCollapsed ? faChevronRight : faChevronDown} 
                    className={styles.chevron}
                  />
                  <h4>{group.title}</h4>
                  {hasContent && (
                    <span className={styles.badge}>
                      {group.fields.reduce((total, field) => 
                        total + (insights[field.key] || []).length, 0
                      )}
                    </span>
                  )}
                </div>

                {!isCollapsed && (
                  <div className={styles.groupContent}>
                    {group.fields.map(field => (
                      <div key={field.key} className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>
                          {field.label}
                        </label>
                        <AutoResizeTextarea
                          value={editedFields[field.key] || ''}
                          onChange={(e) => updateField(field.key, e.target.value)}
                          placeholder={`Enter ${field.label.toLowerCase()}... (one per line)`}
                          minRows={3}
                          className={styles.fieldTextarea}
                        />
                        <div className={styles.fieldHint}>
                          One item per line • {(editedFields[field.key] || '').split('\n').filter(l => l.trim()).length} items
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}