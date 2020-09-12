import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { books } from '../../services/api'
import BooksCard from '../../components/BooksCard'

function BooksList() {
  const history = useHistory()
  const [data, setData] = useState([])

  const populateData = async () => {
    try {
      const response = await books.getBooks()
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
    history.push(`/example/${contentId}`)
  }

  return (
    <div>
      {
        data.length > 0
        && data.map((item) => (
          <BooksCard
            key={item.id}
            author={item.author}
            title={item.title}
            years={item.years}
            onClickCard={handleClickCard}
            contentId={item.id}
          />
        ))
      }
    </div>
  )
}

export default BooksList
