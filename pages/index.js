import axios from '../config/axios'
import ProductList from '../components/Index/ProductList'

const Home = ({ products }) => {
  return <ProductList products={products} />
}

Home.getInitialProps = async () => {
  // fetch data on server
  const response = await axios.get('/products')
  // return response data as an Object
  return { products: response.data }
  // this object will be merged with existing props
}

export default Home
