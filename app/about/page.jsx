import Main from '../../components/Main'; // Assuming you have a Main component
import Header from '../../components/Header';
import Heading from '../../components/Heading';
export default function AboutPage() {
  return (
    <>
      <Header />
      <Main>
        <Heading level="1">About Book-A-Day</Heading>
        <p>
          Welcome to <strong>Book-A-Day</strong>, your ultimate resource for
          aspiring authors! We believe in the power of accessible and efficient
          training that empowers individuals to publish their own books—ideally,
          within a day or less.
        </p>
        <Heading level="2">Our Mission</Heading>
        <p>
          Our mission is simple: to make the dream of publishing your own book
          both <strong>affordable AND achievable</strong>. Whether you're an
          experienced writer or just starting out, we provide the guidance,
          tools, and support needed to bring your book to market quickly and
          confidently.
        </p>
        <Heading level="2">What We Offer</Heading>
        <ul>
          <li>
            <strong>Affordable Training:</strong> Step-by-step training to guide
            you through writing, formatting, and publishing your book—all in a
            day or less.
          </li>
          <li>
            <strong>Curated Product Recommendations: </strong> Carefully
            selected publishing tools and courses that we believe can enhance
            your self-publishing journey.
          </li>
          <li>
            <strong>Proven Shortcuts & Strategies:</strong> Techniques and
            frameworks to make book publishing as efficient as possible.
          </li>
        </ul>
        <Heading level="2">Our Story</Heading>
        <p>
          Founded in 2016, Book-A-Day was born from a passion for making book
          publishing both simple and accessible. We understand that many
          aspiring authors are held back by the complexity and cost of
          traditional publishing. That’s why we are committed to breaking those
          barriers by offering affordable, practical training that helps you{' '}
          <strong>
            publish your book quickly and without breaking the bank.
          </strong>
        </p>
        <Heading level="2">Join Us</Heading>
        <p>
          Take the leap and become a published author. With our training, proven
          strategies, and curated resources, publishing your book is a goal that
          can be <strong>achieved today.</strong> Let us guide you on your
          journey to becoming a successful self-publisher.
        </p>
      </Main>
    </>
  );
}
