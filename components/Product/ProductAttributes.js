import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Header, Button, Modal } from 'semantic-ui-react'
import axios from '../../utils/baseUrl'

const ProductAttributes = ({ _id, description }) => {
  const [modal, setModal] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    const payload = { params: { _id } }
    await axios.delete('/product', payload)
    router.push('/')
  }

  return (
    <>
      <Header as="h3">About this product</Header>
      <p>{description}</p>
      <Button
        icon="trash alternate outline"
        color="red"
        content="Delete Product"
        onClick={() => setModal(true)}
      />
      <Modal open={modal} dimmer="blurring">
        <Modal.Header>Confirm Delete</Modal.Header>
        <Modal.Content>
          <p>Are your sure you want to delete this product?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setModal(false)} content="Cancel" />
          <Button
            negative
            icon="trash"
            labelPosition="right"
            content="Delete"
            onClick={handleDelete}
          />
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default ProductAttributes
