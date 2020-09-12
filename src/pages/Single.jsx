/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/Details'
import { books } from '../services/api'

function Single() {
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
      <h3>Details</h3>
      {
        data
        && (
        <Details
          content={data}
        />
        )
      }
    </div>
  )
}

export default Single
