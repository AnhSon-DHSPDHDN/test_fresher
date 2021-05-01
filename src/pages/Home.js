/* eslint-disable */

import React, { useEffect, useContext } from 'react'
import HomeLayout from '../components/HomeLayout'
import MainHome from '../components/MainHome';
import SideBar from '../components/SideBar';
import axiosClient from '../untils/axiosClient';

import { AnimalsContext } from '../contexts/contexts';
import { TypesContextAnimals } from '../configs/types';

export default function Home() {
  const animalsContext = useContext(AnimalsContext)

  useEffect(() => {
    const fetchDataAnimals = () => {
      axiosClient.get('v2/animals')
        .then(res => {
          if (res.data) {
            animalsContext.dispatch({
              type: TypesContextAnimals.GET_ALL_ANIMALS,
              data: res.data
            })
          } else throw new Error()
        }).catch(err => {
          console.log(err);
        })
    }
    fetchDataAnimals()
  }, [])

  return (
    <HomeLayout>
      <div className="main container">
        <SideBar />
        <MainHome />
      </div>
    </HomeLayout>
  )
}
