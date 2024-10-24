import Main from '../../components/Main'; // Assuming you have a Main component
import Header from '../../components/Header';
export default function AboutPage() {
  return (
    <>
      <Header />
      <Main>
        <h1>About Book-A-Day</h1>
        <p>
          Welcome to <strong>Book-A-Day</strong>, your daily source of literary
          inspiration! We believe in the transformative power of reading and
          strive to connect readers with books that enrich their lives.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to ignite a passion for reading by offering a new book
          recommendation every single day. Whether you're a voracious reader or
          just starting your literary journey, we aim to provide selections that
          cater to all tastes and preferences.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li>
            <strong>Daily Recommendations:</strong> Handpicked books across
            various genres.
          </li>
          <li>
            <strong>In-Depth Reviews:</strong> Insightful reviews to help you
            decide your next read.
          </li>
          <li>
            <strong>Community Engagement:</strong> A platform to share your
            thoughts and connect with fellow readers.
          </li>
        </ul>
        <h2>Our Story</h2>
        <p>
          Founded in 2023, Book-A-Day was born out of a love for literature and
          a desire to make book discovery effortless and enjoyable. We are a
          team of avid readers and writers dedicated to sharing the joy of
          reading with the world.
        </p>
        <h2>Join Us</h2>
        <p>
          Become a part of our growing community and embark on a literary
          adventure with us. Follow our daily updates and never miss a great
          book!
        </p>
      </Main>
    </>
  );
}
