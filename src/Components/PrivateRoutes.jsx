import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const PrivateRoutes = ({children}) => {
    const[isAuth]=useContext(AppContext)

    if(!isAuth){
        return <Navigate to="/login"/>
    }
  return (
   children
  )
}

export default PrivateRoutes