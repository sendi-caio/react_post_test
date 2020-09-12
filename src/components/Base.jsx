import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './Navigation'

import Home from '../pages/Home'
import List from '../pages/List'
import Single from '../pages/Single'
import Create from '../pages/Create'

function Base() {
  return (
    <div className="p-3">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* EXAMPLE START */}
          <Route path="/books/create" component={Create} />
          <Route path="/books/:id" component={Single} />
          <Route path="/books" component={List} />
          <Route path="/books/update/:id" />

          {/* EXAMPLE END */}

          {/* ROUTES START HERE */}

          {/* ROUTES END HERE */}
        </Switch>
        <Navigation />
      </BrowserRouter>
    </div>
  )
}

export default Base
