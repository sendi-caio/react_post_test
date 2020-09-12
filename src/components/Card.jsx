import React from 'react'

function CardBook({
  content, onClickCard: handleClick, contentId, onDeleted,
}) {
  return (
    <div className="card m-3">
      <div className="card-body">
        <h4 className="card-text">{ content }</h4>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDeleted(contentId)}
        >
          Delete
        </button>
        <a
          className="btn btn-success"
          href={`${contentId}/update`}
        >
          Edit
        </a>
        {
          handleClick
          && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleClick(contentId)}
            >
              Show
            </button>
          )
        }
      </div>
    </div>
  )
}

export default CardBook
