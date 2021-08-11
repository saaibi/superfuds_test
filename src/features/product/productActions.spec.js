import productReducer, { getAllProducts, addCart, deleteCart } from './productActions';

describe('product reducer', () => {
  const initialState = {
    products: [],
    shopCart: [],
    status: 'complete',
  };

  it('should return the initial state', () => {
    expect(productReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle getAllProducts', () => {
    const actual = productReducer(initialState, getAllProducts());

    expect(actual.products.length).toEqual(0);
  });

  it('should handle addCart', () => {
    const product = {
      "id": 446,
      "title": "Té Verde Pureza"
    }
    const actual = productReducer(initialState, addCart(product));
    expect(actual.shopCart.length).toEqual(0);
  });

  it('should handle deleteCart', () => {
    const actual = productReducer(initialState, deleteCart());
    expect(actual.shopCart.length).toEqual(0);
  });

});
