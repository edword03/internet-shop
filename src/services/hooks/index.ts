import {
  useSelector as selectorHook,
  useDispatch as dispatchHook,
  TypedUseSelectorHook,
} from 'react-redux';
import { store } from '../store';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch>();
