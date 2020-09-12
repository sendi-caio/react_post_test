import React, { useState } from 'react'
import { books } from '../services/api'
import { useHistory } from 'react-router-dom'

function BookCreate() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState('')
  const history = useHistory()

  const saveButtonClick = async() => {
    const response = await books.post({ title, author, year })
    console.log(response)
    if (response.status === 201) {
      history.push(`/book/${response.data.id}`)
    }
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleYearChange = (event) => {
    setYear(event.target.value)
  }


  return (
    <div className="card m-3">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              onChange={handleTitleChange}
              className="form-control"
              name="title"
            />
            <label>Author</label>
            <input
              onChange={handleAuthorChange}
              className="form-control"
              name="author"
            />
            <label>Year</label>
            <input
              onChange={handleYearChange}
              className="form-control"
              name="year"
            />
          </div>
          <button onClick={saveButtonClick} className="btn btn-primary" type="button">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookCreate
