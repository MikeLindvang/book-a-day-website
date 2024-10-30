// pages/book-a-day-instant-outline/page.js

import Main from '../../../components/Main';
import Heading from '../../../components/Heading';
import Paragraph from '../../../components/Paragraph';
import CardComponent from '../../../components/CardComponent';
import EmbedCodeComponent from '../../../components/EmbedCodeComponent';
import Image from 'next/image';

// Buy Button Code
const buyButtonCode = `
  <a href="https://warriorplus.com/o2/buy/ss1gdj/q4w6pw/sly8x6">
    <img src="https://warriorplus.com/o2/btn/cn200011000/ss1gdj/q4w6pw/387717" alt="Buy Now">
  </a>
`;

export default function BookADayInstantOutlinePage() {
  return (
    <Main>
      {/* Headline */}
      <Heading level={1} align="center">
        Thank You for Your Purchase!
      </Heading>

      {/* Subheadline */}
      <Paragraph align="center">
        Enhance your journey with our next-level guide:
      </Paragraph>

      {/* Section Headline */}
      <Heading level={3} align="center">
        Book-A-Day Instant Outline
      </Heading>

      {/* List of Benefits */}
      <ul>
        <li> Master the art of creating impactful book outlines quickly.</li>
        <li>
          {' '}
          Discover the secrets to rapid nonfiction writing through effective
          outlining.
        </li>
        <li> Learn techniques for generating ideas with impact.</li>
        <li> Decode market desires to ensure your book finds its audience.</li>
        <li>
          {' '}
          Structure your book for success with proven outlining strategies.
        </li>
        <li>
          {' '}
          Create chapters that captivate and engage your readers from start to
          finish.
        </li>
        <li> Maximize detail and impact for a richer reader experience.</li>
        <li>
          {' '}
          Revise, refine, and rejoice in the efficiency of your writing process.
        </li>
        <li>
          {' '}
          Benefit from bonus quick outline templates for various projects.
        </li>
        <li>
          {' '}
          Leverage modern AI tools like ChatGPT to streamline your outlining
          process.
        </li>
      </ul>

      {/* Customer Review Section */}
      <CardComponent
        variant="primaryBorder"
        style={{ marginTop: '2rem', marginBottom: '2rem' }}
      >
        <Heading level={1} align="center" color="red">
          ALL SALES ARE FINAL
        </Heading>
      </CardComponent>

      {/* Buy Button */}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <EmbedCodeComponent code={buyButtonCode} />
      </div>

      {/* Signature */}
      <Paragraph>
        Sincerely,
        <br />
        Mike Nielsen
      </Paragraph>
      <Image
        src="/officialmike.jpg"
        alt="Mike Nielsen"
        width={200}
        height={200}
        style={{ borderRadius: '10px' }}
      />

      <Paragraph>
        <a href="https://netscribepro.ladesk.com/" target="_blank">
          Need Support
        </a>
      </Paragraph>

      {/* No Thanks Link */}
      <Paragraph align="center">
        <a href="https://warriorplus.com/o/nothanks/q4w6pw">No Thanks</a>
      </Paragraph>
    </Main>
  );
}
