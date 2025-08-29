// components/CardShowcase.jsx
'use client';

import React, { useState } from 'react';
import CardComponent from './CardComponent';
import styles from './CardShowcase.module.css';

export default function CardShowcase({ surface = 'admin' }) {
  const [loadingCard, setLoadingCard] = useState(false);
  const [errorCard, setErrorCard] = useState(false);

  const handleLoadingTest = () => {
    setLoadingCard(true);
    setTimeout(() => setLoadingCard(false), 3000);
  };

  const handleErrorTest = () => {
    setErrorCard(true);
    setTimeout(() => setErrorCard(false), 3000);
  };

  return (
    <div className={styles.showcase}>
      <div className={styles.header}>
        <h1>Card Component Showcase</h1>
        <p>All card variants with WCAG AA compliant contrast ratios</p>
        <div className={styles.surfaceToggle}>
          <span>Current Surface: <strong>{surface}</strong></span>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Basic Variants</h2>
        <div className={styles.grid}>
          <CardComponent
            variant="default"
            surface={surface}
            title="Default Card"
            subtitle="Standard card with default styling"
          >
            <p>This is the default card variant with proper contrast ratios and clean design.</p>
          </CardComponent>

          <CardComponent
            variant="light"
            surface={surface}
            title="Light Card"
            subtitle="Clean white background"
          >
            <p>Light variant with high contrast text ensuring accessibility compliance.</p>
          </CardComponent>

          <CardComponent
            variant="dark"
            surface={surface}
            title="Dark Card"
            subtitle="Dark theme variant"
          >
            <p>Dark variant with carefully selected colors for optimal readability.</p>
          </CardComponent>

          <CardComponent
            variant="minimal"
            surface={surface}
            title="Minimal Card"
            subtitle="Clean and simple"
          >
            <p>Minimal design with subtle background and clean typography.</p>
          </CardComponent>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Semantic Color Variants</h2>
        <div className={styles.grid}>
          <CardComponent
            variant="info"
            surface={surface}
            title="Info Card"
            subtitle="Informational content"
          >
            <p>Information card with primary brand colors and white text for contrast.</p>
          </CardComponent>

          <CardComponent
            variant="success"
            surface={surface}
            title="Success Card"
            subtitle="Positive feedback"
          >
            <p>Success variant using green colors with excellent text contrast.</p>
          </CardComponent>

          <CardComponent
            variant="warning"
            surface={surface}
            title="Warning Card"
            subtitle="Important notice"
          >
            <p>Warning card with dark text on light background for maximum readability.</p>
          </CardComponent>

          <CardComponent
            variant="danger"
            surface={surface}
            title="Danger Card"
            subtitle="Critical information"
          >
            <p>Danger variant with high contrast white text on red background.</p>
          </CardComponent>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Modern Variants</h2>
        <div className={styles.grid}>
          <CardComponent
            variant="gradient"
            surface={surface}
            title="Gradient Card"
            subtitle="Premium visual effect"
          >
            <p>Gradient background with shimmer effect and proper text contrast.</p>
          </CardComponent>

          <CardComponent
            variant="glass"
            surface={surface}
            title="Glass Morphism"
            subtitle="Modern blur effect"
          >
            <p>Glass morphism design with backdrop blur and transparency effects.</p>
          </CardComponent>

          <CardComponent
            variant="elevated"
            surface={surface}
            title="Elevated Card"
            subtitle="Maximum depth"
          >
            <p>Elevated card with deep shadows for important content.</p>
          </CardComponent>

          <CardComponent
            variant="accent"
            surface={surface}
            title="Accent Card"
            subtitle="Brand highlight"
          >
            <p>Accent variant using brand red with proper white text contrast.</p>
          </CardComponent>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Specialized Variants</h2>
        <div className={styles.grid}>
          <CardComponent
            variant="pricing"
            surface={surface}
            title="Pro Plan"
            subtitle="$29/month"
            featured={true}
          >
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>✓ Unlimited pages</li>
              <li>✓ Advanced analytics</li>
              <li>✓ Priority support</li>
              <li>✓ Custom domains</li>
            </ul>
          </CardComponent>

          <CardComponent
            variant="testimonial"
            surface={surface}
            meta="John Doe, CEO at TechCorp"
            avatar="/officialmike.jpg"
          >
            <p>This platform has completely transformed how we build our sales pages. The results speak for themselves!</p>
          </CardComponent>

          <CardComponent
            variant="productCard"
            surface={surface}
            title="Sales Boilerplate"
            subtitle="Complete sales page builder"
            footer={<button style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', background: 'var(--primary)', color: 'white' }}>Learn More</button>}
          >
            <p>Build professional sales pages in minutes with our powerful page builder.</p>
          </CardComponent>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Status Variants</h2>
        <div className={styles.grid}>
          <CardComponent
            variant="statusPending"
            surface={surface}
            title="Pending Review"
            status="pending"
          >
            <p>This content is awaiting approval from the moderation team.</p>
          </CardComponent>

          <CardComponent
            variant="statusApproved"
            surface={surface}
            title="Approved Content"
            status="approved"
          >
            <p>This content has been reviewed and approved for publication.</p>
          </CardComponent>

          <CardComponent
            variant="statusRejected"
            surface={surface}
            title="Rejected Submission"
            status="rejected"
          >
            <p>This submission did not meet our content guidelines.</p>
          </CardComponent>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Interactive States</h2>
        <div className={styles.grid}>
          <CardComponent
            variant="interactive"
            surface={surface}
            title="Clickable Card"
            subtitle="Click me!"
            clickable={true}
            onClick={() => alert('Card clicked!')}
          >
            <p>This card is fully interactive with keyboard navigation support.</p>
          </CardComponent>

          <CardComponent
            variant="loading"
            surface={surface}
            title="Loading State"
            loading={loadingCard}
            footer={
              <button 
                onClick={handleLoadingTest}
                style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', background: 'var(--primary)', color: 'white' }}
              >
                Test Loading
              </button>
            }
          >
            <p>Click the button to see the loading state in action.</p>
          </CardComponent>

          <CardComponent
            variant="error"
            surface={surface}
            title="Error State"
            error={errorCard}
            footer={
              <button 
                onClick={handleErrorTest}
                style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', background: 'var(--danger)', color: 'white' }}
              >
                Test Error
              </button>
            }
          >
            <p>Click the button to see the error state display.</p>
          </CardComponent>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Accessibility Features</h2>
        <div className={styles.accessibilityInfo}>
          <h3>WCAG AA Compliance</h3>
          <ul>
            <li>✅ All text meets 4.5:1 contrast ratio minimum</li>
            <li>✅ Large text meets 3:1 contrast ratio minimum</li>
            <li>✅ Focus indicators visible for keyboard navigation</li>
            <li>✅ Proper ARIA labels and semantic HTML</li>
            <li>✅ Screen reader compatible content</li>
            <li>✅ Respects prefers-reduced-motion preferences</li>
          </ul>
          
          <h3>Keyboard Navigation</h3>
          <p>
            Use <kbd>Tab</kbd> to navigate between interactive cards, 
            <kbd>Enter</kbd> or <kbd>Space</kbd> to activate clickable cards.
          </p>
        </div>
      </div>
    </div>
  );
}
