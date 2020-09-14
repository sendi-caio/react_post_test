import React, { useState } from 'react'
import { examples } from '../services/api'

function ExampleCreate() {
  const [content, setContent] = useState('')

  const saveButtonClick = async () => {
    const response = await examples.post({ content })
    console.log(response)
    console.log(content)
  }

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  return (
    <div className="card m-3">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Content</label>
            <input
              onChange={handleContentChange}
              className="form-control"
              name="content"
            />
          </div>
          <button onClick={saveButtonClick} className="btn btn-primary" type="button">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default ExampleCreate
