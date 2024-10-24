import Main from '../components/Main'; // Assuming you have a Main component
import Header from '../components/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <Main>
        {/* Your main content goes here */}
        <h1>Welcome to MySite</h1>
        <p>This is the home page content.</p>
      </Main>
    </>
  );
}
