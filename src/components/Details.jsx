import React from 'react'

function Details({ content }) {
  return (
    <div className="card m-3">
      <div className="card-body">
        Title :
        {' '}
        <h6 className="card-text">{ content.title }</h6>
        Author :
        {' '}
        <h4 className="card-text">{ content.author }</h4>
        Year :
        {' '}
        <h4 className="card-text">{ content.year }</h4>

      </div>
    </div>
  )
}

export default Details
