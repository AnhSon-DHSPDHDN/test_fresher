import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import axiosClient from '../untils/axiosClient';

export default function Login() {
  const [formLoginValue, setFormLoginValue] = useState({
    email: '',
    password: ''
  })
  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {
      grant_type: "client_credentials",
      client_id: process.env.REACT_APP_API_KEY,
      client_secret: process.env.REACT_APP_secret
    }
    axiosClient.post('v2/oauth2/token', { ...data })
      .then(async res => {
        if (res.data) {
          await localStorage.setItem('access-token', res.data?.access_token)
          history.push('/home')
        } else throw new Error()
      }).catch(err => {
        console.log(err);
      })
  }

  const handleChangValue = event => {
    const name = event.target.name;
    const value = event.target.value;
    setFormLoginValue({
      ...formLoginValue,
      [name]: value
    })
  }

  if (localStorage.getItem('access-token')) {
    return <Redirect to="home" />
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input id="email" name="email" required onChange={handleChangValue} type="email"></input>
        <label htmlFor="password">Password: </label>
        <input id="password" name="password" required onChange={handleChangValue} type="password"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
