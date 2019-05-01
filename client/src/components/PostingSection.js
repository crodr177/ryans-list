import React, { Component } from 'react'
import { creatingPost } from '../actions/actions'

class PostingSection extends Component {
  state = {
    title: '',
    desc: '',
    image: ''
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.title !== '' && this.state.desc !== '' && this.state.image !== ''){
    creatingPost(this.props.match.params.id,{
      title: this.state.title,
      desc: this.state.desc,
      image: this.state.image
    })
    window.location.reload();
    }
    else{
      alert('Please fill out required sections before posting')
    }
  }
  render(){
    return(
      <div id="posting-section">
        <input maxLength="100" id="title" name="title" type="text" placeholder="post title" value={this.state.title} onChange={this.handleChange}/>
        <textarea id="desc" name="desc" type="text" placeholder="post description" value={this.state.desc} onChange={this.handleChange}/>
        <input id="image" name="image" type="text" placeholder="post image - only input urls" value={this.state.image} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Post</button>
      </div>
    )
  }
}

export default PostingSection