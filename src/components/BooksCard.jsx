import React from 'react';

const BooksCard = ({ author, title, years, id, handleDelete: onclickDelete, hanldeShow }) => {

  const onClickDelete = (id) => {

  }

  return (
    <div className="card m-3">
      <div className="card-body">
        <p className="card-text">Author: {author}</p>
        <p className="card-text">Title: {title}</p>
        <p className="card-text">Years: {years}</p>
        {
          (
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onClickDelete(id)}
            >
              Delete
            </button>
          )
        }

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onClickDelete(id)}
        >
          Show
          </button>
      </div>
    </div>
  )
}

export default BooksCard
