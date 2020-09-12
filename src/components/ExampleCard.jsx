import React from 'react'

function ExampleCard({ content, onClickCard: handleClick, contentId }) {
  return (
    <div className="card m-3">
      <div className="card-body">
        <p className="card-text">{ content }</p>
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

export default ExampleCard
