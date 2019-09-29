import { Header, Icon } from 'semantic-ui-react'
import CreateProductForm from './CreateProductForm'

const CreateProduct = () => {
  return (
    <>
      <Header as="h2" block>
        <Icon name="add" color="orange" />
        Create New Product
      </Header>
      <CreateProductForm />
    </>
  )
}

export default CreateProduct
