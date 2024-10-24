import Header from '../../components/Header';
import Main from '../../components/Main';

export default function ContactPage() {
  return (
    <>
      <Header />
      <Main>
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have a question, feedback, or
          need assistance, feel free to reach out.
        </p>
        <h2>Get in Touch</h2>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@bookaday.com">support@bookaday.com</a>
          </li>
          <li>
            <strong>Phone:</strong>{' '}
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </li>
          <li>
            <strong>Address:</strong> 123 Book Lane, Reading City, Literature
            Country
          </li>
        </ul>
        <h2>Live Chat Support</h2>
        <p>
          For immediate assistance, use our live chat by clicking the chat icon
          in the bottom right corner of the page.
        </p>
        <h2>Business Hours</h2>
        <p>Our support team is available:</p>
        <ul>
          <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday: 10:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
        <h2>Follow Us</h2>
        <p>Stay updated by following us on social media:</p>
        <ul>
          <li>
            <a
              href="https://facebook.com/bookaday"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/bookaday"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/bookaday"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
        <h2>Privacy Policy</h2>
        <p>
          Your privacy is important to us. Please review our{' '}
          <a href="/privacy-policy">Privacy Policy</a> for information on how we
          handle your data.
        </p>
      </Main>
    </>
  );
}
