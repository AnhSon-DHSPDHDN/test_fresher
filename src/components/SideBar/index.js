import React from 'react'
import './style.scss'

export default function SideBar() {
  const categories = [
    {
      key: 1,
      type: '',
      title: 'All'
    },
    {
      key: 2,
      type: 'dog',
      title: 'Dogs'
    }
  ]
  return (
    <div className="sidebar">
      {categories?.map(category => {
        return <div key={category.key} className="sidebar__list">
          {category.title}
        </div>
      })}
    </div>
  )
}
