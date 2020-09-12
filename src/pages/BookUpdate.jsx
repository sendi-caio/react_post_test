/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { books } from '../services/api'

function BookUpdate() {
  const { id } = useParams()
  const history = useHistory()
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [year, setYear] = useState()

  const populateData = async (contentId) => {
    try {
      const response = await books.getSingle(contentId)
      if (response.status === 200) {
        setTitle(response.data.title)
        setAuthor(response.data.author)
        setYear(response.data.year)
      }
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

  const updateButtonClick = (bookid) => {
    books.put(bookid, { title, author, year })
      .then((response) => {
        if (response.status === 200) {
          history.push(`/books/${bookid}`)
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
              defaultValue={title}
            />
          </div>

          <div className="form-group">
            <label>Author</label>
            <input
              onChange={handleContentAuthor}
              className="form-control"
              name="author"
              defaultValue={author}
            />
          </div>

          <div className="form-group">
            <label>Year</label>
            <input
              onChange={handleContentYear}
              className="form-control"
              name="year"
              type="month"
              defaultValue={year}
            />
          </div>

          <button onClick={() => updateButtonClick(id)} className="btn btn-primary" type="button">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookUpdate
