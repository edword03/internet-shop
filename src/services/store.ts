import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';

const saveToLocalStorage = (state: any) => {
  try {
    localStorage.setItem('store', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('store');
    return stateStr ? JSON.parse(stateStr) : {};
  } catch (e) {
    console.error(e);
    return {};
  }
};

const persistedStore = loadFromLocalStorage();

export const store = createStore(rootReducer, persistedStore, composeWithDevTools());

store.subscribe(() => saveToLocalStorage(store.getState()));
