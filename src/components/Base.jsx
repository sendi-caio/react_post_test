import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './Navigation'

import Home from '../pages/Home'
import List from '../pages/List'
import Single from '../pages/Single'
import Create from '../pages/Create'
import Update from '../pages/Update'

function Base() {
  return (
    <div className="p-3">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* EXAMPLE START */}
          <Route exact path="/books/create" component={Create} />
          <Route exact path="/books/:id/update" component={Update} />
          <Route exact path="/books/:id" component={Single} />
          <Route exact path="/books" component={List} />

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
