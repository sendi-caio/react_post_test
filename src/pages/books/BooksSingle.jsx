import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BooksCard from '../../components/BooksCard'
import { books } from '../../services/api'


const BooksSingle = () => {
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
          <BooksCard
            key={data.id}
            author={data.author}
            title={data.title}
            years={data.years}
            contentId={data.id}

          />
        )
      }
    </div>
  )
}

export default BooksSingle
