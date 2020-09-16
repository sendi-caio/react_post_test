import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './Navigation'

import Home from '../pages/Home'
import ExampleList from '../pages/ExampleList'
import ExampleSingle from '../pages/ExampleSingle'
import ExampleCreate from '../pages/ExampleCreate'
import BookCreate from '../pages/BookCreate'
import BookList from '../pages/BookList'
import BookSingle from '../pages/BookSingle'

function Base() {
  return (
    <div className="p-3">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* EXAMPLE START */}
          <Route path="/example/create" component={ExampleCreate} />
          <Route path="/example/:id" component={ExampleSingle} />
          <Route path="/example" component={ExampleList} />
          {/* EXAMPLE END */}

          {/* ROUTES START HERE */}
          <Route path="/books/create" component={BookCreate} />
          <Route path="/books/:id" component={BookSingle} />
          <Route path="/books" component={BookList} />

          {/* ROUTES END HERE */}
        </Switch>
        <Navigation />
      </BrowserRouter>
    </div>
  )
}

export default Base
