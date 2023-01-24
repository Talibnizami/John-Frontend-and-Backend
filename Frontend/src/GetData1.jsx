import React from 'react'
import { useLocation } from 'react-router-dom'
const GetData1 = () => {
    const location = useLocation()
    console.log(location) 
  return (
    <div>
      <div>Id : {location.state.id}</div>
    </div>
  )
}

export default GetData1
