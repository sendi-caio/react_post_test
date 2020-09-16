import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ExampleCard from '../components/ExampleCard'
import { examples } from '../services/api'

function ExampleList() {
  const history = useHistory()
  const [data, setData] = useState([])

  const populateData = async () => {
    try {
      const response = await examples.get()
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
          <ExampleCard
            key={item.id}
            content={item.content}
            onClickCard={handleClickCard}
            contentId={item.id}
          />

        ))

      }
    </div>
  )
}

export default ExampleList
