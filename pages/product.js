import axios from '../utils/baseUrl'
import ProductSummary from '../components/Product/ProductSummary'
import ProductAttributes from '../components/Product/ProductAttributes'

const ProductPage = ({ product }) => (
  <>
    <ProductSummary {...product} />
    <ProductAttributes {...product} />
  </>
)

ProductPage.getInitialProps = async ({ query: { _id } }) => {
  const payload = { params: { _id } }
  const response = await axios.get('/product', payload)
  return { product: response.data }
}

export default ProductPage
