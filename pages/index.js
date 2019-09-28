import React, { useEffect } from 'react'
import axios from '../config/axios'

const Home = ({ products }) => {
  console.log('products', products)

  return <div>home</div>
}

Home.getInitialProps = async () => {
  // fetch data on server
  const response = await axios.get('/products')
  // return response data as an Object
  return { products: response.data }
  // this object will be merged with existing props
}

export default Home
