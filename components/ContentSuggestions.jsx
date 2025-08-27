'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLightbulb, 
  faMagicWandSparkles, 
  faCheck,
  faTimes,
  faChartLine,
  faExclamationTriangle,
  faThumbsUp,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import styles from './ContentSuggestions.module.css';

// Content optimization rules based on sales psychology
const OPTIMIZATION_RULES = {
  headlines: {
    minLength: 20,
    maxLength: 100,
    shouldInclude: ['numbers', 'power_words', 'benefits'],
    powerWords: ['secret', 'proven', 'guaranteed', 'instant', 'breakthrough', 'ultimate', 'exclusive', 'limited', 'free', 'new']
  },
  
  callsToAction: {
    minPerPage: 2,
    maxPerPage: 8,
    powerWords: ['get', 'start', 'discover', 'claim', 'download', 'join', 'buy', 'order', 'try'],
    shouldAvoid: ['submit', 'click here', 'learn more']
  },
  
  socialProof: {
    minTestimonials: 1,
    shouldInclude: ['specific_results', 'attribution', 'credibility_markers']
  },
  
  benefits: {
    minBenefits: 3,
    shouldUse: ['outcome_focused', 'specific_numbers', 'emotional_language']
  },
  
  urgency: {
    maxUrgencyBlocks: 2,
    effectiveWords: ['limited', 'expires', 'only', 'deadline', 'while supplies last', 'act now']
  }
};

// AI-powered content suggestions
const CONTENT_SUGGESTIONS = {
  headline_improvers: [
    {
      pattern: /^(.+)$/,
      suggestion: 'Add a number: "[Number] Ways to [Original Text]"',
      category: 'engagement'
    },
    {
      pattern: /^(.+)$/,
      suggestion: 'Add urgency: "[Original Text] (Limited Time)"',
      category: 'urgency'
    },
    {
      pattern: /^(.+)$/,
      suggestion: 'Make it benefit-focused: "How [Original Text] Can [Benefit]"',
      category: 'benefits'
    }
  ],
  
  paragraph_enhancers: [
    {
      pattern: /^(.{0,50})$/,
      suggestion: 'Expand with specific details and examples',
      category: 'depth'
    },
    {
      pattern: /^(.{200,})$/,
      suggestion: 'Consider breaking into multiple paragraphs or bullet points',
      category: 'readability'
    }
  ],
  
  cta_optimizers: [
    {
      pattern: /click|submit|learn more/i,
      suggestion: 'Use action words like "Get", "Start", "Discover" instead',
      category: 'action'
    },
    {
      pattern: /^(.{0,15})$/,
      suggestion: 'Add value proposition: "[Action] [Benefit]"',
      category: 'value'
    }
  ]
};

