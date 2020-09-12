/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../components/Card'
import { books } from '../services/api'

function List() {
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

  const onDeleted = async (contentId) => {
    const res = await books.delete(contentId)
    if (res.status === 200) {
      const undeleted = data.filter((el) => el.id !== contentId)
      setData(undeleted)
    }
  }
  return (
    <div>
      <h3>Books List</h3>

      <a className="btn btn-primary" href="/books/create">Create New</a>
      {
        data.length > 0
        && data.map((item) => (
          <Card
            key={item.id}
            content={item.title}
            onClickCard={handleClickCard}
            contentId={item.id}
            onDeleted={onDeleted}
          />
        ))
      }
    </div>
  )
}

export default List
