import Main from '../components/Main';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import CardComponent from '../components/CardComponent';

export default function HomePage() {
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
            Welcome to Book-A-Day
          </Heading>
          <Paragraph align="center">
            Your ultimate guide to creating, publishing, and profiting from your
            own books, all within a day or less!
          </Paragraph>
          <Button
            label="Start Your Journey"
            href="/get-started"
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

        {/* Introduction/Benefits Section */}
        <section style={{ padding: '40px 20px' }}>
          <Heading level={2} color="secondary">
            Why Choose Book-A-Day?
          </Heading>
          <Paragraph align="justify">
            At Book-A-Day, we make self-publishing fast, easy, and affordable.
            Whether you're a first-time author or a seasoned writer, our mission
            is to help you bring your books to market quickly—without
            sacrificing quality.
          </Paragraph>
          <Paragraph align="justify">
            With our tools and training, you can write, publish, and start
            earning from your own books in just 24 hours. Plus, explore the most
            efficient publishing products that we love and personally recommend.
          </Paragraph>
        </section>

        {/* Separation line */}
        <hr
          style={{
            margin: '40px 0',
            border: 'none',
            borderTop: '2px solid #ddd',
          }}
        />

        {/* Core Offers Section */}
        <section style={{ padding: '40px 20px', backgroundColor: '#ffffff' }}>
          <Heading level={2} color="primary">
            Explore Our Top Products
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
                Rapid Nonfiction Formula
              </Heading>
              <Paragraph>
                Learn how to create and publish non-fiction books quickly.
                Perfect for anyone looking to share their expertise.
              </Paragraph>
              <Button
                label="Learn More"
                href="/products/rapid-nonfiction"
                variant="secondary"
              />
            </CardComponent>
            <CardComponent variant="shadow">
              <Heading level={3} color="primary">
                Book-A-Day 11-Page Payday
              </Heading>
              <Paragraph>
                A quick and easy guide for creating short, impactful books that
                readers love and that generate steady income.
              </Paragraph>
              <Button
                label="Get Started"
                href="/products/11-page-payday"
                variant="secondary"
              />
            </CardComponent>
            <CardComponent variant="shadow">
              <Heading level={3} color="primary">
                Book-A-Day Instant Outline
              </Heading>
              <Paragraph>
                Outlining made simple. Discover the secrets to rapid nonfiction
                writing through effective outlining methods.
              </Paragraph>
              <Button
                label="Find Out More"
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

        {/* Final CTA Section */}
        <section
          style={{
            padding: '40px 20px',
            textAlign: 'center',
            backgroundColor: '#f8f9fa',
          }}
        >
          <Heading level={2} color="accent">
            Ready to Publish Your Book?
          </Heading>
          <Paragraph align="center">
            Take the leap and join hundreds of other authors who have used
            Book-A-Day to turn their dreams into reality. Get started today!
          </Paragraph>
          <Button
            label="Get Started Now"
            href="/get-started"
            variant="primary"
            style={{ marginTop: '20px' }}
          />
        </section>
      </Main>
    </>
  );
}
