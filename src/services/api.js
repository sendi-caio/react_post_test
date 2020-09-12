import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:5000',
})

const examples = {}

examples.get = () => axios.get('/examples')
examples.getSingle = (id) => axios.get(`/examples/${id}`)

const books = {}

books.get = () => axios.get('/books')
books.getSingle = (id) => axios.get(`/books/${id}`)
books.post = (data) => axios.post('/books', data)
books.delete = (id) => axios.delete(`/books/${id}`)
books.update = (id) => axios.put(`/books/${id}/update`)

export {
  examples,
  books,
}
