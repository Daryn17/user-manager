import useForm from '../hooks/useForm'
import { useState } from 'react'

import Input from './Input'
import Button from './Button'

const UserForm = ({ submit }) => {
  const [user, handleChange, reset] = useForm({
    name: '',
    lastName: '',
    email: ''
  })

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!user.name) {
      tempErrors.name = 'Name is required';
    }
    if (!user.lastName) {
      tempErrors.lastName = 'Last name is required';
    }
    if (!user.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      tempErrors.email = 'Email is invalid';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      submit(user)
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Name'
        name='name'
        placeholder='John'
        value={user.name}
        onChange={handleChange}
      />
      {errors.name && <p style={{ color: 'red', fontSize: 12 }}>{errors.name}</p>}
      <Input
        label='Last name'
        name='lastName'
        placeholder='Doe'
        value={user.lastName}
        onChange={handleChange}
      />
      {errors.lastName && <p style={{ color: 'red', fontSize: 12 }}>{errors.lastName}</p>}
      <Input
        label='Email'
        name='email'
        placeholder='johndoe@gmail.com'
        value={user.email}
        onChange={handleChange}
      />
      {errors.email && <p style={{ color: 'red', fontSize: 12 }}>{errors.email}</p>}
      <Button>Enviar</Button>
    </form>
  )
}

export default UserForm