import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import macbookpro13 from '../../assets/images/macbookpro13.jpg';

export default function Home() {
  return (
    <ProductList>
      <li>
        <picture>
          <img src={macbookpro13} alt="Macbook Pro 13" />
        </picture>
        <strong>Macbook Pro 13 - best to developer</strong>
        <span>R$11.000,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <picture>
          <img src={macbookpro13} alt="Macbook Pro 13" />
        </picture>
        <strong>Macbook Pro 13 - best to developer</strong>
        <span>R$11.000,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <picture>
          <img src={macbookpro13} alt="Macbook Pro 13" />
        </picture>
        <strong>Macbook Pro 13 - best to developer</strong>
        <span>R$11.000,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <picture>
          <img src={macbookpro13} alt="Macbook Pro 13" />
        </picture>
        <strong>Macbook Pro 13 - best to developer</strong>
        <span>R$11.000,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <picture>
          <img src={macbookpro13} alt="Macbook Pro 13" />
        </picture>
        <strong>Macbook Pro 13 - best to developer</strong>
        <span>R$11.000,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <picture>
          <img src={macbookpro13} alt="Macbook Pro 13" />
        </picture>
        <strong>Macbook Pro 13 - best to developer</strong>
        <span>R$11.000,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
    </ProductList>
  );
}
