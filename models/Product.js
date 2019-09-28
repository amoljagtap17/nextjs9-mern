import mongoose from 'mongoose'
import shortid from 'shortid'

const { Schema } = mongoose
const { String, Number } = mongoose.Schema.Types

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sku: {
    type: String,
    unique: true,
    default: shortid.generate()
  },
  description: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    required: true
  }
})

// Use existing model if available or else create new!
export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema)
