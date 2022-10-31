import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <div>
        <RegisterForm />
        <Link to='/login'>Already have account bro ? </Link>
    </div>
  )
}

export default Register