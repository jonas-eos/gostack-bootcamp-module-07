import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/action';

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
  handleAddToCart = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <picture>
              <img src={product.image} alt={product.title} />
            </picture>
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button
              type="button"
              onClick={() => this.handleAddToCart(product.id)}
            >
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    const newAmount = amount;

    newAmount[product.id] = product.amount;

    return newAmount;
  }, {}),
});

/**
 * Convert redux action into components
 */
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
