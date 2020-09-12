import React, { useState } from 'react'

function ExampleCreate() {
  const [content, setContent] = useState('')

  const saveButtonClick = () => {
    // find your own way
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
