import React, { useContext } from 'react'
import { TypesContextAnimals } from '../../configs/types'
import { AnimalsContext } from '../../contexts/contexts'
import axiosClient from '../../untils/axiosClient'
import './style.scss'

export default function SideBar() {
  const animalsContext = useContext(AnimalsContext)
  const categories = [
    {
      key: 1,
      type: '',
      title: 'All'
    },
    {
      key: 2,
      type: 'Dog',
      title: 'Dogs'
    }
  ]

  const fetchDataAnimalsWithType = (type) => {
    animalsContext.dispatch({
      type: TypesContextAnimals.SET_LOADING
    })
    axiosClient.get('v2/animals', {
      params: {
        type: { type }
      }
    }).then(res => {
      animalsContext.dispatch({
        type: TypesContextAnimals.SET_LOADING
      })
      animalsContext.dispatch({
        type: TypesContextAnimals.GET_ALL_DOGS,
        data: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  }
  const fetchDataAnimals = () => {
    animalsContext.dispatch({
      type: TypesContextAnimals.SET_LOADING
    })
    axiosClient.get('v2/animals')
      .then(res => {
        animalsContext.dispatch({
          type: TypesContextAnimals.GET_ALL_ANIMALS,
          data: res.data
        })
      }).catch(err => {
        console.log(err);
      })
  }

  const handleClickCategory = (type) => {
    if (type) {
      fetchDataAnimalsWithType()
      return;
    }
    fetchDataAnimals()
  }
  return (
    <div className="sidebar">
      {categories?.map(category => {
        return <div key={category.key}
          className="sidebar__list"
          onClick={() => handleClickCategory(category.type)}
        >
          {category.title}
        </div>
      })}
    </div>
  )
}
