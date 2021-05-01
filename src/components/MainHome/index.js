import React from 'react'
import Card from '../Card'
import './style.scss'

export default function MainHome() {
  return (
    <div className="mainhome">
      <h3>Animals</h3>
      <div className="mainhome__container container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
