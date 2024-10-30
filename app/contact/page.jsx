import Header from '../../components/Header';
import Main from '../../components/Main';
import Paragraph from '../../components/Paragraph';
import Heading from '../../components/Heading';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Header />
      <Main>
        <Heading level={1}>Contact Us</Heading>

        <Paragraph>
          We'd love to hear from you! Whether you have a question, feedback, or
          need assistance, feel free to reach out.
        </Paragraph>

        <Heading level={2}>Get in Touch</Heading>
        <ul>
          <li>
            <strong>Need Support:</strong>{' '}
            <Link href="https://netscribepro.ladesk.com/" target="_blank">
              Get Live Support Here
            </Link>
          </li>
          <li>
            <strong>Phone:</strong>{' '}
            <Link href="tel:+452995897">+45 5299 5897</Link>
          </li>
          <li>
            <strong>Address:</strong> Dragebakken 96, 5250 Odense SV, Denmark
          </li>
        </ul>

        <Heading level={2}>Business Hours (EST)</Heading>
        <Paragraph>
          Our support team is available during the following hours (converted to
          Eastern Standard Time):
        </Paragraph>
        <ul>
          <li>Monday to Friday: 3:00 AM - 12:00 PM (EST)</li>
          <li>Saturday: 4:00 AM - 10:00 AM (EST)</li>
          <li>Sunday: Closed</li>
        </ul>

        <Heading level={2}>Privacy Policy</Heading>
        <Paragraph>
          Your privacy is important to us. Please review our{' '}
          <Link href="/privacy-policy">Privacy Policy</Link> for information on
          how we handle your data.
        </Paragraph>

        <Paragraph>
          <strong>Note:</strong> If you need further assistance, please use our
          live support link for a quick response.
        </Paragraph>
      </Main>
    </>
  );
}
