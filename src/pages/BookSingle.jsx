import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import BookCard from '../components/BookCard'
import { books } from '../services/api'

function BookSingle() {
  const history = useHistory()
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

  const handleClickEdit = (contentId) => {
    history.push(`/books/${contentId}/update`)
  }

  return (
    <div>
      {
        data
        && (
        <BookCard
          title={data.title}
          author={data.author}
          year={data.year}
          contentId={data.id}
          onClickEdit={handleClickEdit}
        />
        )
      }
    </div>
  )
}

export default BookSingle
