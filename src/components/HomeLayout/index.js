import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from './NavBar'
import './style.scss'

export default function HomeLayout({ children }) {
  const history = useHistory()

  useEffect(() => {
    if (!localStorage.getItem('access-token')) {
      history.replace('/login')
    }
  }, [history])

  return (
    <div className="home">
      <NavBar />
      {children}
    </div>
  )
}
