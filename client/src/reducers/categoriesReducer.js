const initialState = {
  topCats: [],
  cats: [],
  catData: [],
  catTitle: '',
  postData: [],
  cat: '',
  topCatSelected: []
}

export default function(state = initialState, action){
  switch(action.type){
    case 'GET_TOP_CATS':
      return{...state, topCats: action.topCats}
    case 'GET_CATS':
      return{...state, cats: action.cats}
    case 'GET_SELECTED_CAT':
      return{...state, catData: action.catData, catTitle: action.catTitle}
    case 'GET_POST':
      return{...state, postData: action.postData, cat: action.cat}
    case 'GET_TOP_CAT_SELECTED':
      return{...state, topCatSelected: action.topCatSelected}
    default:
      return state
  }
}