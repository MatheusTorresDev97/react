import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children, width}) => {
  return (
    <button style={{width: `${width}px`, height:`${width/3}px`}}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    margin: '10px'
}

Button.PropTypes = {
    width: PropTypes.number.isRequired
}

export default Button
