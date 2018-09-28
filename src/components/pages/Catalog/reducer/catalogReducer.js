const initialState = {
  products: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      return { ...state, products: action.payload.products }
    case 'GET_PRODUCTS_UPDATE':
      return console.log('Update')
    case 'GET_PRODUCTS_ERROR':
      return console.error('Error')
    default:
      return state
  }
}
