import axios from 'axios'

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://localhost:3000'
    : 'http://localhost:3000'

const instance = axios.create({
  baseURL: `${baseUrl}/api`,
  timeout: 1000
})

export { baseUrl }
export default instance
