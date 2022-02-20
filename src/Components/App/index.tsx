import React, { useState, useEffect, useMemo } from 'react';
import styles from './App.module.css';
import { ProductsPage } from '../ProductsPage';
import { Cart } from '../Cart';
import { fetchingData } from '../../api';
import { ProductsType } from '../../types/types';
import { useSelector } from '../../services/hooks';

interface AppProps {
  dealers?: Array<string>;
}

export const App: React.FC<AppProps> = ({ dealers }) => {
  const [currentPage, setCurrentPage] = useState('products');
  const [products, setProducts] = useState<Array<ProductsType>>([]);
  const [loading, setLoading] = useState(true);

  const { cartList } = useSelector(state => state.cart);

  const totalAmount = useMemo(
    () => cartList.reduce((acc, val) => (acc += val.count), 0),
    [cartList],
  );

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchingData<Array<ProductsType>>(
        `${process.env.REACT_APP_URL_API}${dealers ? '?dealers=' + dealers.slice() : ''}`,
      );
      setProducts(fetchedProducts);
      setLoading(false);
    };

    getProducts();
  }, [dealers]);

  const setProductsPage = () => {
    setCurrentPage('products');
  };

  const setCartPage = () => {
    setCurrentPage('cart');
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <span
            onClick={setProductsPage}
            className={`${currentPage === 'products' ? styles.activeLink : styles.link}`}>
            Список товаров
          </span>
          <span
            onClick={setCartPage}
            className={`${currentPage === 'cart' ? styles.activeLink : styles.link}`}>
            Корзина {totalAmount > 0 && ` | ${totalAmount}`}
          </span>
        </nav>
      </header>
      <main>
        {currentPage === 'products' && <ProductsPage products={products} loading={loading} />}
        {currentPage === 'cart' && <Cart />}
      </main>
    </div>
  );
};
