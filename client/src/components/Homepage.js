import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTopCategories, getCategories } from '../actions/actions'
import { Link } from 'react-router-dom'
import Calendar from './Calendar'

class Homepage extends Component {
  componentDidMount(){
    getTopCategories()
    getCategories()
  }
  render(){
    return(
      <div id="homepage">
        <div id="column-1">
          <h1>ryanslist</h1>
          <p>my account</p>
          <Calendar/>
          <div className="terms">
            <p>help, faq, abuse, legal</p>
            <p>avoid scams &#38; fraud</p>
            <p>personal safety tips</p>
            <p>terms of use</p>
            <p>privacy policy</p>
            <p>system status</p>
          </div>
          <div className="terms">
            <p>about craigslist</p>
            <p>craigslist is hiring in sf</p>
            <p>craigslist open source</p>
            <p>craigslist blog</p>
            <p>best-of-craigslist</p>
            <p>craigslist TV</p>
            <p>"craigslist joe"</p>
            <p>craig connects</p>
          </div>
        </div>
        <div id="column-2">
          <h1 className="city">las vegas</h1>
          <div className="categories">
            {
              this.props.topCats.map(cat => (
                <div className={`category col-${cat.id}`} key={`"key-"${cat.id}`}>
                  <Link to={`/top-category/${cat.id}`}><h1>{cat.name}</h1></Link>
                  {this.props.cats.map((item,i) =>(
                      <div key={`"item-"${i}`}>
                        <Link to={"/category/" + item.id}><p>{cat.id === item.parent_id? item.slug: ''}</p></Link>
                      </div>
                  ))}
                </div>
              ))
            }
          </div>
        </div>
        <div id="column-3">
          <select>
            <option value="en">english</option>
            <option value="es">espa&ntilde;ol</option>
            <option value="it">italiano</option>
          </select>
          <h3 className="selected">nearby cl</h3>
          <div id="cities">
            <p>bakersfield</p>
            <p>elko</p>
            <p>flagstaff</p>
            <p>resno</p>
            <p>gold country</p>
            <p>hanford</p>
            <p>imperial co</p>
            <p>inland empire</p>
            <p>los angeles</p>
            <p>merced</p>
            <p>modesto</p>
            <p>mohave co</p>
            <p>orange co</p>
            <p>palm springs</p>
            <p>phoenix</p>
            <p>prescott</p>
            <p>provo</p>
            <p>reno</p>
            <p>salt lake</p>
            <p>san diego</p>
            <p>san luis obispo</p>
            <p>santa barbara</p>
            <p>santa maria</p>
            <p>show low</p>
            <p>st george</p>
            <p>stockton</p>
            <p>tijuana</p>
            <p>ventura</p>
            <p>visalia-tulare</p>
            <p>yuma</p>
          </div>
          <h3>us cities</h3>
          <h3>us states</h3>
          <h3>canada</h3>
          <h3>cl worldwide</h3>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState){
  return {
    topCats: appState.topCats,
    cats: appState.cats
  }
}

export default connect(mapStateToProps)(Homepage)


// .map((cat, i) => (
//   <div key={`"key-"${cat.id}`}>
//     <p>{cat.name !== cat.name? cat.name: ''}</p>
//     <p>{cat.slug}</p>
//   </div>
// ))

// reduce((a,b) => (
//   a.parent_id !== b.parent_id? a: ''
// ))

// ,
//               "id": id,
//               "name": name,
//               "slug": slug