import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPost } from '../actions/actions'

class Post extends Component {
  componentDidMount(){
    getPost(this.props.match.params.id)
  }
  render(){
    return(
      <div id="post">
        <div className="create-back">
          <Link to="/"><p className="home">RL</p></Link>
          <Link to={'/category/' + this.props.cat}><button> back </button></Link>
        </div>
        {
          this.props.postData.map(data =>(
            <div key={'key-'+ data.id} className="post-section">
              <h1><span className="star">&#9734;</span> {data.title}</h1>
              <p><img alt="post" src={data.post_image}/></p>
              <p className="description-bottom">{data.description}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

function mapStateToProps(appState){
  return {
    postData: appState.postData,
    cat: appState.cat
  }
}

export default connect(mapStateToProps)(Post)