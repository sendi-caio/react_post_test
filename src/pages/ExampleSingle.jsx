import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ExampleCard from '../components/ExampleCard'
import { examples } from '../services/api'

function ExampleSingle() {
  const { id } = useParams()
  const [data, setData] = useState(null)

  const populateData = async (contentId) => {
    try {
      const response = await examples.getSingle(contentId)
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
        <ExampleCard
          content={data.content}
        />
        )
      }
    </div>
  )
}

export default ExampleSingle
