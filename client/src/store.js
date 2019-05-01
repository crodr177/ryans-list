import { createStore } from 'redux'

import reducer from './reducers/categoriesReducer'

const store = createStore(reducer)

export default store
