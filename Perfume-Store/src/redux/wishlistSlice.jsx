import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlistItems: JSON.parse(localStorage.getItem('wishlistItems')) || [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const exists = state.wishlistItems.find(item => item.id === action.payload.id);
      if (!exists) {
        state.wishlistItems.push(action.payload);
        localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
      }
    },
    removeFromWishlist(state, action) {
      state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload);
      localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
    },
    clearWishlist(state) {
      state.wishlistItems = [];
      localStorage.removeItem('wishlistItems');
    },
  },
});

export const selectWishlistCount = (state) => state.wishlist.wishlistItems.length;
export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
