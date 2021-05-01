import React from 'react'
import { useHistory } from 'react-router-dom'

export default function NavBar() {
  const history = useHistory()

  const handleLogout = async () => {
    await localStorage.clear()
    history.replace('/login')
  }

  return (
    <div className="home__navbar">
      <h2>HomePage</h2>
      <button id="logout" onClick={handleLogout}>Đăng xuất</button>
    </div>
  )
}
