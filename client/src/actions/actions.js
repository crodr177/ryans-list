import store from '../store'
import axios from 'axios'

export function getTopCategories(){
  axios.get('/api/').then(resp => {
    store.dispatch({
      type: 'GET_TOP_CATS',
      topCats: resp.data
    })
  })
}

export function getCategories(){
  axios.get('/api/categories').then(resp => {
    store.dispatch({
      type:'GET_CATS',
      cats: resp.data
    })
  })
}

export function getSelectedCat(id){
  axios.get('/api/category/' + id).then(resp => {
    const title = resp.data
    store.dispatch({
      type: 'GET_SELECTED_CAT',
      catData: resp.data,
      catTitle: title[0].name
    })
  })
}

export function creatingPost(id, {title, desc, image}) {
  axios.post("/api/category/" + id, {title, desc, image})
}

export function getPost(id){
  axios.get('/api/post/'+ id).then(resp => {
    const cat = resp.data
    store.dispatch({
      type: 'GET_POST',
      postData: resp.data,
      cat: cat[0].category_id
    })
  })
}

export function getTopCatSelected(id){
  axios.get('/api/top-category/' + id).then(resp => {
    store.dispatch({
      type: 'GET_TOP_CAT_SELECTED',
      topCatSelected: resp.data
    })
  })
}