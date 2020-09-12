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

  const handleClickCard = (contentId) => {
    history.push(`/books/${contentId}`)
  }

  const handleClickDelete = (contentId) => {
    books.delete(contentId)
      .then((response) => {
        if (response.status === 200) {
          const undeleted = data.filter(({ id }) => (id !== contentId))
          setData(undeleted)
          history.push('/books')
        }
      })
  }

  return (
    <div>
      {
        data.length > 0
        && data.map((item) => (
          <BookCard
            key={item.id}
            title={item.title}
            author={item.author}
            year={item.year}
            onClickCard={handleClickCard}
            onClickDelete={handleClickDelete}
            contentId={item.id}
          />
        ))
      }
    </div>
  )
}

export default BookList
