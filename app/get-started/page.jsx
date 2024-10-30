import Main from '../../components/Main';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import CardComponent from '../../components/CardComponent';

export default function GetStartedPage() {
  return (
    <>
      <Header />
      <Main>
        {/* Hero Section */}
        <section
          style={{
            padding: '60px 0',
            textAlign: 'center',
            backgroundColor: '#f8f9fa',
          }}
        >
          <Heading level={1} color="primary">
            Ready to Get Started?
          </Heading>
          <Paragraph align="center">
            Kickstart your publishing journey today! Whether you're a beginner
            or an experienced author, we have the tools to help you publish
            quickly, effectively, and profitably.
          </Paragraph>
          <Button
            label="Browse Products"
            href="/products"
            variant="primary"
            style={{ marginTop: '20px' }}
          />
        </section>

        {/* Separation line */}
        <hr
          style={{
            margin: '40px 0',
            border: 'none',
            borderTop: '2px solid #ddd',
          }}
        />

        {/* How It Works Section */}
        <section style={{ padding: '40px 20px' }}>
          <Heading level={2} color="secondary">
            How Does Book-A-Day Work?
          </Heading>
          <Paragraph align="justify">
            Our unique Book-A-Day system simplifies the self-publishing process
            into actionable steps that you can complete within a day. We offer
            training, templates, and tools that are designed to remove barriers
            and help you quickly bring your books to market.
          </Paragraph>
          <Paragraph align="justify">Here’s how you can get started:</Paragraph>
          <CardComponent variant="shadow">
            <ul
              style={{
                paddingLeft: '20px',
                lineHeight: '1.8em',
              }}
            >
              <li>
                <strong>Step 1:</strong> Choose Your Product - Pick the product
                that aligns with your publishing goal, whether it's outlining,
                creating, or promoting a book.
              </li>
              <li>
                <strong>Step 2:</strong> Follow the Training - Use our
                step-by-step guides to create your book quickly and easily.
              </li>
              <li>
                <strong>Step 3:</strong> Publish and Profit - Launch your book
                to the world and start making an impact—and some income!
              </li>
            </ul>
          </CardComponent>
        </section>

        {/* Separation line */}
        <hr
          style={{
            margin: '40px 0',
            border: 'none',
            borderTop: '2px solid #ddd',
          }}
        />

        {/* Product Recommendations Section */}
        <section style={{ padding: '40px 20px', backgroundColor: '#ffffff' }}>
          <Heading level={2} color="primary">
            Get Started with Our Top Tools
          </Heading>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <CardComponent variant="shadow">
              <Heading level={3} color="primary">
                Book-A-Day 11-Page Payday
              </Heading>
              <Paragraph>
                Quickly create a short, impactful book that readers will love,
                using our proven 11-page framework.
              </Paragraph>
              <Button
                label="Learn More"
                href="/products/11-page-payday"
                variant="secondary"
              />
            </CardComponent>
            <CardComponent variant="shadow">
              <Heading level={3} color="primary">
                Rapid Nonfiction Formula
              </Heading>
              <Paragraph>
                Learn how to write nonfiction books efficiently, turning your
                knowledge into a valuable asset.
              </Paragraph>
              <Button
                label="Find Out More"
                href="/products/rapid-nonfiction"
                variant="secondary"
              />
            </CardComponent>
            <CardComponent variant="shadow">
              <Heading level={3} color="primary">
                Instant Outline Generator
              </Heading>
              <Paragraph>
                Use our outline templates to jumpstart your book planning and
                hit the ground running.
              </Paragraph>
              <Button
                label="Start Outlining"
                href="/products/instant-outline"
                variant="secondary"
              />
            </CardComponent>
          </div>
        </section>

        {/* Separation line */}
        <hr
          style={{
            margin: '40px 0',
            border: 'none',
            borderTop: '2px solid #ddd',
          }}
        />

        {/* Why Get Started Today Section */}
        <section
          style={{
            padding: '40px 20px',
            textAlign: 'center',
            backgroundColor: '#f8f9fa',
          }}
        >
          <Heading level={2} color="accent">
            Why Wait?
          </Heading>
          <Paragraph align="center">
            Every day spent waiting is another day without your book reaching
            its potential audience. Get started now, and see how easy it can be
            to make your mark as an author.
          </Paragraph>
          <Button
            label="Start Your Publishing Journey"
            href="/products"
            variant="primary"
            style={{ marginTop: '20px' }}
          />
        </section>
      </Main>
    </>
  );
}
