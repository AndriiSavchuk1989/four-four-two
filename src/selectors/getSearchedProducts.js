import { createSelector } from 'reselect';

const getSearchedProducts = createSelector(
  state => state.products,
  state => state.products.search,
  (products, search) => (
    search ? products.filter(p => p.country.includes(search)) : products
  )
);

export default getSearchedProducts;
