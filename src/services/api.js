import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:5000',
})

const books = {}

books.get = () => axios.get('/books')
books.getSingle = (id) => axios.get(`/books/${id}`)
books.create = (data) => axios.post('/books', data)
books.delete = (id) => axios.delete(`/books/${id}`)
books.update = (id, data) => axios.put(`/books/${id}`, data)

export {
  books,
}
