import React from "react";
import ReactDOM from "react-dom";

import ProductsListComponent from './components/ProductsList/ProductsList.component';

// data
import { products } from '../data/products';

const rootElement = document.getElementById("root");
ReactDOM.render(<ProductsListComponent products={products} />, rootElement);
