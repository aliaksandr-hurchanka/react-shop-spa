import React from 'react'
import PropTypes from 'prop-types'

const Search = props => {
  return (
    <form className='search-form' action={props.action} method='get'>
      <label className='search-form__label'>
        {props.label}
        <input className='search-form__field' name='search' type='search' placeholder='Search...' />
      </label>
      <button className='search-form__button' type='submit'>{props.buttonContent}</button>
    </form>
  )
}

Search.propTypes = {
  action: PropTypes.string.isRequired,
  label: PropTypes.string,
  buttonContent: PropTypes.string
}

export default Search
