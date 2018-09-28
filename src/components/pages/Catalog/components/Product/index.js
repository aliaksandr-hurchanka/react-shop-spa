import React from 'react'
import { Link } from 'react-router-dom'
import Error from '../../../Error'

const Product = (props) => {
  const product = props.products.find(({ id }) => (
    +id === +props.match.params.productId
  ))

  if (!product) {
    return <Error />
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <ul>
        <li>{product.description}</li>
        <li>Price {product.price}$</li>
      </ul>
      <Link to='/catalog'>Back</Link>
    </div>
  )
}

export default Product
