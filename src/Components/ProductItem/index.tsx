import React from 'react';
import { useDispatch, useSelector } from '../../services/hooks';

import styles from './ProductItem.module.css';
import trashIcon from '../../assets/svg/garbage.svg';
import {
  addPorduct,
  decreaseCount,
  deleteProduct,
  increaseCount,
} from '../../services/сart/cart-action';

interface ProductItemProps {
  name: string;
  image: string;
  price: number;
  isCart?: boolean;
}

export const ProductItem: React.FC<ProductItemProps> = ({ name, price, image, isCart }) => {
  const { cartList } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const currentProduct = cartList.find(item => item.name === name);

  const count = currentProduct ? currentProduct.count : 1;

  const increaseCountToggle = () => {
    dispatch(increaseCount(name));
  };

  const decreaseCountToggle = () => {
    dispatch(decreaseCount(name));
  };

  const onAddToCart = () => {
    dispatch(addPorduct({ name, price, image, count }));
  };

  const onDelete = () => {
    dispatch(deleteProduct(name));
  };

  return (
    <li className={styles.productBlock}>
      <div>
        <img
          className={styles.logo}
          src={`https://murmuring-tor-81614.herokuapp.com/${image}`}
          alt="logo"
        />
      </div>
      <p>{name}</p>
      {isCart && (
        <div className={styles.amountBox}>
          <button onClick={increaseCountToggle} className={styles.amountBtn}>
            +
          </button>
          <span className={styles.productCount}>{count}</span>
          <button onClick={decreaseCountToggle} className={styles.amountBtn} disabled={count === 1}>
            -
          </button>
        </div>
      )}
      {!isCart && <p className={styles.price}>{`$${price}`}</p>}
      {isCart && <p className={styles.price}>{'$' + (price * count).toFixed(2)}</p>}
      {!isCart && (
        <button className={styles.addButton} onClick={onAddToCart}>
          Добавить в корзину
        </button>
      )}
      {isCart && (
        <button onClick={onDelete}>
          <img src={trashIcon} alt="" />
        </button>
      )}
    </li>
  );
};
