import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../store'
import Homepage from './Homepage'
import Category from './Category'
import TopCategory from './TopCategory'
import PostingSection from './PostingSection'
import Post from './Post'
import '../styles/styles.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="main-container">
            <div id="pages">
              <Route exact path="/" component={Homepage}/>
              <Route exact path="/top-category/:id" component={TopCategory}/>
              <Route exact path="/category/:id/posting" component={PostingSection}/>
              <Route path="/category/:id" component={Category}/>
              <Route exact path="/post/:id" component={Post}/>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
