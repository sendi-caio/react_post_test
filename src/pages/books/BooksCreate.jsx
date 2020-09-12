import React, { useState } from 'react'
import { books } from '../../services/api'

const BookCreate = () => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [years, setYears] = useState('')

  const handleContentAuthor = (event) => {
    setAuthor(event.target.value)
  }

  const handleContentTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleContentYears = (event) => {
    setYears(event.target.value)
  }

  const saveButtonClick = async () => {
    const data = { title, author, years }
    const post = await books.postBooks(data)
  }


  return (
    <div className="card m-3">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Author</label>
            <input
              onChange={handleContentAuthor}
              className="form-control"
              name="author"
            />
            <label>Title</label>
            <input
              onChange={handleContentTitle}
              className="form-control"
              name="title"
            />
            <label>Years</label>
            <input
              onChange={handleContentYears}
              className="form-control"
              name="years"
            />
          </div>
          <button onClick={() => saveButtonClick()} className="btn btn-primary" type="button">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookCreate
