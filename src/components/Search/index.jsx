import React from 'react'
import PropTypes from 'prop-types'

const Search = props => {
  return (
    <form action={props.action} method='get'>
      <label>
        {props.label}
        <input name='search' type='search' placeholder='Search...' />
      </label>
      <button type='submit'>{props.buttonContent}</button>
    </form>
  )
}

Search.propTypes = {
  action: PropTypes.string.isRequired,
  label: PropTypes.string,
  buttonContent: PropTypes.string
}

Search.defaultProps = {
  label: 'Search',
  buttonContent: 'Search'
}

export default Search
