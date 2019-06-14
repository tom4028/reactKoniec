import React from "react";

import styles from "./ProductsList.module.css";

import BasketProduct from "./BasketProduct";

const BasketProductList = ({ products }) => (
  
  <div className={styles.Products}>
    
    {products.map(product => (
      <BasketProduct key={product.id} {...product} />
    ))}
  </div>
);

export default BasketProductList;
