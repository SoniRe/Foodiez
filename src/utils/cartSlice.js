import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Mutating our state here
      state.items.push(action.payload);
    },
    removeItem: (state, actions) => {
      //Removes the element with the index of actions.payload
      state.items.splice(state.items.indexOf(actions.payload), 1);
    },
    clearCart: (state, actions) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
