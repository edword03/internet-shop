import { ProductsTypeExtended } from '../../types/types';
import { CartActionsType, CartActions } from './cart-action';

interface InitialStateType {
  cartList: Array<ProductsTypeExtended>;
}

const initialState: InitialStateType = {
  cartList: [],
};

export function cartReducer(state = initialState, action: CartActionsType): InitialStateType {
  switch (action.type) {
    case CartActions.ADD_PRODUCT: {
      const isHave = state.cartList.find(product => product.name === action.payload.name);

      if (isHave) {
        return {
          ...state,
          cartList: state.cartList.map(product =>
            product.name === action.payload.name ? { ...product, count: product.count + 1 } : product,
          ),
        };
      }

      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };
    }
    case CartActions.REMOVE_PRODUCT:
      return {
        ...state,
        cartList: [...state.cartList].filter(product => product.name !== action.payload),
      };

    case CartActions.CLEAR_CART:
      return { ...state, cartList: [] };

    case CartActions.INCREASE_COUNT: {
      return {
        ...state,
        cartList: state.cartList.map(product =>
          product.name === action.payload ? { ...product, count: product.count + 1 } : product,
        ),
      };
    }

    case CartActions.DECREASE_COUNT:
      return {
        ...state,
        cartList: state.cartList.map(product =>
          product.name === action.payload && product.count > 1 ? { ...product, count: product.count - 1 } : product,
        ),
      };
      
    default:
      return state;
  }
}
