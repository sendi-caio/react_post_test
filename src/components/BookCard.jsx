/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

function BookCard({ title, author, year, onClickCard: handleClick, contentId, onClickDelete, onClickEdit }) {
  return (
    <div className="card m-3">
      <div className="card-body">
        <p className="card-text">
          title: { title } <br />
          author: { author } <br />
          year: { year }
        </p>
        {
          handleClick
          && (
            <>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleClick(contentId)}
              >
                Show
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onClickDelete(contentId)}
              >
                Delete
              </button>
            </>
          )
        }
        {
          onClickEdit
          && (
            <>
            &nbsp;
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onClickEdit(contentId)}
              >
                Edit
              </button>
            </>
          )
        }
      </div>
    </div>
  )
}

export default BookCard
