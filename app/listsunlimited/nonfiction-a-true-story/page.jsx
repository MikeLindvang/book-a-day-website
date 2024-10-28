// pages/nonfiction-a-true-story/page.js

import Main from '../../../components/Main';
import Heading from '../../../components/Heading';
import Paragraph from '../../../components/Paragraph';
import CardComponent from '../../../components/CardComponent';
import EmbedCodeComponent from '../../../components/EmbedCodeComponent';
import Image from 'next/image';
import Link from 'next/link';

// Buy Button Code
const buyButtonCode = `
  <a href="https://warriorplus.com/o2/buy/sy7t2x/hzhnqs/p3tqgk">
    <img src="https://warriorplus.com/o2/btn/fn210011000/sy7t2x/hzhnqs/162258" alt="Buy Now">
  </a>
`;

export default function NonfictionATrueStoryPage() {
  return (
    <Main>
      {/* Heading */}
      <Heading level={1} color="red" align="center" weight="bold">
        Thank You For Your Purchase
      </Heading>

      <Heading level={3} color="red" align="center" weight="bold">
        Fiction Writers Plot
        <br />
        Nonfiction Writers Outline...
      </Heading>

      {/* Content */}
      <Paragraph>
        As someone who writes both fiction and nonfiction, there is something
        that has always amused me.
      </Paragraph>

      <Paragraph>
        <strong>
          Fiction writers talk about plot while nonfiction writers talk about
          outline.
        </strong>
      </Paragraph>

      <Paragraph>
        The truth is, the most powerful way to bring your point home is to tell
        a story. Think about how you talk to people in everyday life...
      </Paragraph>

      <Paragraph>
        <strong>You tell stories!</strong>
      </Paragraph>

      <Paragraph>
        As a nonfiction writer, your books can become so much more powerful if
        you use storytelling.
      </Paragraph>

      <Paragraph>
        That's why I want to tell you about my "Nonfiction - A True Story"
        training.
      </Paragraph>

      <Paragraph>
        Don't get me wrong. Everything you learned in "Connect-The-Dots
        Nonfiction Topics" can work <em>"as is."</em> However, if you learn to
        use storytelling in your nonfiction it becomes exponentially better and
        more engaging.
      </Paragraph>

      <Paragraph>
        I recommend this training to anyone who wants to improve their
        nonfiction.
      </Paragraph>

      {/* What's Inside */}
      <CardComponent variant="primaryBorder">
        <Heading level={2} align="center">
          Here's What's Inside
          <br />
          "Nonfiction - A True Story"
        </Heading>
        <ol>
          <li>
            19-Minute Video showing you how easy it is to use powerful
            storytelling techniques in your nonfiction.
          </li>
          <li>Transcript of the video if you can't spare 19 minutes.</li>
          <li>
            The Presentation used for parts of the video. This makes it super
            easy to get a quick overview of the method.
          </li>
        </ol>
      </CardComponent>

      {/* Call to Action */}
      <Heading level={3} color="red" align="center" weight="bold">
        Get Started Right Here!
      </Heading>

      {/* Buy Button */}
      <EmbedCodeComponent code={buyButtonCode} align="center" />

      {/* Guarantee Section */}
      <CardComponent variant="primaryBorder">
        <Heading level={2} color="red" align="center" weight="bold">
          ALL SALES ARE FINAL!
        </Heading>
      </CardComponent>

      {/* Closing Remarks */}
      <Paragraph>
        Sincerely,
        <br /> Mike Nielsen
      </Paragraph>
      <Image
        src="/officialmike.jpg"
        alt="Mike Nielsen"
        width={200}
        height={200}
        style={{ borderRadius: '0.5em' }}
      />

      {/* No Thanks Link */}
      <Paragraph align="center">
        <Link href="https://warriorplus.com/o/nothanks/hzhnqs">No Thanks</Link>
      </Paragraph>
    </Main>
  );
}
