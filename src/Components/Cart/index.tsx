import React, { useMemo } from 'react';
import styles from './Cart.module.css';
import { v4 } from 'uuid';
import { ProductItem } from '../ProductItem';
import { useSelector, useDispatch } from '../../services/hooks';
import { clearCart } from '../../services/сart/cart-action';

export const Cart = () => {
  const { cartList } = useSelector(state => state.cart);

  const dispatch = useDispatch();
  const totalPrice = useMemo(
    () => cartList.reduce((acc, product) => product.price * product.count + acc, 0),
    [cartList],
  );

  const onResetCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <h2 className={styles.title}>Корзина</h2>
      <ul>
        {cartList.length > 0 ? (
          cartList.map(product => <ProductItem key={v4()} {...product} isCart />)
        ) : (
          <p>В корзине нет товаров</p>
        )}
      </ul>

      {cartList.length > 0 && (
        <div>
          <span className={styles.total}>Итого: ${totalPrice.toFixed(2)}</span>
          <button className={styles.resetButton} onClick={onResetCart}>
            Очистить корзину
          </button>
        </div>
      )}
    </>
  );
};
