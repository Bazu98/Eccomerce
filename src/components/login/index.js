import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div>
        <LoginForm />
        <Link to='/register'>Don't have an account ? </Link>
    </div>
  )
}

export default Login