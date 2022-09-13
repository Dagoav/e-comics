import { clear } from '@testing-library/user-event/dist/clear'
import React from 'react'
import { useAuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export default function Logout() {
  const {logout} = useAuthContext();
  const navigate = useNavigate()


    // const Logout = ()=> {
    //   localStorage.clear()
    //   navigate('/')
    // } 

    useEffect(() => {
      localStorage.clear()
      logout() 
      
    })
    return null  
}
