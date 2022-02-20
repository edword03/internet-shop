import { ProductsTypeExtended } from '../../types/types';

export enum CartActions {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'DELETE_PRODUCT',
  INCREASE_COUNT = 'INCREASE_COUNT',
  DECREASE_COUNT = 'DECREASE_COUNT',
  CLEAR_CART = 'CLEAR_CART',
}

interface AddProductType {
  type: CartActions.ADD_PRODUCT;
  payload: ProductsTypeExtended;
}

interface DeleteProductType {
  type: CartActions.REMOVE_PRODUCT;
  payload: string;
}

interface ClearCartType {
  type: CartActions.CLEAR_CART;
}

interface IncreaseCountType {
  type: CartActions.INCREASE_COUNT,
  payload: string
}

interface DecreaseCountType {
  type: CartActions.DECREASE_COUNT
  payload: string
}

export type CartActionsType = AddProductType | DeleteProductType | ClearCartType | IncreaseCountType | DecreaseCountType;

export function addPorduct(product: ProductsTypeExtended): AddProductType {
  return {
    type: CartActions.ADD_PRODUCT,
    payload: product,
  };
}

export function deleteProduct(name: string): DeleteProductType {
  return {
    type: CartActions.REMOVE_PRODUCT,
    payload: name,
  };
}

export function clearCart(): ClearCartType {
  return {
    type: CartActions.CLEAR_CART,
  };
}

export function increaseCount(name: string): IncreaseCountType {
  return {
    type: CartActions.INCREASE_COUNT,
    payload: name
  }
}

export function decreaseCount(name: string): DecreaseCountType {
  return {
    type: CartActions.DECREASE_COUNT,
    payload: name
  }
}