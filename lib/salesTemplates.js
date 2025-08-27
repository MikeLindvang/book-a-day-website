// Sales Page Template Definitions
// Based on proven frameworks from existing sales pages

export const SALES_TEMPLATES = {
  'problem-agitation-solution': {
    id: 'problem-agitation-solution',
    name: 'Problem-Agitation-Solution (PAS)',
    description: 'Classic direct response framework - identify pain, agitate, then solve',
    framework: 'PAS',
    category: 'Direct Response',
    difficulty: 'Beginner',
    estimatedLength: 'Medium (8-12 sections)',
    bestFor: 'Problem-solving products, courses, tools',
    basedOn: 'Problem Buster page structure',
    sections: [
      {
        name: 'hook',
        title: 'Attention-Grabbing Hook',
        description: 'Open with a provocative question or bold statement',
        blocks: [
          {
            type: 'heading',
            data: {
              text: 'Mo\' Problems\nMo\' Money!',
              level: '1',
              color: 'red',
              align: 'center'
            },
            metadata: {
              placeholder: true,
              hint: 'Replace with your attention-grabbing hook'
            }
          },
          {
            type: 'heading',
            data: {
              text: 'Are You Losing The [Your Industry] Battle?\n\nIs The Rat-Race Killing You?\n\nAre You Facing One Problem After Another?',
              level: '2',
              align: 'center',
              weight: 'bold'
            },
            metadata: {
              placeholder: true,
              hint: 'List 3 pain points your audience faces'
            }
          }
        ]
      },
      {
        name: 'empathy',
        title: 'Empathy & Understanding',
        description: 'Connect with your audience\'s struggles',
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: '*Listen,*'
            },
            metadata: {
              placeholder: true,
              hint: 'Personal opener to build connection'
            }
          },
          {
            type: 'paragraph',
            data: {
              text: 'Just like everybody else you are looking for the magical formula that will change your fortunes.'
            },
            metadata: {
              placeholder: true,
              hint: 'Acknowledge their search for solutions'
            }
          }
        ]
      },
      {
        name: 'problem',
        title: 'Problem Reality Check',
        description: 'Shatter false beliefs and myths',
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: '**There are no magic tricks that will make you a successful [your industry expert].**'
            },
            metadata: {
              placeholder: true,
              hint: 'Destroy the myth of easy solutions'
            }
          },
          {
            type: 'paragraph',
            data: {
              text: 'Does that mean all hope is lost?'
            }
          },
          {
            type: 'paragraph',
            data: {
              text: '**No.**'
            }
          },
          {
            type: 'paragraph',
            data: {
              text: 'It means you\'re trying too hard.'
            },
            metadata: {
              placeholder: true,
              hint: 'Reframe the problem'
            }
          }
        ]
      },
      {
        name: 'credibility',
        title: 'Establish Credibility',
        description: 'Show you understand their world',
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: '**I get it.**'
            }
          },
          {
            type: 'paragraph',
            data: {
              text: 'I\'ve been where you are. [Share brief personal story or credentials]'
            },
            metadata: {
              placeholder: true,
              hint: 'Brief credibility statement or personal story'
            }
          }
        ]
      },
      {
        name: 'solution-intro',
        title: 'Solution Introduction',
        description: 'Introduce your solution concept',
        blocks: [
          {
            type: 'heading',
            data: {
              text: 'Here\'s What Actually Works',
              level: '2',
              color: 'blue',
              align: 'center'
            },
            metadata: {
              placeholder: true,
              hint: 'Transition to your solution'
            }
          },
          {
            type: 'paragraph',
            data: {
              text: '[Explain your core solution/methodology in 2-3 sentences]'
            },
            metadata: {
              placeholder: true,
              hint: 'Brief explanation of your approach'
            }
          }
        ]
      },
      {
        name: 'benefits',
        title: 'Benefits & Features',
        description: 'What they get when they buy',
        blocks: [
          {
            type: 'heading',
            data: {
              text: 'What\'s Inside [Your Product Name]',
              level: '3',
              color: 'primary'
            },
            metadata: {
              placeholder: true,
              hint: 'What\'s included section header'
            }
          },
          {
            type: 'card',
            data: {
              variant: 'primaryBorder',
              content: [
                {
                  type: 'heading',
                  data: {
                    text: 'When you buy "[Product Name]" you get:',
                    level: '4',
                    color: 'red',
                    align: 'center',
                    weight: 'bold'
                  }
                },
                {
                  type: 'list',
                  data: {
                    items: [
                      'A [X]-page [format] showing you every step of the [system name]',
                      '[Format] template ensuring you can get started right away',
                      '[Additional bonus or resource]'
                    ]
                  }
                }
              ]
            },
            metadata: {
              placeholder: true,
              hint: 'List all deliverables and bonuses'
            }
          }
        ]
      },
      {
        name: 'cta-primary',
        title: 'Primary Call to Action',
        description: 'Main purchase button and urgency',
        blocks: [
          {
            type: 'heading',
            data: {
              text: 'Get Started Right Here',
              level: '3',
              color: 'blue',
              align: 'center',
              weight: 'bold'
            }
          },
          {
            type: 'embedCode',
            data: {
              code: '<!-- Replace with your buy button code -->\n<a href="#" style="display:inline-block; padding:15px 30px; background:#ff6b35; color:white; text-decoration:none; border-radius:5px; font-weight:bold;">BUY NOW - $[PRICE]</a>',
              align: 'center'
            },
            metadata: {
              placeholder: true,
              hint: 'Replace with your actual buy button code'
            }
          }
        ]
      },
      {
        name: 'guarantee',
        title: 'Risk Reversal / Guarantee',
        description: 'Address risk concerns',
        blocks: [
          {
            type: 'card',
            data: {
              variant: 'primaryBorder',
              content: [
                {
                  type: 'heading',
                  data: {
                    text: '[YOUR GUARANTEE TERMS]',
                    level: '1',
                    color: 'red',
                    align: 'center',
                    weight: 'bold'
                  }
                }
              ]
            },
            metadata: {
              placeholder: true,
              hint: 'Your guarantee, refund policy, or "ALL SALES FINAL" notice'
            }
          }
        ]
      },
      {
        name: 'closing',
        title: 'Closing & Final CTA',
        description: 'Final push and call to action',
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: '[Final compelling statement or personal note]'
            },
            metadata: {
              placeholder: true,
              hint: 'Personal closing statement'
            }
          },
          {
            type: 'paragraph',
            data: {
              text: 'To your success,\n\n[Your Name]'
            },
            metadata: {
              placeholder: true,
              hint: 'Personal signature'
            }
          }
        ]
      }
    ]
  },

  'before-after-bridge': {
    id: 'before-after-bridge',
    name: 'Before-After-Bridge (BAB)',
    description: 'Show current state, desired state, then your bridge to get there',
    framework: 'BAB',
    category: 'Transformation',
    difficulty: 'Beginner',
    estimatedLength: 'Short (6-8 sections)',
    bestFor: 'Transformation products, quick wins, time-sensitive offers',
    basedOn: '11 Page Payday structure',
    sections: [
      {
        name: 'before-headline',
        title: 'Current Situation (Before)',
        description: 'Describe their current struggle',
        blocks: [
          {
            type: 'heading',
            data: {
              text: '20 Daily Sales From\nOne 11-Page Book?',
              level: '1',
              align: 'center',
              weight: 'bold'
            },
            metadata: {
              placeholder: true,
              hint: 'Intriguing result-focused headline'
            }
          },
          {
            type: 'heading',
            data: {
              text: 'Publish Your Next [Product]\nin Less Than [Timeframe]',
              level: '2',
              align: 'center'
            },
            metadata: {
              placeholder: true,
              hint: 'Promise of quick achievement'
            }
          }
        ]
      },
      {
        name: 'before-struggle',
        title: 'Current Struggle',
        description: 'Identify with their current pain',
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: 'If you\'re like most people, you\'ve probably always wanted to [achieve goal]. But you may have thought it was too hard, too time-consuming, or you didn\'t know where to start.'
            },
            metadata: {
              placeholder: true,
              hint: 'Common struggle your audience faces'
            }
          }
        ]
      },
      {
        name: 'after-promise',
        title: 'Desired Outcome (After)',
        description: 'Paint the picture of success',
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: 'What if I told you that you could [achieve specific result] in [specific timeframe]? And what if I said that this [result] could [additional benefit]?'
            },
            metadata: {
              placeholder: true,
              hint: 'Specific promise with timeframe'
            }
          },
          {
            type: 'paragraph',
            data: {
              text: 'You might be thinking this is too good to be true. But it\'s not.'
            }
          }
        ]
      },
      {
        name: 'bridge-solution',
        title: 'The Bridge (Your Solution)',
        description: 'How you get them from before to after',
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: 'And quite frankly...'
            }
          },
          {
            type: 'paragraph',
            data: {
              text: 'Considering [current situation/problem], wouldn\'t it be nice to have **a simple solution?**'
            },
            metadata: {
              placeholder: true,
              hint: 'Connect to current events or pain points'
            }
          }
        ]
      },
      {
        name: 'method-preview',
        title: 'Method Preview',
        description: 'Hint at your methodology',
        blocks: [
          {
            type: 'heading',
            data: {
              text: 'The [Your Method Name] System',
              level: '2',
              align: 'center',
              color: 'blue'
            },
            metadata: {
              placeholder: true,
              hint: 'Name your methodology'
            }
          },
          {
            type: 'paragraph',
            data: {
              text: '[Brief explanation of your method/system]'
            },
            metadata: {
              placeholder: true,
              hint: '2-3 sentences about your approach'
            }
          }
        ]
      },
      {
        name: 'offer',
        title: 'The Offer',
        description: 'What they get',
        blocks: [
          {
            type: 'card',
            data: {
              variant: 'primaryBorder',
              content: [
                {
                  type: 'heading',
                  data: {
                    text: 'Get [Product Name] Today',
                    level: '3',
                    color: 'red',
                    align: 'center'
                  }
                },
                {
                  type: 'list',
                  data: {
                    items: [
                      '[Main deliverable]',
                      '[Bonus or template]',
                      '[Additional value item]'
                    ]
                  }
                }
              ]
            },
            metadata: {
              placeholder: true,
              hint: 'List everything included'
            }
          }
        ]
      },
      {
        name: 'cta-final',
        title: 'Final Call to Action',
        description: 'Purchase button and urgency',
        blocks: [
          {
            type: 'embedCode',
            data: {
              code: '<!-- Replace with your buy button -->\n<div style="text-align:center; margin:30px 0;">\n  <a href="#" style="display:inline-block; padding:20px 40px; background:#007cba; color:white; text-decoration:none; border-radius:8px; font-size:18px; font-weight:bold;">GET INSTANT ACCESS - $[PRICE]</a>\n</div>',
              align: 'center'
            },
            metadata: {
              placeholder: true,
              hint: 'Your purchase button'
            }
          }
        ]
      }
    ]
  },

  'star-story-solution': {
    id: 'star-story-solution',
    name: 'Star-Story-Solution (Authority)',
    description: 'Establish authority, tell your story, present solution',
    framework: 'Star-Story-Solution',
    category: 'Authority',
    difficulty: 'Intermediate',
    estimatedLength: 'Medium (8-10 sections)',
    bestFor: 'Expert positioning, higher-priced products, coaching',
    basedOn: 'Lists Unlimited authority structure',
    sections: [
      {
        name: 'star-proof',
        title: 'Establish Authority (Star)',
        description: 'Lead with impressive results or proof',
        blocks: [
          {
            type: 'heading',
            data: {
              text: '7-Page Book Still Selling\nThree Months After Publication',
              level: '1',
              color: 'red',
              align: 'center',
              weight: 'bold'
            },
            metadata: {
              placeholder: true,
              hint: 'Your impressive result or achievement'
            }
          },
          {
            type: 'heading',
            data: {
              text: 'Do You Believe Only [Common Belief]\n[More Common Beliefs]?\n\n[Your Market] Are Proving Otherwise\n**Every Single Day...**',
              level: '2',
              color: 'blue',
              align: 'center'
            },
            metadata: {
              placeholder: true,
              hint: 'Challenge common beliefs in your industry'
            }
          }
        ]
      },
      {
        name: 'story-connection',
        title: 'Personal Story',
        description: 'Share your experience and build connection',
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: 'I think we\'ve all [shared experience that connects with audience]. It happens.'
            },
            metadata: {
              placeholder: true,
              hint: 'Universal experience in your market'
            }
          },
          {
            type: 'paragraph',
            data: {
              text: 'It\'s easy to think that [achieving goal] requires [perceived requirement] only a select few know about.'
            },
            metadata: {
              placeholder: true,
              hint: 'Common misconception'
            }
          },
          {
            type: 'paragraph',
            data: {
              text: '**Fortunately, that\'s not the case!**'
            }
          }
        ]
      },
      {
        name: 'revelation',
        title: 'The Revelation',
        description: 'What you discovered that changed everything',
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: 'The good news - [achieving goal] doesn\'t require...'
            },
            metadata: {
              placeholder: true,
              hint: 'What it doesn\'t require'
            }
          },
          {
            type: 'list',
            data: {
              items: [
                '[Common requirement myth 1]',
                '[Common requirement myth 2]',
                '[Common requirement myth 3]'
              ]
            },
            metadata: {
              placeholder: true,
              hint: 'List what they think they need but don\'t'
            }
          }
        ]
      },
      {
        name: 'solution-reveal',
        title: 'Solution Reveal',
        description: 'What actually works',
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: 'What it DOES require is [your method/approach].'
            },
            metadata: {
              placeholder: true,
              hint: 'Your actual solution'
            }
          },
          {
            type: 'paragraph',
            data: {
              text: '**And I\'m going to show you exactly how to do it.**'
            }
          }
        ]
      }
    ]
  }
};

// Helper functions for template usage
export function getTemplateById(id) {
  return SALES_TEMPLATES[id] || null;
}

export function getAllTemplates() {
  return Object.values(SALES_TEMPLATES);
}

export function getTemplatesByCategory(category) {
  return Object.values(SALES_TEMPLATES).filter(template => template.category === category);
}

export function getTemplatesByDifficulty(difficulty) {
  return Object.values(SALES_TEMPLATES).filter(template => template.difficulty === difficulty);
}

// Convert template to blocks format
export function templateToBlocks(template) {
  const blocks = [];
  
  template.sections.forEach((section, sectionIndex) => {
    section.blocks.forEach((block, blockIndex) => {
      const enhancedBlock = {
        ...block,
        section: section.name,
        sectionIndex: blockIndex,
        metadata: {
          ...block.metadata,
          template: template.id,
          templateName: template.name,
          sectionTitle: section.title,
          sectionDescription: section.description,
          editable: true
        }
      };
      blocks.push(enhancedBlock);
    });
  });
  
  return blocks;
}
