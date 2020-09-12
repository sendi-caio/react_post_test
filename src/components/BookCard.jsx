import React from 'react'
import { books } from '../services/api'

function BookCard({ title, onClickCardShow: handleClickShow, bookId, onDeleted }) {

  const handleClickDelete = async () => {
    const response = await books.delete(bookId)
    if (response.status === 200) {
      onDeleted(bookId)
    }
  }

  return (
    <div className="card m-3">
      <div className="card-body">
        <p className="card-text">{ title }</p>
        {
          handleClickShow
          && (
            <>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleClickShow(bookId)}
            >
              Show
            </button>
            <button className="btn btn-danger" type="button" onClick={handleClickDelete}>Delete</button>
            </>
          )
        }
      </div>
    </div>
  )
}

export default BookCard
