import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BookCard from '../components/BooksCard'
import { books } from '../services/api'

function BookSingle() {
  const { id } = useParams()
  const [data, setData] = useState(null)

  const populateData = async (contentId) => {
    try {
      const response = await books.getSingle(contentId)
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
        <BookCard
          title={data.title}
          author={data.author}
        />
        )
      }
    </div>
  )
}

export default BookSingle
