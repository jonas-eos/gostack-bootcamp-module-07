import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/action';

import api from '../../services/api';

import { ProductList } from './styles';

// class Home extends Component {
export default function Home() {
  const [products, setProducts] = useState([]);

  /** get amount from the global state cart */
  const amount = useSelector(state =>
    state.cart.reduce((__amount, product) => {
      const newAmount = __amount;

      newAmount[product.id] = product.amount;

      return newAmount;
    }, {})
  );

  /** enable get redux actions */
  const dispatch = useDispatch();

  /** Similar to componentDidMount */
  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const productsData = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(productsData);
    }

    loadProducts();
  }, []);

  /**
   * This event send a redux action with type named ADD_TO_CART
   * The cart reducer are setted on modules/cart/
   * This action send the product stat object with the redux action
   * @function
   * @name handleAddToCart
   * @param {Number} productId
   */
  function handleAddToCart(productId) {
    dispatch(CartActions.addToCartRequest(productId));
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <picture>
            <img src={product.image} alt={product.title} />
          </picture>
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button type="button" onClick={() => handleAddToCart(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />{' '}
              {amount[product.id] || 0}
            </div>
            <span>Add to cart</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
