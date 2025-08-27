'use client';

import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUpload, 
  faMagicWandSparkles, 
  faRocket,
  faTimes,
  faCheck,
  faLightbulb,
  faEye,
  faDownload,
  faCopy
} from '@fortawesome/free-solid-svg-icons';
import styles from './BulkImport.module.css';

// Smart text parsing for sales copy
const CONTENT_PATTERNS = {
  // Headlines - ALL CAPS, title case, or ending with specific punctuation
  headline: /^([A-Z][A-Z\s\d\!\?\.\-\,\'\"]{10,}|[A-Z][a-z\s\d\!\?\.\-\,\'\"]*[\!\?]|.*[A-Z]{3,}.*|\d+\s+.+|\$\d+.*)$/,
  
  // Questions - starting with question words or ending with ?
  question: /^(Are you|Do you|Have you|What if|Why|How|Where|When|Who|Is your|Can you|Will you|Imagine|Picture this).*\?$/i,
  
  // Bullet points - starting with -, *, •, or numbers
  bulletPoint: /^[\-\*\•]\s+(.+)|^\d+[\.\)]\s+(.+)$/,
  
  // Call to action - action verbs and urgency words
  cta: /^(Get|Buy|Order|Click|Download|Start|Join|Subscribe|Sign up|Call now|Act now|Limited time|Don't wait|Hurry|Today only|Special offer).*$/i,
  
  // Testimonials - quotes or attribution patterns
  testimonial: /^["\"'"'](.+)["\"'"']\s*[-–—]?\s*(.+)$|^(.+)\s+[-–—]\s*([A-Z][a-z]+\s+[A-Z][a-z]*|[A-Z]+)$/,
  
  // Guarantees - guarantee/risk reversal language
  guarantee: /^(.*guarantee|money.back|risk.free|no.risk|100%|satisfaction|refund|protected).*$/i,
  
  // Benefits - outcome-focused language
  benefit: /^(You('ll|r)?\s+(get|receive|learn|discover|achieve|become)|Discover|Learn|Master|Achieve|Unlock|Transform).*$/i,
  
  // Problems/Pain points - negative language
  problem: /^(Are you (tired|frustrated|struggling|stuck)|Stop|Enough|No more|Sick of|Fed up|The problem|The issue|Why .*fail|.*killing you|.*driving.*crazy).*$/i,
  
  // Urgency/Scarcity
  urgency: /^(Limited|Only \d+|Expires|Deadline|Last chance|Final hours|While supplies|Don't miss|Act fast|Hurry).*$/i,
  
  // Prices/Offers
  price: /.*\$\d+|\d+% off|free|bonus|discount|save|special price/i
};

// Sales copy snippet library organized by section
const SALES_SNIPPETS = {
  hook: [
    "Are you tired of [problem]?",
    "What if I told you [amazing claim]?", 
    "Stop [frustrating activity]!",
    "Finally! A solution to [problem]",
    "Breakthrough: [achievement]",
    "The secret [industry] doesn't want you to know",
    "[Number] [timeframe] to [result]"
  ],
  problem: [
    "You've probably tried [common solution] before...",
    "The problem with [current approach] is...",
    "Most people struggle with [pain point] because...",
    "Here's what's really holding you back:",
    "The harsh truth about [topic]:",
    "Why everything you've been told about [topic] is wrong",
    "This might sound harsh, but..."
  ],
  solution: [
    "Here's what actually works:",
    "I discovered something amazing:",
    "The breakthrough came when I realized:",
    "What if there was a better way?",
    "Introducing [solution name]:",
    "After [timeframe] of research, I found:",
    "The game-changing method that [result]:"
  ],
  benefits: [
    "Imagine being able to [desired outcome]",
    "Picture yourself [future state]",
    "You'll finally be able to [achievement]",
    "No more [pain point]",
    "Instead of [current struggle], you'll [new reality]",
    "Transform from [before state] to [after state]",
    "The days of [frustration] are over"
  ],
  social_proof: [
    "Here's what [name] from [location] said:",
    "Just yesterday, [name] told me:",
    "[Name] couldn't believe the results:",
    "Within [timeframe], [name] achieved [result]:",
    "Thousands of people have used this to [outcome]",
    "Over [number] success stories and counting",
    "The results speak for themselves:"
  ],
  urgency: [
    "This special offer expires [date]",
    "Only [number] spots available",
    "Limited time: [offer details]",
    "Price goes up to [amount] on [date]",
    "Don't let this opportunity slip away",
    "While you're thinking about it, others are taking action",
    "Every day you wait costs you [cost/opportunity]"
  ],
  guarantee: [
    "Your investment is 100% protected",
    "If you don't [outcome], I'll refund every penny",
    "Risk-free [timeframe] trial",
    "Satisfaction guaranteed or your money back",
    "I'm so confident, I'll take all the risk",
    "Try it risk-free for [timeframe]",
    "No questions asked, money-back guarantee"
  ],
  cta: [
    "Get instant access now",
    "Click the button below to start",
    "Join thousands of successful [customers]",
    "Download your copy today",
    "Start your transformation now",
    "Claim your [product] here",
    "Don't wait - get started immediately"
  ]
};

export default function BulkImport({ onImport, onClose }) {
  const [importText, setImportText] = useState('');
  const [parsedBlocks, setParsedBlocks] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [selectedSnippetCategory, setSelectedSnippetCategory] = useState('hook');
  const [showSnippets, setShowSnippets] = useState(false);
  const fileInputRef = useRef(null);

  // Parse text into smart blocks
  function parseTextToBlocks(text) {
    if (!text.trim()) return [];

    const lines = text.split('\n').filter(line => line.trim());
    const blocks = [];
    let currentSection = 'content';

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return;

      // Detect content type and create appropriate block
      const blockType = detectContentType(trimmedLine);
      const sectionName = detectSectionType(trimmedLine, index, lines);
      
      let blockData = {};
      let metadata = {
        imported: true,
        originalText: trimmedLine,
        confidence: getConfidenceScore(trimmedLine, blockType),
        sectionTitle: formatSectionName(sectionName),
        editable: true
      };

      switch (blockType) {
        case 'heading':
          const level = detectHeadingLevel(trimmedLine);
          const color = detectHeadingColor(trimmedLine);
          blockData = {
            text: cleanText(trimmedLine),
            level: level.toString(),
            color: color,
            align: trimmedLine.length > 50 ? 'center' : 'left'
          };
          break;

        case 'list':
          const listItems = extractListItems(trimmedLine, lines, index);
          blockData = {
            items: listItems,
            ordered: /^\d+/.test(trimmedLine)
          };
          break;

        case 'testimonial':
          const testimonialData = parseTestimonial(trimmedLine);
          blockData = {
            quote: testimonialData.quote,
            author: testimonialData.author
          };
          break;

        case 'button':
          blockData = {
            label: cleanText(trimmedLine),
            href: '#',
            align: 'center'
          };
          break;

        case 'embedCode':
          blockData = {
            code: `<!-- ${trimmedLine} -->`,
            align: 'center'
          };
          break;

        default: // paragraph
          blockData = {
            text: cleanText(trimmedLine)
          };
          break;
      }

      blocks.push({
        type: blockType,
        data: blockData,
        section: sectionName,
        metadata: metadata
      });
    });

    return optimizeBlocks(blocks);
  }

  function detectContentType(text) {
    // Check patterns in order of specificity
    if (CONTENT_PATTERNS.bulletPoint.test(text)) return 'list';
    if (CONTENT_PATTERNS.testimonial.test(text)) return 'testimonial';
    if (CONTENT_PATTERNS.cta.test(text)) return 'button';
    if (CONTENT_PATTERNS.price.test(text)) return 'embedCode';
    if (CONTENT_PATTERNS.headline.test(text)) return 'heading';
    
    return 'paragraph';
  }

  function detectSectionType(text, index, allLines) {
    // Check content patterns to determine section
    if (CONTENT_PATTERNS.question.test(text) || CONTENT_PATTERNS.headline.test(text)) {
      if (index < 3) return 'hook';
      if (CONTENT_PATTERNS.problem.test(text)) return 'problem';
      return 'content';
    }
    
    if (CONTENT_PATTERNS.problem.test(text)) return 'problem';
    if (CONTENT_PATTERNS.benefit.test(text)) return 'benefits';
    if (CONTENT_PATTERNS.testimonial.test(text)) return 'social-proof';
    if (CONTENT_PATTERNS.guarantee.test(text)) return 'guarantee';
    if (CONTENT_PATTERNS.urgency.test(text)) return 'urgency';
    if (CONTENT_PATTERNS.cta.test(text)) return 'cta';
    
    return 'content';
  }

  function detectHeadingLevel(text) {
    if (text === text.toUpperCase() && text.length > 20) return 1;
    if (CONTENT_PATTERNS.question.test(text)) return 2;
    if (text.length > 100) return 2;
    if (text.includes('!') || text.includes('?')) return 2;
    return 3;
  }

  function detectHeadingColor(text) {
    if (CONTENT_PATTERNS.problem.test(text) || text.includes('!')) return 'red';
    if (CONTENT_PATTERNS.cta.test(text)) return 'blue';
    if (CONTENT_PATTERNS.benefit.test(text)) return 'green';
    return 'primary';
  }

  function parseTestimonial(text) {
    const match = text.match(CONTENT_PATTERNS.testimonial);
    if (match) {
      if (match[1] && match[2]) {
        return { quote: match[1], author: match[2] };
      }
      if (match[3] && match[4]) {
        return { quote: match[3], author: match[4] };
      }
    }
    return { quote: text, author: 'Customer' };
  }

  function extractListItems(currentLine, allLines, currentIndex) {
    const items = [cleanText(currentLine.replace(/^[\-\*\•]\s+|^\d+[\.\)]\s+/, ''))];
    
    // Look ahead for more list items
    for (let i = currentIndex + 1; i < allLines.length; i++) {
      const nextLine = allLines[i].trim();
      if (CONTENT_PATTERNS.bulletPoint.test(nextLine)) {
        items.push(cleanText(nextLine.replace(/^[\-\*\•]\s+|^\d+[\.\)]\s+/, '')));
      } else if (nextLine) {
        break;
      }
    }
    
    return items;
  }

  function cleanText(text) {
    return text
      .replace(/^[\-\*\•]\s+|^\d+[\.\)]\s+/, '') // Remove bullet markers
      .replace(/^["\"'"']|["\"'"']$/g, '') // Remove quotes
      .trim();
  }

  function formatSectionName(section) {
    const names = {
      hook: 'Hook/Attention Grabber',
      problem: 'Problem/Pain Points',
      solution: 'Solution/Method',
      benefits: 'Benefits/Features',
      'social-proof': 'Social Proof',
      guarantee: 'Guarantee/Risk Reversal',
      urgency: 'Urgency/Scarcity',
      cta: 'Call to Action',
      content: 'Content'
    };
    return names[section] || 'Content';
  }

  function getConfidenceScore(text, blockType) {
    let score = 50; // Base confidence
    
    // Boost confidence based on pattern matches
    Object.entries(CONTENT_PATTERNS).forEach(([pattern, regex]) => {
      if (regex.test(text)) score += 15;
    });
    
    // Adjust based on text characteristics
    if (text.length > 10 && text.length < 200) score += 10;
    if (text.includes('!') || text.includes('?')) score += 5;
    if (/[A-Z]{2,}/.test(text)) score += 5;
    
    return Math.min(100, score);
  }

  function optimizeBlocks(blocks) {
    // Group consecutive list items
    const optimized = [];
    let i = 0;
    
    while (i < blocks.length) {
      const block = blocks[i];
      
      if (block.type === 'list') {
        // Find all consecutive list blocks
        const listItems = [...block.data.items];
        let j = i + 1;
        
        while (j < blocks.length && blocks[j].type === 'list') {
          listItems.push(...blocks[j].data.items);
          j++;
        }
        
        optimized.push({
          ...block,
          data: { ...block.data, items: listItems }
        });
        
        i = j;
      } else {
        optimized.push(block);
        i++;
      }
    }
    
    return optimized;
  }

  function analyzeContent(text) {
    const lines = text.split('\n').filter(line => line.trim());
    const analysis = {
      totalLines: lines.length,
      estimatedReadTime: Math.ceil(text.split(' ').length / 200),
      sections: {},
      suggestions: []
    };

    // Analyze section distribution
    lines.forEach(line => {
      const section = detectSectionType(line.trim(), 0, lines);
      analysis.sections[section] = (analysis.sections[section] || 0) + 1;
    });

    // Generate suggestions
    if (!analysis.sections.hook) {
      analysis.suggestions.push({
        type: 'missing',
        section: 'hook',
        message: 'Consider adding an attention-grabbing hook at the beginning'
      });
    }

    if (!analysis.sections.cta) {
      analysis.suggestions.push({
        type: 'missing', 
        section: 'cta',
        message: 'Add clear calls-to-action to guide readers'
      });
    }

    if (analysis.sections.content > analysis.totalLines * 0.7) {
      analysis.suggestions.push({
        type: 'optimization',
        section: 'structure',
        message: 'Consider organizing content into specific sections for better flow'
      });
    }

    return analysis;
  }

  function handleTextChange(newText) {
    setImportText(newText);
    
    if (newText.trim()) {
      const blocks = parseTextToBlocks(newText);
      setParsedBlocks(blocks);
      setAnalysisResults(analyzeContent(newText));
    } else {
      setParsedBlocks([]);
      setAnalysisResults(null);
    }
  }

  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        handleTextChange(e.target.result);
      };
      reader.readAsText(file);
    }
  }

  function insertSnippet(snippet) {
    const cursorPos = importText.length;
    const newText = importText + (importText ? '\n\n' : '') + snippet;
    setImportText(newText);
    handleTextChange(newText);
  }

  function copySnippet(snippet) {
    navigator.clipboard.writeText(snippet);
  }

  function handleImport() {
    if (parsedBlocks.length > 0) {
      onImport(parsedBlocks);
      onClose();
    }
  }

  return (
    <div className={styles.bulkImport} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
        <h2>
          <FontAwesomeIcon icon={faUpload} />
          Bulk Content Import
        </h2>
        <button onClick={onClose} className={styles.closeBtn}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.inputSection}>
          <div className={styles.inputHeader}>
            <h3>📝 Paste Your Sales Copy</h3>
            <div className={styles.inputActions}>
              <button 
                onClick={() => setShowSnippets(!showSnippets)}
                className={styles.snippetsBtn}
              >
                <FontAwesomeIcon icon={faLightbulb} />
                Snippets
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".txt"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className={styles.uploadBtn}
              >
                <FontAwesomeIcon icon={faUpload} />
                Upload File
              </button>
            </div>
          </div>

          <textarea
            value={importText}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder="Paste your sales copy here... 

The AI will automatically:
• Detect headlines and convert to heading blocks
• Find bullet points and create list blocks  
• Identify testimonials and create testimonial blocks
• Recognize calls-to-action and create button blocks
• Organize content into logical sections

Try pasting some sales copy to see the magic! ✨"
            className={styles.textInput}
            rows={15}
          />

          {showSnippets && (
            <div className={styles.snippetsPanel}>
              <h4>💡 Sales Copy Snippets</h4>
              <div className={styles.snippetCategories}>
                {Object.keys(SALES_SNIPPETS).map(category => (
                  <button
                    key={category}
                    className={`${styles.categoryBtn} ${selectedSnippetCategory === category ? styles.active : ''}`}
                    onClick={() => setSelectedSnippetCategory(category)}
                  >
                    {formatSectionName(category)}
                  </button>
                ))}
              </div>
              <div className={styles.snippetsList}>
                {SALES_SNIPPETS[selectedSnippetCategory]?.map((snippet, index) => (
                  <div key={index} className={styles.snippetItem}>
                    <span className={styles.snippetText}>{snippet}</span>
                    <div className={styles.snippetActions}>
                      <button 
                        onClick={() => copySnippet(snippet)}
                        className={styles.copyBtn}
                        title="Copy to clipboard"
                      >
                        <FontAwesomeIcon icon={faCopy} />
                      </button>
                      <button 
                        onClick={() => insertSnippet(snippet)}
                        className={styles.insertBtn}
                        title="Insert into text"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.previewSection}>
          <div className={styles.previewHeader}>
            <h3>🧠 AI Analysis & Preview</h3>
            <div className={styles.previewActions}>
              <button 
                onClick={() => setShowPreview(!showPreview)}
                className={styles.togglePreview}
              >
                <FontAwesomeIcon icon={faEye} />
                {showPreview ? 'Hide' : 'Show'} Preview
              </button>
            </div>
          </div>

          {analysisResults && (
            <div className={styles.analysisResults}>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <strong>{analysisResults.totalLines}</strong>
                  <span>Lines</span>
                </div>
                <div className={styles.stat}>
                  <strong>{parsedBlocks.length}</strong>
                  <span>Blocks</span>
                </div>
                <div className={styles.stat}>
                  <strong>{analysisResults.estimatedReadTime}min</strong>
                  <span>Read Time</span>
                </div>
                <div className={styles.stat}>
                  <strong>{Object.keys(analysisResults.sections).length}</strong>
                  <span>Sections</span>
                </div>
              </div>

              {analysisResults.suggestions.length > 0 && (
                <div className={styles.suggestions}>
                  <h4>💡 Optimization Suggestions</h4>
                  {analysisResults.suggestions.map((suggestion, index) => (
                    <div key={index} className={styles.suggestion}>
                      <FontAwesomeIcon icon={faLightbulb} />
                      <span>{suggestion.message}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {showPreview && parsedBlocks.length > 0 && (
            <div className={styles.blockPreview}>
              <h4>📋 Generated Blocks</h4>
              <div className={styles.blocksList}>
                {parsedBlocks.map((block, index) => (
                  <div key={index} className={styles.blockItem}>
                    <div className={styles.blockHeader}>
                      <span className={styles.blockType}>{block.type}</span>
                      <span className={styles.blockSection}>{block.metadata?.sectionTitle}</span>
                      <span className={`${styles.confidence} ${block.metadata?.confidence > 80 ? styles.high : block.metadata?.confidence > 60 ? styles.medium : styles.low}`}>
                        {block.metadata?.confidence}%
                      </span>
                    </div>
                    <div className={styles.blockContent}>
                      {block.type === 'heading' && <strong>{block.data.text}</strong>}
                      {block.type === 'paragraph' && <span>{block.data.text}</span>}
                      {block.type === 'list' && (
                        <ul>
                          {block.data.items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      )}
                      {block.type === 'testimonial' && (
                        <blockquote>"{block.data.quote}" - {block.data.author}</blockquote>
                      )}
                      {block.type === 'button' && (
                        <button style={{background: '#007bff', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px'}}>
                          {block.data.label}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerInfo}>
          {parsedBlocks.length > 0 && (
            <span>
              ✨ Generated {parsedBlocks.length} blocks from your content
            </span>
          )}
        </div>
        <div className={styles.footerActions}>
          <button onClick={onClose} className={styles.cancelBtn}>
            Cancel
          </button>
          <button 
            onClick={handleImport}
            disabled={parsedBlocks.length === 0}
            className={styles.importBtn}
          >
            <FontAwesomeIcon icon={faRocket} />
            Import {parsedBlocks.length} Blocks
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
