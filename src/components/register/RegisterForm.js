import { FormControl, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import useForm from '../../app/hooks/useForm'
import { userContext } from '../../context/userContext'

const generateRegisterFormValues = () => {
    return {
        firstName : {
            value: "",
            required: true,
            error:"",
            validateInput : (name) => 
            name.length > 3 ? null : "Enter at least 3 character"
        },
        lastName : {
            value: "",
            required: true,
            error:"",
            validateInput : (lastName) => 
            lastName.length > 3 ? null : "Enter at least 1 character"
        },
        email : {
            value: "",
            required: true,
            error:"",
            validateInput : (email) => 
            email.includes("gmail.com") ? null : "Enter valid Email"
        },
        password : {
            value: "",
            required: true,
            error:"",
            validateInput : (password) => 
            password.length > 5 ? null : "Enter at least 5  character for password"
        },
    }
}

const RegisterForm = () => {
    const { registerOrLogin } = useContext(userContext)
    const { formValues, onInputChange, checkButtonDisable } = useForm({defaultFormValues : generateRegisterFormValues(),})

const [isButtonDisabled,setIsButtonDisabled] = useState(true)
useEffect(() => {
    setIsButtonDisabled(checkButtonDisable(formValues))
},[formValues])

const registerUser =(e) => {
    e.preventDefault();
    const firstName = formValues.firstName.value;
    const lastName = formValues.lastName.value
    const email = formValues.email.value;
    const password = formValues.password.value

    registerOrLogin({ firstName, lastName, email, password}, false)
}
  return (
    <FormControl fullWidth >
        <TextField 
        variant='outlined'
        name='firstName'
        label = 'firstName'
        value={formValues.firstName.value}
        onChange={onInputChange}
        error={!!formValues.firstName.error}
        helperText={formValues.firstName.error}
        margin={'dense'}
        />
        <TextField 
        variant='outlined'
        name='lastName'
        label = 'lastName'
        value={formValues.lastName.value}
        onChange={onInputChange}
        error={!!formValues.lastName.error}
        helperText={formValues.lastName.error}
        margin={'dense'}
        />
        <TextField 
        variant='outlined'
        name='email'
        label = 'email'
        value={formValues.email.value}
        onChange={onInputChange}
        error={!!formValues.email.error}
        helperText={formValues.email.error}
        margin={'dense'}
        />
        <TextField 
        variant='outlined'
        name='password'
        label = 'password'
        value={formValues.password.value}
        onChange={onInputChange}
        error={!!formValues.password.error}
        helperText={formValues.password.error}
        margin={'dense'}
        />
        <button disabled={isButtonDisabled} onClick={registerUser}>Register</button>
    </FormControl>
  )
}

export default RegisterForm