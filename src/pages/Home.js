import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import HomeLayout from '../components/HomeLayout'
import MainHome from '../components/MainHome';
import SideBar from '../components/SideBar';
import axiosClient from '../untils/axiosClient';

export default function Home() {
  const [dataAnimals, setDataAnimals] = useState([]);

  const fetchDataAnimals = () => {
    axiosClient.get('v2/animals')
      .then(res => {
        if (res.data) {
          console.log(res.data);
          setDataAnimals(res.data)
        } else throw new Error()
      }).catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
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
