import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Catalog = (props) => {
  return (
    <div>
      <h2 >Catalog</h2>
      <ul>
        {props.products.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/catalog/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

Catalog.propTypes = {
  products: PropTypes.array.isRequired
}

export default Catalog
