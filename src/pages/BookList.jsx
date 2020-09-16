import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { books } from '../services/api'
import BooksCard from '../components/BooksCard'

const BookList = () => {
  const history = useHistory()
  const [booklist, setBooklist] = useState([])
  const book = async () => {
    try {
      const response = await books.get()
      if (response.status === 200) setBooklist(response.data)
    } catch (e) {
      if (e && e.response && e.response.data) {
        console.log(e.response.data)
      } else {
        console.log('unknown error')
      }
    }
  }
  useEffect(() => {
    book()
  }, [])
  const handleClickCard = (contentId) => {
    history.push(`/books/${contentId}`)
  }
  const handleClickDelete = (contentId) => {
    books.delete(contentId)
  }
  return (
    <div>

      {
        booklist.length > 0
        && booklist.map((item) => (
          <BooksCard
            key={item.id}
            title={item.title}
            author={item.author}
            contentId={item.id}
            onClickCard={handleClickCard}
            onDeleteCard={handleClickDelete}

          />

        ))

     }

    </div>
  )
}

export default BookList
