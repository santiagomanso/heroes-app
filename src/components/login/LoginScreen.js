import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {
  const navigate = useNavigate()

  const handlerLogin = () => {
    navigate('/marvel', {
      replace: true,
    })
  }

  return (
    <div className='container mt-4'>
      <h1>Login</h1>
      <hr />
      <button className='btn btn-secondary' onClick={handlerLogin}>
        Login
      </button>
    </div>
  )
}

export default LoginScreen
