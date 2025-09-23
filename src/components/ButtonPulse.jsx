import React from 'react'

const ButtonPulse = ({ children, onClick }) => {
  return (
     <div className="text-box">
        <button className="btn btn-white btn-animated" onClick={onClick}>{children}</button>
    </div>
  )
}

export default ButtonPulse