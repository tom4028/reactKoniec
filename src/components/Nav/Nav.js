import React from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

import Container from "components/Container/Container";

const Nav = () => (
  <nav className={styles.Navbar}>
    <Container>
      <ul className={styles.Nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </Container>
  </nav>
);

export default Nav;
