import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTopCatSelected, getTopCategories } from '../actions/actions'
import moment from "moment";

class TopCategory extends Component {
  componentDidMount(){
    getTopCatSelected(this.props.match.params.id)
    getTopCategories()
  }
  render(){
    return(
      <div>
        <div className="create-back">
          <Link to="/"><p className="home">RL</p></Link>
        </div>
        <div className="category-posts">
          <div className="top-cat-title">
            {
              this.props.topCats.map(topCat =>(
                <h1 className="category-title" key={"key-"+ topCat.id}>{Number(topCat.id) === Number(this.props.match.params.id)? topCat.name: ''}</h1>
              ))
            }
          </div>
          {
            this.props.topCatData.map(data => (
              <div className="post-title" key={data.id}>
                <p className="posting"><span className="star">&#9734;</span> <span>{moment(data.date_posted).format("MMM D")}</span> <Link to={"/post/" + data.id}>{data.title}</Link></p>
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
    topCatData: appState.topCatSelected,
    topCats: appState.topCats
  }
}

export default connect(mapStateToProps)(TopCategory)