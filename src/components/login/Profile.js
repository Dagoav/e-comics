import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { creategame } from '../../redux/actions'



export default function Profile() {

  const { user, isAuthenticated, isLoading } = useAuth0()
  const dispatch = useDispatch()
  console.log(useAuth0)

  useEffect(() => {
    console.log(user);
    dispatch(creategame(user))
  },)



  if (isLoading) {
    return <div>Loading...</div>
  }

  return (


    isAuthenticated && (
      <div>Profile
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>Email:{user.email}</p>
      </div>
    )
  )
}