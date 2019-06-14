import React from "react";

import styles from "./Product.module.css";

const BasketProduct = ({ id,name, image, amount }) => (
  <div className={styles.Product}>
    <img className={styles.Image} src={image} alt={name} />
    <p className={styles.Price}>${amount}</p>
    <h3>{name}</h3>

    <button onClick={()=>console.log(id)}>Remove from Cart</button>
  </div>
);

export default BasketProduct;