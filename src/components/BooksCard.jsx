import React from 'react'
import { useHistory } from 'react-router-dom'
import { books } from '../services/api'

const BooksCard = ({
  author, title, years, id, onDelete,
}) => {
  const history = useHistory()
  const handleDelete = async (bookId) => {
    // const response = await books.postDelete(id)
    onDelete(bookId)
  }

  const onClickShow = (id) => {
    history.push(`/books/${id}`)
  }

  return (
    <div className="card m-3">
      <div className="card-body">
        <p className="card-text">
          Author:
          {author}
        </p>
        <p className="card-text">
          Title:
          {title}
        </p>
        <p className="card-text">
          Years:
          {years}
        </p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onClickShow(id)}
        >
          Show
        </button>
      </div>
    </div>
  )
}

export default BooksCard
