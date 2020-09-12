import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:5000',
})

const examples = {}
const books = {}

examples.get = () => axios.get('/examples')
examples.getSingle = (id) => axios.get(`/examples/${id}`)

books.getBooks = (id) => axios.get(`/books`)
books.getSingle = (id) => axios.get(`/books/${id}`)
books.postBooks = (data) => axios.post(`/books`, data )
books.postDelete = (id) => axios.delete(`/books/${id}`)

export {
  examples,
  books,
}
