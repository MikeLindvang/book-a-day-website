import '../styles/globals.css';
import '../lib/icons';
import AutoResizeTextarea from '../components/AutoResizeTextarea';

export default function App({ Component, pageProps }) {
  return (
    <>
      <AutoResizeTextarea />
      <Component {...pageProps} />
    </>
  );
}