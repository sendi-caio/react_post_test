/* eslint-disable no-shadow */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { books } from '../services/api'

function Create() {
  const [content, setContent] = useState({ author: '', title: '', year: '' })
  const history = useHistory()

  const saveButtonClick = async () => {
    const res = await books.create(content)
    if (res.status === 201) {
      history.push(`books/details/${content.id}`)
    }
  }

  const getAuthor = (event) => {
    setContent(() => {
      content.author = event.target.value
      return content
    })
  }

  const getTitle = (event) => {
    setContent(() => {
      content.title = event.target.value
      return content
    })
  }

  const getYear = (event) => {
    setContent(() => {
      content.year = event.target.value
      return content
    })
  }

  return (
    <div className="card m-3">
      <h3>Form Create</h3>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Author</label>
            <input
              onChange={getAuthor}
              className="form-control"
              name="author"
            />
          </div>
          <div className="form-group">
            <label>Title</label>
            <input
              onChange={getTitle}
              className="form-control"
              name="title"
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              onChange={getYear}
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

export default Create
