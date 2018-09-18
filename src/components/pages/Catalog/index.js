import React from 'react'
import { Link, Route } from 'react-router-dom'
import ProductsData from './data/ProductsData.js'
import Product from './Product'

const Catalog = () => {
  return (
    <div>
      <div>Catalog</div>
      <ul>
        {ProductsData.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/catalog/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Route path={`/catalog/:productId`} component={Product} />
    </div>
  )
}

export default Catalog
