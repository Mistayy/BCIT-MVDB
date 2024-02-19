import { createSlice } from '@reduxjs/toolkit';
import { appStorageName } from '../../globals/globals';

function getFavsFromLocalStorage() {
  const favs = localStorage.getItem(appStorageName);
  if (favs !== null) {
    return {
      items: JSON.parse(favs)
    };
  }
  return {//first time
    items: []
  };
}

const favsFromLocalStorage = getFavsFromLocalStorage();

const initialState = {
  items: favsFromLocalStorage.items
};

export const favsSlice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    addFav: (state, action) => {
      const newFavs = [...state.items, action.payload];
      localStorage.setItem(appStorageName, JSON.stringify(newFavs));
      state.items = newFavs;
    },
    deleteFav: (state, action) => {
      const itemsCopy = state.items.filter(item => item !== action.payload);
      localStorage.setItem(appStorageName, JSON.stringify(itemsCopy));
      state.items = itemsCopy;
    }
  },
});

export const { addFav, deleteFav } = favsSlice.actions;

export default favsSlice.reducer;