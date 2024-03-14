import React from 'react'

function Input({id, type, className, placeholder, name, value}) {
  return (
    <input id={id} type={type} name={name} value={value} className={className} placeholder={placeholder} />
  )
}

export default Input