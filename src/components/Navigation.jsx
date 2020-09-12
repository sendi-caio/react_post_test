import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/**
  USE THIS TO HELP YOU NAVIGATE
  THROUGH THE ROUTES YOU CREATE
*/

const routesArray = [
  ['Home', '/'],
  ['Example Create', '/example/create'],
  ['Example', '/example'],
  ['Books Create', '/books/create'],
  ['Books', '/books']

]

function Navigation() {
  const [routes, setRoutes] = useState([])
  const handleClick = () => (routes.length > 0 ? setRoutes([]) : setRoutes(routesArray))

  return (
    <nav className="nav-helper">
      <div className="list-group">
        {
          routes.length > 0
          && routes.map(([name, path]) => (
            <Link key={path} className="list-group-item list-group-item-action" to={path}>{name}</Link>
          ))
        }
        <button type="button" onClick={handleClick} className="list-group-item list-group-item-action active">Navigation Helper</button>
      </div>
    </nav>
  )
}

export default Navigation
