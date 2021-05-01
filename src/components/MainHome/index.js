import React, { useContext } from 'react'
import { AnimalsContext } from '../../contexts/contexts'
import Card from '../Card'
import './style.scss'

export default function MainHome() {
  const animalsContext = useContext(AnimalsContext)

  const mapDataToView = (animals) => {
    let result = <></>
    if (animals) {
      result = animals.map((animal, index) => {
        return <Card key={index} animal={animal} />
      })
    }
    return result;
  }
  return (
    <div className="mainhome">
      <h3>Animals</h3>
      <div className="mainhome__container container">
        {animalsContext.data?.isLoading ?
          <div>Loading...</div>
          : mapDataToView(animalsContext.data?.animals)}
      </div>
    </div>
  )
}
