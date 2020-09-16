import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { books } from '../services/api'

function BookCreate() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const history = useHistory()

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value)
  }
  const saveButtonClick = async () => {
    const response = await books.post({ title, author })
    if (response.status === 201) {
      history.push('/books')
    }
  }

  return (
    <div>
      <div className="card m-3">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Title</label>
              <input
                onChange={handleTitleChange}
                className="form-control"
                name="content"
              />
            </div>
            <div className="form-group">
              <label>Author</label>
              <input
                onChange={handleAuthorChange}
                className="form-control"
                name="author"
              />
            </div>
            <button onClick={saveButtonClick} className="btn btn-primary" type="button">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookCreate
