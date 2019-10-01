import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const tempState = draft;

        const productIndex = draft.findIndex(
          productInCart => productInCart.id === action.product.id
        );

        if (productIndex >= 0) {
          tempState[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const tempState = draft;

        const productIndex = draft.findIndex(
          productInCart => productInCart.id === action.id
        );

        if (productIndex >= 0) {
          tempState.splice(productIndex, 1);
        }
      });

    default:
      return state;
  }
}
