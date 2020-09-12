import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { books } from '../services/api'
import { Link } from 'react-router-dom'

function BookSingle() {
  const { id } = useParams()
  const [data, setData] = useState(null)

  const populateData = async (bookId) => {
    try {
      const response = await books.getSingle(bookId)
      if (response.status === 200) setData(response.data)
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

  return (
    <div>
      {
        data
        && (
          <div className="card m-3">
            <div className="card-body">
              <p className="card-text">Title: {data.title}</p>
              <p className="card-text">Author: {data.author}</p>
              <p className="card-text">Year: {data.year}</p>
              <Link className="btn btn-success" to={`/book/${id}/update`}>Update</Link> <br />
              <br />
              <Link to="/book">Get All Book</Link>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default BookSingle
