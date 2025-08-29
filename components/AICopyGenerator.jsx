'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faFileText, faBrain, faRocket } from '@fortawesome/free-solid-svg-icons';
import DocumentsPane from './DocumentsPane';
import InsightsPane from './InsightsPane';
import GenerateDraftModal from './GenerateDraftModal';
import styles from './AICopyGenerator.module.css';

export default function AICopyGenerator({ userId, onDraftGenerated }) {
  const [documents, setDocuments] = useState([]);
  const [insightSheet, setInsightSheet] = useState(null);
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [activeTab, setActiveTab] = useState('documents');

  function handleDocumentsChange(updatedDocuments) {
    setDocuments(updatedDocuments);
  }

  function handleInsightsChange(updatedInsightSheet) {
    setInsightSheet(updatedInsightSheet);
  }

  function handleGenerateDraft() {
    if (!insightSheet) {
      alert('Please build insights first before generating a draft.');
      return;
    }
    setShowGenerateModal(true);
  }

  function handleDraftGenerated(blocks) {
    onDraftGenerated?.(blocks);
    setShowGenerateModal(false);
  }

  const hasDocuments = documents.length > 0;
  const hasInsights = insightSheet?.insights?.length > 0;

  return (
    <div className={styles.aiCopyGenerator}>
      <div className={styles.header}>
        <h2>
          <FontAwesomeIcon icon={faRobot} />
          AI Sales Copy Generator
        </h2>
        <p>Create compelling sales copy from your documents in 3 simple steps</p>
      </div>

      <div className={styles.workflow}>
        <div className={`${styles.step} ${hasDocuments ? styles.completed : ''}`}>
          <div className={styles.stepNumber}>1</div>
          <div className={styles.stepContent}>
            <h3>Add Documents</h3>
            <p>Paste your product info, customer profiles, and style guides</p>
          </div>
        </div>
        
        <div className={`${styles.step} ${hasInsights ? styles.completed : ''}`}>
          <div className={styles.stepNumber}>2</div>
          <div className={styles.stepContent}>
            <h3>Build Insights</h3>
            <p>AI analyzes your documents to extract key selling points</p>
          </div>
        </div>
        
        <div className={styles.step}>
          <div className={styles.stepNumber}>3</div>
          <div className={styles.stepContent}>
            <h3>Generate Copy</h3>
            <p>Create sales pages from templates and insights</p>
          </div>
        </div>
      </div>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'documents' ? styles.active : ''}`}
          onClick={() => setActiveTab('documents')}
        >
          <FontAwesomeIcon icon={faFileText} />
          Documents ({documents.length})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'insights' ? styles.active : ''}`}
          onClick={() => setActiveTab('insights')}
        >
          <FontAwesomeIcon icon={faBrain} />
          Insights {hasInsights ? `(${insightSheet.insights.length})` : '(0)'}
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'documents' && (
          <DocumentsPane 
            userId={userId}
            onDocumentsChange={handleDocumentsChange}
          />
        )}
        
        {activeTab === 'insights' && (
          <InsightsPane 
            userId={userId}
            documents={documents}
            onInsightsChange={handleInsightsChange}
          />
        )}
      </div>

      <div className={styles.actions}>
        <button 
          onClick={handleGenerateDraft}
          disabled={!hasInsights}
          className={styles.generateButton}
        >
          <FontAwesomeIcon icon={faRocket} />
          Generate Sales Copy
        </button>
        
        {!hasInsights && (
          <p className={styles.hint}>
            Add documents and build insights to enable copy generation
          </p>
        )}
      </div>

      <GenerateDraftModal
        isOpen={showGenerateModal}
        onClose={() => setShowGenerateModal(false)}
        userId={userId}
        insightSheet={insightSheet}
        onDraftGenerated={handleDraftGenerated}
      />
    </div>
  );
}
