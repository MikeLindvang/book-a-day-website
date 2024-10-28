// pages/connect-the-dots-nonfiction-topics/page.js

import Main from '../../../components/Main';
import Heading from '../../../components/Heading';
import Paragraph from '../../../components/Paragraph';
import CardComponent from '../../../components/CardComponent';
import EmbedCodeComponent from '../../../components/EmbedCodeComponent';
import Image from 'next/image';
import Link from 'next/link';

// Buy Button Code
const buyButtonCode = `
  <a href="https://warriorplus.com/o2/buy/sy7t2x/fz0z8y/rn6yfd">
    <img src="https://warriorplus.com/o2/btn/fn210011000/sy7t2x/fz0z8y/162252" alt="Buy Now">
  </a>
`;

export default function ConnectTheDotsNonfictionTopicsPage() {
  return (
    <Main>
      {/* Heading */}
      <Heading level={1} color="red" align="center" weight="bold">
        Thank You For Your Purchase!
      </Heading>

      {/* Content */}
      <Paragraph>Hi,</Paragraph>

      <Paragraph>
        I'm confident you made an outstanding decision when deciding to purchase
        Book-A-Day Lists Unlimited. I firmly believe there is no simpler way to
        start earning royalties with Kindle Nonfiction books.
      </Paragraph>

      <Paragraph>
        However, one problem some people still have is figuring out what topics
        do well for nonfiction.
      </Paragraph>

      <Paragraph>
        In "Connect-The-Dots Nonfiction Topics" I show you a cool way to come up
        with new ideas for nonfiction books at will.
      </Paragraph>

      {/* What's Inside */}
      <CardComponent variant="primaryBorder">
        <Heading level={2} align="center">
          Here's What You Get With
          <br />
          "Connect-The-Dots Nonfiction Topics"
        </Heading>
        <ol>
          <li>
            25-Minute Video showing you how to find awesome topics that people
            are hungry for.
          </li>
          <li>
            Transcript of the video if you can't spare 25 minutes watching the
            entire video.
          </li>
          <li>
            The PowerPoint Presentation used for parts of the video. This makes
            it super easy to find the websites I mention in the video.
          </li>
          <li>
            My own unbelievably simple template for writing nonfiction (Word and
            PDF format)
          </li>
          <li>
            17-Page PDF guide showing you how to find topic ideas AND how to use
            the template.
          </li>
        </ol>
        <Paragraph>
          After going through the training material I'm confident you'll be able
          to jump right in and start your next nonfiction book today!
        </Paragraph>
      </CardComponent>

      {/* Call to Action */}
      <Heading level={3} color="blue" align="center" weight="bold">
        Get Started Right Here
      </Heading>

      {/* Buy Button */}
      <EmbedCodeComponent code={buyButtonCode} align="center" />

      {/* Guarantee Section */}
      <CardComponent variant="primaryBorder">
        <Heading level={1} color="red" align="center" weight="bold">
          ALL SALES ARE FINAL!
        </Heading>
      </CardComponent>

      {/* Closing Remarks */}
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
        style={{ border: '1px solid black', borderRadius: '0.5em' }}
      />

      <Paragraph>Contact info: mike[at]netscribepro.com</Paragraph>

      {/* No Thanks Link */}
      <Paragraph align="center">
        <Link href="https://warriorplus.com/o/nothanks/fz0z8y">No Thanks</Link>
      </Paragraph>
    </Main>
  );
}
