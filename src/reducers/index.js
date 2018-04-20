import { combineReducers } from 'redux'

import entitiesReducer from './modules/search'

const rootReducer = combineReducers({
  entities: entitiesReducer
})

export default rootReducer
