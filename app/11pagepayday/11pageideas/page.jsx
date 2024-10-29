// pages/thank-you-for-purchase/page.js

import Main from '../../../components/Main';
import Heading from '../../../components/Heading';
import Paragraph from '../../../components/Paragraph';
import CardComponent from '../../../components/CardComponent';
import EmbedCodeComponent from '../../../components/EmbedCodeComponent';
import Image from 'next/image';

const buyButtonCode30 = `
   <a href="https://warriorplus.com/o2/buy/bztypd/n5g8hr/dbqhyc">
                <img
                  src="https://warriorplus.com/o2/btn/cn200011000/bztypd/n5g8hr/318115"
                  alt="30 Days Access"
                />
              </a>
`;
const buyButtonCode90 = `
   <a href="https://warriorplus.com/o2/buy/bztypd/n5g8hr/pfy686">
                <img
                  src="https://warriorplus.com/o2/btn/cn200011000/bztypd/n5g8hr/318117"
                  alt="90 Days Access"
                />
              </a>
`;
const buyButtonCode180 = `
  <a href="https://warriorplus.com/o2/buy/bztypd/n5g8hr/c73h3z">
                <img
                  src="https://warriorplus.com/o2/btn/cn200011000/bztypd/n5g8hr/318118"
                  alt="180 Days Access"
                />
              </a>
`;

export default function ThankYouForPurchase() {
  return (
    <Main>
      {/* Headline */}
      <Heading level={1} align="center">
        Thank You For
        <br />
        Your Purchase!
      </Heading>

      {/* Introduction */}
      <Paragraph>
        In just a few minutes, you will realize how easy this writing system is
        and why so many people have endorsed this training directly. It really
        is a good system.
      </Paragraph>
      <Paragraph>
        Despite the simplicity of this method and the guidance on how to find
        the best book ideas, a lot of people will feel completely overwhelmed by
        the sheer volume of outstanding book ideas that they will quickly
        discover.
      </Paragraph>
      <Paragraph>
        They will be overwhelmed by having too many great ideas from which to
        choose.
      </Paragraph>
      <Paragraph>
        Several people mentioned to me that it would be awesome if I could give
        them access to a number of pre-selected book ideas, to help them get
        started with the process, so they could focus their time more on writing
        and less on worrying about whether they are looking at viable book
        ideas.
      </Paragraph>
      <Paragraph>
        I'd hate to see this being something standing in your way...
      </Paragraph>
      <Paragraph>
        So, I'd very much like to{' '}
        <strong>help you get past that potential obstacle.</strong>
      </Paragraph>
      <Paragraph>
        In "Book-A-Day 11-Page Ideas," I will give you 30 new ideas every 30
        days.{' '}
        <strong>
          With this, you've got no excuses for not publishing books!
        </strong>
      </Paragraph>

      <Paragraph>
        There are 3 different payment options so you can decide which one is
        most suitable for you:
      </Paragraph>

      {/* Customer Review Section */}
      <div className="customerReview">
        <Heading level={4} align="center">
          Here's what's included in your
          <br />
          "Book-A-Day 11-Page Ideas"
          <br />
          membership:
        </Heading>
        <ul>
          <li>
            <strong>Every 30 days you get access to 30 new ideas</strong> for
            short how-to books. With 3 different payment options...
            <ul>
              <li>30 days subscription.</li>
              <li>90 days subscription.</li>
              <li>180 days subscription.</li>
            </ul>
          </li>
          <li>Use every idea and publish a new book every single day.</li>
          <li>Pick the ones you prefer and publish at your leisure.</li>
          <li>
            All ideas are <strong>in demand</strong> topics!
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <Heading
        level={4}
        align="center"
        style={{ fontWeight: 'bold', marginBottom: '1rem' }}
      >
        Get Started Right Here
      </Heading>
      <Paragraph align="center" style={{ fontSize: '1.35rem' }}>
        (You may cancel your subscription at any time)
      </Paragraph>

      {/* Payment Options Table */}
      <CardComponent>
        <Heading level={3}>30-Day Access Subscription</Heading>
        <EmbedCodeComponent code={buyButtonCode30} />
        <Heading level={3}>90-Day Access Subscription (16.5% OFF!)</Heading>
        <EmbedCodeComponent code={buyButtonCode90} />
        <Heading level={3}>90-Day Access Subscription (33.2% OFF!)</Heading>
        <EmbedCodeComponent code={buyButtonCode180} />
      </CardComponent>

      {/* Final Note */}
      <div className="jumbotron">
        <Heading level={1} align="center" color="red">
          ALL SALES ARE FINAL!
        </Heading>
        <Paragraph>
          You can cancel your subscription at any time, but there are no refunds
          for the periods you have paid for.
        </Paragraph>
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
    </Main>
  );
}
