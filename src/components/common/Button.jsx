import React from 'react'

function Button({className,isLoading=false,type='button',children}) {
  return (
    <button type={type} className={`${className} flex items-center justify-center gap-2`}>
      {children}
      {isLoading&&<div className=' border-l-2 border-r-2 animate-spin rounded-full w-4 h-4'></div>}
    </button>
  )
}

export default Button
