import React from 'react'
import './style.scss'

export default function Card({ animal }) {
  return (
    <div className="card">
      <a href={animal?.url} rel="noreferrer noopener" target="_blank">
        <img src={animal?.primary_photo_cropped?.full} alt=""></img>
        <p>{animal?.description ? animal?.description : "No description"}</p>
      </a>
    </div>
  )
}
