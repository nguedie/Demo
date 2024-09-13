import React from 'react'

const BodyLayout = ({children}) => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle-x w-75 " style={{ marginLeft: "120px" }}>{children}</div>
  )
}

export default BodyLayout