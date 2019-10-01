import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import { ProductList } from './styles';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  /**
   * This event send a redux action with type named ADD_TO_CART
   * The cart reducer are setted on modules/cart/
   * This action send the product stat object with the redux action
   * @function
   * @name handleAddToCart
   * @param {object} product
   */
  handleAddToCart = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <picture>
              <img src={product.image} alt={product.title} />
            </picture>
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button type="button" onClick={() => this.handleAddToCart(product)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> 3
              </div>
              <span>Add to cart</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default connect()(Home);
