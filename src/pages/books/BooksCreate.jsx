import React, { useState } from 'react'
import { books } from '../../services/api'
import { useHistory } from 'react-router-dom'

const BookCreate = () => {
  const history = useHistory()

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
    const response = await books.postBooks(data)
    if (response.status === 201) {
      history.push(`/books/${response.data.id}`)
    }
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
            Create
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookCreate
