// app/layout.js
import '../styles/globals.css';
import '../lib/icons'; // Import the icon library
import Footer from '../components/Footer';

export const metadata = {
  title: 'My App',
  description: 'A modern Next.js app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Import Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
