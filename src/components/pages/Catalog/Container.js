import React from 'react'
import { connect } from 'react-redux'
import productAction from './actions/productAction'
import ProductsData from '../../../data/ProductsData'
import Catalog from '.'

class CatalogContainer extends React.Component {
  componentDidMount () {
    this.props.onProduct(ProductsData)
  }

  render () {
    return (
      <Catalog {...this.props} />
    )
  }
}

const mapStateToProps = ({ catalog }) => {
  return {
    products: catalog.products
  }
}

const mapDispatchToProps = (dispatch) => ({
  onProduct: (params) => dispatch(productAction(params))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogContainer)
