import { Formik, Field } from 'formik'
import FormikField from '../Formik/FormikField'
import { axios as cloudinaryAxios, default as axios } from '../../utils/baseUrl'

import {
  Form,
  Input,
  TextArea,
  Button,
  Image,
  Message
} from 'semantic-ui-react'
import Axios from 'axios'

const INITIAL_VALUES = {
  name: '',
  price: '',
  media: '',
  mediaPreview: '',
  description: ''
}

const CreateProductForm = ({
  handleSubmit,
  isSubmitting,
  status,
  setFieldValue,
  dirty
}) => {
  const handleMediaChange = event => {
    const { files } = event.currentTarget
    setFieldValue('media', files[0])
    setFieldValue('mediaPreview', window.URL.createObjectURL(files[0]))
  }

  const success = status === 'valid' && !dirty

  return (
    <Form loading={isSubmitting} success={success} onSubmit={handleSubmit}>
      <Message
        success
        icon="check"
        header="Success!"
        content="Your product has been posted!"
      />
      <Form.Group widths="equal">
        <Field
          component={FormikField}
          control={Input}
          name="name"
          label="Name"
          placeholder="Name"
        />
        <Field
          component={FormikField}
          control={Input}
          name="price"
          label="Price"
          placeholder="Price"
          min="0.00"
          step="0.01"
          type="number"
        />
        <Form.Field
          control={Input}
          name="media"
          type="file"
          label="Media"
          content="Select Image"
          accept="image/*"
          onChange={handleMediaChange}
        />
      </Form.Group>
      <Field
        name="mediaPreview"
        render={({ field: { value } }) => {
          return <Image src={value} rounded centered size="small" />
        }}
      />
      <Field
        component={FormikField}
        control={TextArea}
        name="description"
        label="Description"
        placeholder="Description"
      />
      <Form.Field
        control={Button}
        disabled={isSubmitting}
        color="blue"
        icon="pencil alternate"
        content="Submit"
        type="submit"
      />
    </Form>
  )
}

const handleImageUpload = async media => {
  const data = new FormData()
  data.append('file', media)
  data.append('upload_preset', 'nextjs9-mern')
  data.append('cloud_name', 'ajfsdeveloper')

  const response = await cloudinaryAxios.post(process.env.CLOUDINARY_URL, data)
  const mediaUrl = response.data.url

  return mediaUrl
}

const handleOnSubmit = async (
  values,
  { setSubmitting, resetForm, setStatus }
) => {
  const mediaUrl = await handleImageUpload(values.media)
  const { name, price, description } = values
  const payload = { name, price, description, mediaUrl }

  await axios.post('/product', payload)

  setSubmitting(false)
  resetForm(INITIAL_VALUES)
  setStatus('valid')
}

const CreateProductFormik = () => (
  <Formik
    enableReinitialize
    initialValues={INITIAL_VALUES}
    onSubmit={handleOnSubmit}
    component={CreateProductForm}
  />
)

export default CreateProductFormik
