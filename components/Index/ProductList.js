import { Card } from 'semantic-ui-react'

const ProductList = ({ products }) => {
  const mapProductsToItems = products =>
    products.map(product => ({
      header: product.name,
      image: product.mediaUrl,
      meta: `$${product.price}`,
      color: 'teal',
      fluid: true,
      raised: true,
      childKey: product._id,
      href: `/product?_id=${product._id}`
    }))

  return (
    <Card.Group
      stackable
      itemsPerRow="3"
      centered
      items={mapProductsToItems(products)}
    ></Card.Group>
  )
}

export default ProductList
