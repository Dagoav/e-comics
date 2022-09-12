import { clear } from '@testing-library/user-event/dist/clear'
import React from 'react'

import { useNavigate } from 'react-router-dom'

export default function Logout() {

const navigate = useNavigate()


    const logout = ()=> {
      localStorage.clear()
      navigate('/')
    } 


  return (
    <div>
        <button onClick={() => logout()}>Logout</button>
    </div>
  )
}
