import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getSelectedCat } from '../actions/actions'
import { connect } from 'react-redux'
import moment from "moment";

class Category extends Component {
  componentDidMount(){
    getSelectedCat(this.props.match.params.id)
  }
  render(){
    return(
      <div>
        <div className="create-back">
          <Link to="/"><p className="home">RL</p></Link>
          <Link to={`/category/${this.props.match.params.id}/posting`}><button>Create Post</button></Link>
        </div>
        <div className="category-posts">
          <h1 className="category-title">{this.props.catTitle}</h1>
          {
            this.props.catData.map(post =>(
              <div key={"key-" + post.id} className="post-title">
                <Link to={"/post/" + post.id}>{post.title !== null? <p className="posting"><span className="star">&#9734;</span> <span>{moment(post.date_posted).format("MMM D")}</span> {post.title}</p>: ''}</Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState){
  return {
    catData: appState.catData,
    catTitle: appState.catTitle
  }
}

export default connect(mapStateToProps)(Category)