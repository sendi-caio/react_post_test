import React from 'react'

function BookCard({
  author, title, onClickCard: handleClick, contentId, onDeleteCard: handleDelete,
}) {
  return (
    <div className="card m-3">
      <div className="card-body">
        <p className="card-text">
          Title :
          { title }
        </p>
        <p className="card-text">
          Author :
          {author}
        </p>
        {
          handleClick
          && handleDelete && (
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleClick(contentId)}
              >
                Show
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(contentId)}
              >
                Delete
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default BookCard
