import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:5000',
})

const examples = {}

examples.get = () => axios.get('/examples')
examples.getSingle = (id) => axios.get(`/examples/${id}`)

export {
  examples,
}
