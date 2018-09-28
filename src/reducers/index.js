import { combineReducers } from 'redux'
import catalogReducer from '../components/pages/Catalog/reducer/catalogReducer'

const rootReducer = combineReducers({
  catalog: catalogReducer
})

export default rootReducer
