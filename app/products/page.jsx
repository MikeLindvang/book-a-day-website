// app/products/page.js
import Main from '../../components/Main';
import Heading from '../../components/Heading';
import ProductGrid from '../../components/ProductGrid';
import Header from '../../components/Header';

export default function ProductsPage() {
  const products = [
    {
      name: 'Book-A-Day Kindle Short Reads',
      description:
        'Learn how to write and publish Kindle Short Reads quickly using strategies from pulp fiction writers.',
      launchDate: '2016-07-16',
      link: '/products/kindle-short-reads',
    },
    {
      name: 'Mastering Self-Publishing',
      description:
        'A comprehensive guide to self-publishing your own books and reaching a global audience.',
      launchDate: '2023-09-01',
      link: '/products/mastering-self-publishing',
    },
    {
      name: 'Creative Writing Bootcamp',
      description:
        'An intensive program to boost your creativity and improve your writing skills.',
      launchDate: '2023-10-12',
      link: '/products/creative-writing-bootcamp',
    },
    // Add more products as needed
  ];

  // Sort the products array from newest to oldest
  const sortedProducts = products.sort((a, b) => {
    const dateA = new Date(a.launchDate);
    const dateB = new Date(b.launchDate);
    return dateB - dateA; // Descending order
  });

  return (
    <>
      <Header />
      <Main>
        <Heading level={1} color="primary">
          Our Products
        </Heading>
        <ProductGrid products={sortedProducts} />
      </Main>
    </>
  );
}
