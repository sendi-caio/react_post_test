import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { books } from '../services/api'

function BookCreate() {
  const history = useHistory()
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [year, setYear] = useState()

  const saveButtonClick = () => {
    books.post({ title, author, year })
      .then((response) => {
        if (response.status === 201) {
          history.push('/books')
        }
      })
  }

  const handleContentTitle = (evt) => {
    setTitle(evt.target.value)
  }

  const handleContentAuthor = (evt) => {
    setAuthor(evt.target.value)
  }

  const handleContentYear = (evt) => {
    setYear(evt.target.value)
  }

  return (
    <div className="card m-3">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              onChange={handleContentTitle}
              className="form-control"
              name="title"
            />
          </div>

          <div className="form-group">
            <label>Author</label>
            <input
              onChange={handleContentAuthor}
              className="form-control"
              name="author"
            />
          </div>

          <div className="form-group">
            <label>Year</label>
            <input
              onChange={handleContentYear}
              className="form-control"
              name="year"
              type="month"
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
