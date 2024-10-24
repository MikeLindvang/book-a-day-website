// components/ProductGrid.js
'use client';

import PropTypes from 'prop-types';
import styles from './ProductGrid.module.css';
import CardComponent from './CardComponent';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Button from './Button';

export default function ProductGrid({ products }) {
  return (
    <div className={styles.grid}>
      {products.map((product, index) => (
        <CardComponent key={index} variant="productCard">
          <Heading level={3} color="primary">
            {product.name}
          </Heading>
          <Paragraph>{product.description}</Paragraph>
          <Paragraph>
            <strong>Launch Date:</strong> {product.launchDate}
          </Paragraph>
          <Button label="View Product" href={product.link} />
        </CardComponent>
      ))}
    </div>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      launchDate: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
