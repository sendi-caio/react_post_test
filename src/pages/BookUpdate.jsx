import React, { useState, useEffect } from 'react'
import { books } from '../services/api'
import { useHistory, useParams } from 'react-router-dom'

function BookUpdate() {
  const { id } = useParams()
  const [data, setData] = useState({})

  const populateData = async (id) => {
    try {
      const response = await books.getSingle(id)
      if (response.status === 200) setData(response.data)
    } catch (e) {
      if (e && e.response && e.response.data) {
        console.log(e.response.data)
      } else {
        console.log('unknown error')
      }
    }
  }

  useEffect(() => {
    populateData(id)
  }, [id])

  // const [title, setTitle] = useState('')
  // const [author, setAuthor] = useState('')
  // const [year, setYear] = useState('')
  //const history = useHistory()

  const updateButtonClick = async() => {
    const response = await books.put(data)
    console.log(response)
    // if (response.status === 200) {
    //   history.push(`/book/${id}`)
    // }
  }

  const handleTitleChange = (event) => setData(
    (data) => {
      const newData = data
      newData.title = event.target.value
      return newData
    }
  )

  const handleAuthorChange = (event) => setData(
    (data) => {
      const newData = data
      newData.author = event.target.value
      return newData
    }
  )

  const handleYearChange = (event) => setData(
    (data) => {
      const newData = data
      newData.year = event.target.value
      return newData
    }
  )

  return (
    data &&(
    <div className="card m-3">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              onChange={handleTitleChange}
              className="form-control"
              name="title"
              value={data.title}
            />
            <label>Author</label>
            <input
              onChange={handleAuthorChange}
              className="form-control"
              name="author"
              value={data.author}
            />
            <label>Year</label>
            <input
              onChange={handleYearChange}
              className="form-control"
              name="year"
              value={data.year}
            />
          </div>
          <button onClick={updateButtonClick} className="btn btn-primary" type="button">
            Update
          </button>
        </form>
      </div>
    </div>
    )
  )
}

export default BookUpdate
