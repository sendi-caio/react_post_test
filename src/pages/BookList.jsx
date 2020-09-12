import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import BookCard from '../components/BookCard'
import { books } from '../services/api'

function BookList() {
  const history = useHistory()
  const [data, setData] = useState([])

  const populateData = async () => {
    try {
      const response = await books.get()
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
    populateData()
  }, [])

  const handleClickCardShow = (bookId) => {
    history.push(`/book/${bookId}`)
  }

  const handleClickCardUpdate = (bookId) => {
    history.push(`/book/${bookId}/update`)
  }

  const handleOnDelete = (id) => {
    const undeleted = data.filter(book => (book.id !== id))
    setData(undeleted)
  }

  return (
    <div>
      {
        data.length > 0
        && data.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            year={book.year}
            onClickCardShow={handleClickCardShow}
            onClickCardUpdate={handleClickCardUpdate}
            bookId={book.id}
            onDeleted={handleOnDelete}
          />
        ))
      }
    </div>
  )
}

export default BookList
