const getProductsData = (products) => {
  return {
    type: 'GET_PRODUCTS_SUCCESS',
    payload: {
      products
    }
  }
}

export default getProductsData
