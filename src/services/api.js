import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:5000',
})

const examples = {}
const books = {}

examples.get = () => axios.get('/examples')
examples.getSingle = (id) => axios.get(`/examples/${id}`)
books.get = () => axios.get('/books')

exports = {
  examples, books,
}
