import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:5000',
})

const examples = {}
const books = {}

examples.get = () => axios.get('/examples')
examples.post = (data) => axios.post('/examples', data)
examples.getSingle = (id) => axios.get(`/examples/${id}`)
books.get = () => axios.get('/books')
books.post = (data) => axios.post('/books', data)
books.getSingle = (id) => axios.get(`/books/${id}`)
books.delete = (id) => axios.delete(`/books/${id}`)

export {
  examples, books,
}
