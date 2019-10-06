import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/action';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  /** Get total value */
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  /** Get cart property on in global cart state */
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  const increment = product => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  };

  const decrement = product => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  };

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th>PICTURE</th>
            <th>PRODUCT</th>
            <th>QTY</th>
            <th>SUBTOTAL</th>
            <th>BUTTON</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <picture>
                  <img src={product.image} alt="Macbook Pro 13" />
                </picture>
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Close order</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
