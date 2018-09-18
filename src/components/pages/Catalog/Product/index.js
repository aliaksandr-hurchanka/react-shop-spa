import React from 'react'
import ProductsData from '../data/ProductsData.js'

const Product = ({ match }) => {
  const product = ProductsData.find(({ id }) => +id === +match.params.productId)
  return (
    <ul>
      <li>{product.title}</li>
      <li>{product.description}</li>
      <li>Price {product.price}$</li>
    </ul>
  )
}

export default Product
