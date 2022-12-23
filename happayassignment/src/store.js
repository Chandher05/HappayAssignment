import { computed, createStore, action, persist } from "easy-peasy";

import data from './assets/data.json'



const store = createStore(
  persist({
    data: data,
    cart: {},
    total: computed((state) => {
      const values = Object.values(state.cart);

      const sum = values.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);

      return sum
    }),
    addToCart: action((state, payload) => {
      state.cart[payload.id] = payload.count
    }),
  }));

export default store;