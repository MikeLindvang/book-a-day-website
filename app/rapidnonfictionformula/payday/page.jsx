import Main from '../../../components/Main';
import Heading from '../../../components/Heading';
import Paragraph from '../../../components/Paragraph';
import List from '../../../components/List';
import CardComponent from '../../../components/CardComponent';
import EmbedCodeComponent from '../../../components/EmbedCodeComponent';
import Image from 'next/image';

export default function BookADayInstantOutlinePage() {
  return (
    <Main>
      {/* Main Heading */}
      <Heading level={1} color="red" align="center">
        Ready to..
        <br /> Take Your Publishing Game
        <br /> to the Next Level?
      </Heading>

      <Paragraph color="black" align="center">
        Enhance your journey with our next-level guide:
      </Paragraph>

      {/* Product Title */}
      <Heading level={2} color="primary" align="center">
        Book-A-Day 11-Page Payday
      </Heading>

      {/* Benefits List */}
      <List
        items={[
          'Unlock the secrets to crafting impactful, concise how-to books that readers love.',
          'Master the art of narrowing down your focus to a single problem with a single solution.',
          'Learn the strategy behind selecting profitable niches and topics with high demand.',
          'Discover how to leverage AI tools like ChatGPT for brainstorming and outlining your book efficiently.',
          'Gain insights into the optimal book length to maximize visibility and sales.',
          'Access step-by-step templates for crafting your book from concept to completion.',
          'Explore the potential in various genres, including Amazon related, technical, crafts, self-help, and cooking.',
          'Implement actionable techniques for idea generation, content creation, and publishing with speed.',
          'Benefit from case studies and examples that illustrate successful strategies in action.',
          'Capitalize on the compact format to quickly expand your publishing portfolio and income stream.',
        ]}
        ordered={false}
      />

      {/* Purchase Button */}
      <EmbedCodeComponent
        code={`
          <a href="https://warriorplus.com/o2/buy/ss1gdj/zv1d58/j0hc9d">
            <img src="https://warriorplus.com/o2/btn/cn200011000/ss1gdj/zv1d58/318114" alt="Buy Now">
          </a>
        `}
        align="center"
      />

      {/* Guarantee - Converted to 'All Sales Are Final' Card */}
      <CardComponent variant="outline">
        <Heading level={1} color="red" align="center">
          ALL SALES ARE FINAL
        </Heading>
      </CardComponent>

      {/* Standardized Signature */}
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

      {/* "No Thanks" Link */}
      <Paragraph align="center">
        <a href="https://warriorplus.com/o/nothanks/zv1d58">No Thanks</a>
      </Paragraph>
    </Main>
  );
}
