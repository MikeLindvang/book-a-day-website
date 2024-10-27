// pages/template-topics/page.js

import Main from '../../../../components/Main';
import Heading from '../../../../components/Heading';
import Paragraph from '../../../../components/Paragraph';
import CardComponent from '../../../../components/CardComponent';
import EmbedCodeComponent from '../../../../components/EmbedCodeComponent';
import Image from 'next/image';
import Link from 'next/link';

// Buy Button Code
const buyButtonCode = `
  <a href="https://warriorplus.com/o2/buy/phgdg2/c32jqs/zhjwt4">
    <img src="https://warriorplus.com/o2/btn/cn200011000/phgdg2/c32jqs/184027" alt="Buy Now">
  </a>
`;

export default function TemplateTopicsPage() {
  return (
    <Main>
      {/* Heading */}
      <Heading level={1} color="red" align="center" weight="bold">
        Thank You For Your Purchase!
      </Heading>

      <Heading level={2} color="red" align="center">
        Not Sure Where To Start?
      </Heading>

      {/* Spacing */}
      <br />
      <br />

      {/* Content Paragraphs */}
      <Paragraph>I get it.</Paragraph>
      <Paragraph>
        I can't even recall the number of times I've purchased a product and
        felt uncertain where to start.
      </Paragraph>
      <Paragraph>
        Even with rock-solid information it can be difficult finding the
        inspiration for what exactly you're going to do.
      </Paragraph>
      <Paragraph>
        The creator of the training makes it look easy, but where do YOU start.
      </Paragraph>
      <Paragraph>
        That's why I've put an optional piece together with 522 genres you could
        start creating template books for today.
      </Paragraph>
      <Paragraph>
        With this in hand you WILL be able to find something that suits YOU.
      </Paragraph>

      {/* Subheading */}
      <Heading level={3} align="center" weight="bold">
        Get It Right Now!
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
        <strong>P.S.</strong> Inside you will find a PDF with 522 different
        genres across a variety of different markets.
      </Paragraph>
      <Paragraph>
        <strong>P.P.S.</strong> With Book-A-Day Template Torrent Topics you will
        be able to get started right away.
      </Paragraph>

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
        <Link href="https://warriorplus.com/o/nothanks/c32jqs">No Thanks</Link>
      </Paragraph>

      {/* Extra Spacing */}
      <br />
      <br />
      <br />
    </Main>
  );
}
