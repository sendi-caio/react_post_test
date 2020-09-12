/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './Navigation'

import Home from '../pages/Home'
import BookList from '../pages/BookList'
import BookSingle from '../pages/BookSingle'
import BookCreate from '../pages/BookCreate'
import BookUpdate from '../pages/BookUpdate'

function Base() {
  return (
    <div className="p-3">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <BookList />
          </Route>
          {/* EXAMPLE START */}
          <Route path="/books/create" component={BookCreate} />
          <Route exact path="/books/:id" component={BookSingle} />
          <Route path="/books/:id/update" component={BookUpdate} />
          <Route path="/books" component={BookList} />
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
