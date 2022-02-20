import React from 'react';
import styles from './ProductsPage.module.css';
import { ProductItem } from '../ProductItem';
import { v4 } from 'uuid';
import { ProductsType } from '../../types/types';

interface ProductsPageProps {
  products: Array<ProductsType>;
  loading: boolean
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ products, loading }) => {
  return (
    <>
      <h2 className={styles.title}>Список товаров</h2>
      {loading && <div className={styles.loader}>Загрузка товаров...</div>}
      <ul>{products && products.map(product => <ProductItem key={v4()} {...product} />)}</ul>
    </>
  );
};
