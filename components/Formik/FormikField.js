import { Form } from 'semantic-ui-react'

const FormikField = ({ field, form, ...props }) => {
  return <Form.Field {...field} {...props} />
}

export default FormikField
