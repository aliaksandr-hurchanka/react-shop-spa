import React from 'react'
import PropTypes from 'prop-types'

const Title = props => {
  return (
    <h1 className='page-title'>
      {props.content}
    </h1>
  )
}

Title.propTypes = {
  content: PropTypes.string
}

export default Title
