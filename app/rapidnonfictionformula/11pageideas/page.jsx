import Main from '../../../components/Main';
import Heading from '../../../components/Heading';
import Paragraph from '../../../components/Paragraph';
import List from '../../../components/List';
import CardComponent from '../../../components/CardComponent';
import Table from '../../../components/Table';
import EmbedCodeComponent from '../../../components/EmbedCodeComponent';
import Image from 'next/image';

export default function BookADayIdeasPage() {
  return (
    <Main>
      {/* Main Heading */}
      <Heading level={1} color="primary" align="center">
        Thank You For Your Purchase!
      </Heading>

      {/* Main Content */}
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
        I'd hate to see this being something standing in your way... So, I'd
        very much like to{' '}
        <strong>help you get past that potential obstacle.</strong>
      </Paragraph>
      <Paragraph>
        In "Book-A-Day 11-Page Ideas" I will give you 30 new ideas every 30
        days.{' '}
        <strong>
          With this, you've got no excuses for not publishing books!
        </strong>
      </Paragraph>
      <Paragraph>
        There are 3 different payment options so you can decide which one is
        most suitable for you.
      </Paragraph>

      {/* Membership Details Card */}
      <CardComponent variant="outline">
        <Heading level={3} color="primary" align="center">
          Here's what's included in your "Book-A-Day 11-Page Ideas" membership:
        </Heading>
        <List
          items={[
            'Every 30 days you get access to 30 new ideas for short how-to books. With 3 different payment options: 30 days subscription, 90 days subscription, 180 days subscription.',
            'Use every idea and publish a new book every single day.',
            'Pick the ones you prefer and publish at your leisure.',
            'All ideas are in-demand topics!',
          ]}
          ordered={false}
        />
      </CardComponent>

      {/* Start Now Heading */}
      <Heading level={4} color="info" align="center" bold>
        Get Started Right Here
      </Heading>
      <Paragraph align="center" style={{ fontSize: '1.35rem' }}>
        (You may cancel your subscription at any time)
      </Paragraph>

      {/* Payment Options Table */}
      <Table
        headers={['Option', '', 'Discount']}
        rows={[
          {
            cells: [
              '30 Days Access',
              <EmbedCodeComponent
                code={`
                  <a href="https://warriorplus.com/o2/buy/ss1gdj/nx2mp4/dbqhyc">
                    <img src="https://warriorplus.com/o2/btn/cn200011000/ss1gdj/nx2mp4/318115" alt="Buy Now">
                  </a>
                `}
              />,
              '',
            ],
          },
          {
            cells: [
              '90 Days Access',
              <EmbedCodeComponent
                code={`
                  <a href="https://warriorplus.com/o2/buy/ss1gdj/nx2mp4/pfy686">
                    <img src="https://warriorplus.com/o2/btn/cn200011000/ss1gdj/nx2mp4/318117" alt="Buy Now">
                  </a>
                `}
              />,
              <span className="attention" style={{ fontSize: '1.1rem' }}>
                16.5%
              </span>,
            ],
          },
          {
            cells: [
              '180 Days Access',
              <EmbedCodeComponent
                code={`
                  <a href="https://warriorplus.com/o2/buy/ss1gdj/nx2mp4/c73h3z">
                    <img src="https://warriorplus.com/o2/btn/cn200011000/ss1gdj/nx2mp4/318118" alt="Buy Now">
                  </a>
                `}
              />,
              <span className="attention" style={{ fontSize: '1.3rem' }}>
                33.2%
              </span>,
            ],
          },
        ]}
      />

      {/* All Sales Are Final Card */}
      <CardComponent variant="outline">
        <Heading level={1} color="red" align="center" bold>
          All Sales Are Final
        </Heading>
        <Paragraph color="black" align="center">
          You can cancel your subscription at any time, but there are no refunds
          for the periods you have paid for.
        </Paragraph>
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
        <a href="https://warriorplus.com/o/nothanks/nx2mp4">No Thanks</a>
      </Paragraph>

      {/* Disclaimer Script */}
      <EmbedCodeComponent
        code={`
          <script type="text/javascript" src="https://warriorplus.com/o2/disclaimer/ss1gdj" defer></script>
          <div class="wplus_spdisclaimer"></div>
        `}
      />
    </Main>
  );
}
