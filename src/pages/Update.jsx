/* eslint-disable no-const-assign */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { books } from '../services/api'

function Update() {
  const [content, setContent] = useState({ author: '', title: '', year: '' })


  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    books.getSingle(id).then((res) => {
      setContent(res.data)
    })
  }, [id])

  const saveButtonClick = async () => {
    const res = await books.update(id, content)
    if (res.status === 200) {
      history.push(`books/${res.data.id}`)
    }
  }

  const getAuthor = (event) => {
    event.persist()
    setContent((content) => {
      content.title = event.target.value
      return content
    })
  }
  const getTitle = (event) => {
    setContent((cont) => {
      const newCont = cont
      newCont.title = event.target.value
      return newCont
    })
  }

  const getYear = (event) => {
    setContent((cont) => {
      const newCont = cont
      newCont.year = event.target.value
      return newCont
    })
  }

  return (
    <div className="card m-3">
      <h3>Form Update</h3>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Author</label>
            <input
              onChange={getAuthor}
              className="form-control"
              name="author"
              value={content.author}
            />
          </div>
          <div className="form-group">
            <label>Title</label>
            <input
              onChange={getTitle}
              className="form-control"
              name="title"
              value={content.title}
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              onChange={getYear}
              className="form-control"
              name="year"
              value={content.year}
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

export default Update
