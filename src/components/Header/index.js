import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <picture>
        <Link to="/">
          <img src={logo} alt="EOS-Commerce" />
        </Link>
      </picture>
      <Cart to="/cart">
        <section>
          <strong>My cart</strong>
          <span>3 itens</span>
        </section>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