export default function ContentSuggestions({ blocks, onUpdateBlock, onClose }) {
  const [analysis, setAnalysis] = useState(null);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [appliedSuggestions, setAppliedSuggestions] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (blocks) {
      analyzeContentWithAI(blocks);
    }
  }, [blocks]);

  async function analyzeContentWithAI(blocks) {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/ai/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ blocks }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze content');
      }

      const analysisResult = await response.json();
      setAnalysis(analysisResult);
    } catch (err) {
      console.error('AI Analysis Error:', err);
      setError(err.message);
      // Fallback to local analysis if AI fails
      const fallbackAnalysis = analyzeContent(blocks);
      setAnalysis(fallbackAnalysis);
    } finally {
      setLoading(false);
    }
  }

  function analyzeContent(blocks) {
    const analysis = {
      score: 0,
      issues: [],
      suggestions: [],
      strengths: [],
      metrics: {
        headlines: 0,
        ctas: 0,
        testimonials: 0,
        benefits: 0,
        urgency: 0,
        totalWords: 0
      }
    };

    // Count different block types and content
    blocks.forEach((block, index) => {
      switch (block.type) {
        case 'heading':
          analysis.metrics.headlines++;
          analyzeHeadline(block, index, analysis);
          break;
        case 'button':
          analysis.metrics.ctas++;
          analyzeCTA(block, index, analysis);
          break;
        case 'testimonial':
          analysis.metrics.testimonials++;
          analyzeTestimonial(block, index, analysis);
          break;
        case 'paragraph':
          analyzeParagraph(block, index, analysis);
          break;
        case 'list':
          analysis.metrics.benefits += block.data.items?.length || 0;
          analyzeList(block, index, analysis);
          break;
      }

      // Count words
      const text = getBlockText(block);
      analysis.metrics.totalWords += text.split(' ').length;

      // Check for urgency language
      if (hasUrgencyLanguage(text)) {
        analysis.metrics.urgency++;
      }
    });

    // Overall page analysis
    analyzePageStructure(blocks, analysis);
    calculateScore(analysis);

    return analysis;
  }

  function analyzeHeadline(block, index, analysis) {
    const text = block.data.text || '';
    const length = text.length;

    if (length < OPTIMIZATION_RULES.headlines.minLength) {
      analysis.issues.push({
        type: 'warning',
        blockIndex: index,
        message: `Headline too short (${length} chars). Aim for ${OPTIMIZATION_RULES.headlines.minLength}-${OPTIMIZATION_RULES.headlines.maxLength}.`,
        suggestion: 'Expand with specific benefits or numbers'
      });
    }

    if (length > OPTIMIZATION_RULES.headlines.maxLength) {
      analysis.issues.push({
        type: 'warning',
        blockIndex: index,
        message: `Headline too long (${length} chars). Keep under ${OPTIMIZATION_RULES.headlines.maxLength}.`,
        suggestion: 'Shorten while keeping the main benefit'
      });
    }

    // Check for power words
    const hasPowerWords = OPTIMIZATION_RULES.headlines.powerWords.some(word => 
      text.toLowerCase().includes(word)
    );

    if (!hasPowerWords) {
      analysis.suggestions.push({
        type: 'enhancement',
        blockIndex: index,
        message: 'Add power words to increase impact',
        examples: ['proven', 'secret', 'breakthrough', 'guaranteed'],
        category: 'engagement'
      });
    }

    // Check for numbers
    if (!/\d/.test(text)) {
      analysis.suggestions.push({
        type: 'enhancement',
        blockIndex: index,
        message: 'Consider adding specific numbers for credibility',
        examples: ['7 Ways to...', 'Proven in 30 Days', '97% Success Rate'],
        category: 'credibility'
      });
    }
  }

  function analyzeCTA(block, index, analysis) {
    const text = block.data.label || '';
    
    // Check for weak CTA words
    const weakWords = ['click', 'submit', 'learn more'];
    const hasWeakWords = weakWords.some(word => 
      text.toLowerCase().includes(word)
    );

    if (hasWeakWords) {
      analysis.issues.push({
        type: 'improvement',
        blockIndex: index,
        message: 'CTA uses weak language',
        suggestion: 'Use action words like "Get", "Start", "Discover", "Claim"',
        examples: ['Get Instant Access', 'Start Your Transformation', 'Claim Your Copy']
      });
    }

    // Check CTA length
    if (text.length < 10) {
      analysis.suggestions.push({
        type: 'enhancement',
        blockIndex: index,
        message: 'Add value proposition to CTA',
        examples: ['Get Your Free Guide', 'Start Your 30-Day Trial', 'Download the Blueprint'],
        category: 'value'
      });
    }
  }

  function analyzeTestimonial(block, index, analysis) {
    const quote = block.data.quote || '';
    const author = block.data.author || '';

    if (quote.length < 50) {
      analysis.suggestions.push({
        type: 'enhancement',
        blockIndex: index,
        message: 'Testimonial could be more detailed',
        suggestion: 'Add specific results or transformation details',
        category: 'credibility'
      });
    }

    if (!author || author === 'Customer') {
      analysis.suggestions.push({
        type: 'enhancement',
        blockIndex: index,
        message: 'Add more specific attribution',
        examples: ['John Smith, Marketing Director', 'Sarah K., Small Business Owner'],
        category: 'credibility'
      });
    }

    // Check for specific results
    if (!/\d|%|\$/.test(quote)) {
      analysis.suggestions.push({
        type: 'enhancement',
        blockIndex: index,
        message: 'Include specific numbers or results',
        examples: ['increased sales by 40%', 'saved 10 hours per week', 'made $5,000 in first month'],
        category: 'social_proof'
      });
    }
  }

  function analyzeParagraph(block, index, analysis) {
    const text = block.data.text || '';
    
    if (text.length > 400) {
      analysis.suggestions.push({
        type: 'readability',
        blockIndex: index,
        message: 'Long paragraph may hurt readability',
        suggestion: 'Break into smaller paragraphs or bullet points',
        category: 'readability'
      });
    }

    if (text.length < 20) {
      analysis.suggestions.push({
        type: 'enhancement',
        blockIndex: index,
        message: 'Very short paragraph',
        suggestion: 'Expand with more details or examples',
        category: 'depth'
      });
    }
  }

  function analyzeList(block, index, analysis) {
    const items = block.data.items || [];
    
    if (items.length < 3) {
      analysis.suggestions.push({
        type: 'enhancement',
        blockIndex: index,
        message: 'Lists are more effective with 3+ items',
        suggestion: 'Add more benefits or features',
        category: 'completeness'
      });
    }

    // Check for benefit language
    const hasBenefitLanguage = items.some(item => 
      /you('ll| will| can|r)?\s+(get|save|learn|achieve|become)/i.test(item)
    );

    if (!hasBenefitLanguage) {
      analysis.suggestions.push({
        type: 'enhancement',
        blockIndex: index,
        message: 'Make list items more benefit-focused',
        examples: ["You'll save hours every week", "Get instant access to...", "Achieve results in 30 days"],
        category: 'benefits'
      });
    }
  }

  function analyzePageStructure(blocks, analysis) {
    const sections = {};
    blocks.forEach(block => {
      const section = block.section || 'uncategorized';
      sections[section] = (sections[section] || 0) + 1;
    });

    // Check for missing essential sections
    if (!sections.hook && !sections.headline) {
      analysis.issues.push({
        type: 'critical',
        message: 'Missing attention-grabbing hook or headline',
        suggestion: 'Add a compelling opening that addresses your audience\'s main pain point',
        category: 'structure'
      });
    }

    if (analysis.metrics.ctas < OPTIMIZATION_RULES.callsToAction.minPerPage) {
      analysis.issues.push({
        type: 'improvement',
        message: `Only ${analysis.metrics.ctas} CTAs found. Aim for ${OPTIMIZATION_RULES.callsToAction.minPerPage}-${OPTIMIZATION_RULES.callsToAction.maxPerPage}`,
        suggestion: 'Add more calls-to-action throughout the page',
        category: 'conversion'
      });
    }

    if (analysis.metrics.testimonials < OPTIMIZATION_RULES.socialProof.minTestimonials) {
      analysis.issues.push({
        type: 'improvement',
        message: 'No social proof found',
        suggestion: 'Add testimonials, case studies, or success stories',
        category: 'credibility'
      });
    }

    // Check reading time
    const estimatedReadTime = Math.ceil(analysis.metrics.totalWords / 200);
    if (estimatedReadTime > 15) {
      analysis.suggestions.push({
        type: 'optimization',
        message: `Long read time (${estimatedReadTime} minutes)`,
        suggestion: 'Consider breaking into sections or adding more visuals',
        category: 'engagement'
      });
    }
  }

  function calculateScore(analysis) {
    let score = 50; // Base score

    // Deduct for issues
    analysis.issues.forEach(issue => {
      switch (issue.type) {
        case 'critical': score -= 15; break;
        case 'improvement': score -= 10; break;
        case 'warning': score -= 5; break;
      }
    });

    // Add for strengths
    if (analysis.metrics.headlines >= 3) score += 10;
    if (analysis.metrics.ctas >= 3) score += 10;
    if (analysis.metrics.testimonials >= 2) score += 15;
    if (analysis.metrics.benefits >= 5) score += 10;
    if (analysis.metrics.urgency >= 1) score += 5;

    analysis.score = Math.max(0, Math.min(100, score));

    // Add strengths
    if (analysis.metrics.ctas >= 3) {
      analysis.strengths.push('Good number of calls-to-action');
    }
    if (analysis.metrics.testimonials >= 2) {
      analysis.strengths.push('Strong social proof');
    }
    if (analysis.metrics.benefits >= 5) {
      analysis.strengths.push('Benefit-rich content');
    }
  }

  function getBlockText(block) {
    switch (block.type) {
      case 'heading': return block.data.text || '';
      case 'paragraph': return block.data.text || '';
      case 'button': return block.data.label || '';
      case 'testimonial': return `${block.data.quote || ''} ${block.data.author || ''}`;
      case 'list': return (block.data.items || []).join(' ');
      default: return '';
    }
  }

  function hasUrgencyLanguage(text) {
    return OPTIMIZATION_RULES.urgency.effectiveWords.some(word => 
      text.toLowerCase().includes(word)
    );
  }

  function applySuggestion(suggestion, blockIndex) {
    // This would integrate with the block update system
    const suggestionId = `${blockIndex}-${suggestion.category}`;
    setAppliedSuggestions(prev => new Set([...prev, suggestionId]));
    
    // You could implement specific auto-improvements here
    // For now, we'll just mark it as applied
  }

  function getScoreColor(score) {
    if (score >= 80) return styles.excellent;
    if (score >= 60) return styles.good;
    if (score >= 40) return styles.fair;
    return styles.poor;
  }

  return (
    <div className={styles.contentSuggestions} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>
            <FontAwesomeIcon icon={loading ? faSpinner : faChartLine} className={loading ? styles.spinning : ''} />
            {loading ? 'Analyzing Content...' : 'AI Content Analysis'}
          </h3>
          <button onClick={onClose} className={styles.closeBtn}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {loading && (
          <div className={styles.loadingSection}>
            <div className={styles.loadingText}>
              <FontAwesomeIcon icon={faSpinner} className={styles.spinning} />
              <p>OpenAI GPT-4 is analyzing your sales copy...</p>
              <small>This may take a few seconds</small>
            </div>
          </div>
        )}

        {error && !analysis && (
          <div className={styles.errorSection}>
            <div className={styles.errorText}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <h4>Analysis Error</h4>
              <p>{error}</p>
              <small>Falling back to local analysis rules...</small>
            </div>
          </div>
        )}

        {analysis && (
          <>
            <div className={styles.scoreSection}>
              <div className={`${styles.score} ${getScoreColor(analysis.score)}`}>
                <span className={styles.scoreNumber}>{analysis.score}</span>
                <span className={styles.scoreLabel}>Optimization Score</span>
              </div>
              
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <strong>{analysis.metrics?.headlines || 0}</strong>
                  <span>Headlines</span>
                </div>
                <div className={styles.metric}>
                  <strong>{analysis.metrics?.ctas || 0}</strong>
                  <span>CTAs</span>
                </div>
                <div className={styles.metric}>
                  <strong>{analysis.metrics?.testimonials || 0}</strong>
                  <span>Social Proof</span>
                </div>
                <div className={styles.metric}>
                  <strong>{Math.ceil((analysis.metrics?.totalWords || 0) / 200)}m</strong>
                  <span>Read Time</span>
                </div>
              </div>
            </div>

            {analysis.strengths && analysis.strengths.length > 0 && (
        <div className={styles.section}>
          <h4>
            <FontAwesomeIcon icon={faThumbsUp} />
            Strengths
          </h4>
          {analysis.strengths.map((strength, index) => (
            <div key={index} className={styles.strength}>
              <FontAwesomeIcon icon={faCheck} />
              <div>
                <h5>{strength.title || 'Strength'}</h5>
                <p>{typeof strength === 'object' ? (strength.description || 'No description') : strength}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {analysis.issues && analysis.issues.length > 0 && (
        <div className={styles.section}>
          <h4>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            Issues to Fix
          </h4>
          {analysis.issues.map((issue, index) => (
            <div key={index} className={`${styles.issue} ${styles[issue.type]}`}>
              <div className={styles.issueContent}>
                <h5>{issue.title || issue.message}</h5>
                <p>{issue.description || issue.suggestion}</p>
                {issue.examples && (
                  <div className={styles.examples}>
                    <strong>Examples:</strong>
                    <ul>
                      {issue.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {issue.blockIndex !== undefined && (
                <button 
                  className={styles.fixBtn}
                  onClick={() => applySuggestion(issue, issue.blockIndex)}
                >
                  <FontAwesomeIcon icon={faMagicWandSparkles} />
                  Apply
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {analysis.suggestions && analysis.suggestions.length > 0 && (
        <div className={styles.section}>
          <h4>
            <FontAwesomeIcon icon={faLightbulb} />
            Optimization Suggestions
          </h4>
          {analysis.suggestions.map((suggestion, index) => (
            <div key={index} className={styles.suggestion}>
              <div className={styles.suggestionContent}>
                <h5>{suggestion.title || 'Suggestion'}</h5>
                <p>{typeof suggestion === 'object' ? (suggestion.description || suggestion.suggestion || 'No description') : suggestion}</p>
                {suggestion.examples && (
                  <div className={styles.examples}>
                    <strong>Try these:</strong>
                    <ul>
                      {suggestion.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {suggestion.blockIndex !== undefined && (
                <button 
                  className={styles.applyBtn}
                  onClick={() => applySuggestion(suggestion, suggestion.blockIndex)}
                >
                  <FontAwesomeIcon icon={faCheck} />
                  Apply
                </button>
              )}
            </div>
          ))}
        </div>
      )}

            <div className={styles.footer}>
              <p>💡 <strong>Tip:</strong> Implement these suggestions to improve conversion rates and engagement.</p>
              {error && (
                <small className={styles.errorFooter}>
                  ⚠️ AI analysis failed, showing fallback results. Check your OpenAI API key configuration.
                </small>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
