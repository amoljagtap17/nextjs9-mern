import React, { useEffect } from 'react'
import axios from '../config/axios'

const Home = () => {
  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await axios.get('/products')
    console.log('response', response.data)
  }

  return <div>home</div>
}

export default Home
