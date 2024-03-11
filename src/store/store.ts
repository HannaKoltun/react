import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/slice'

const rootReduce = {
  counter: counterReducer
}

export default configureStore({
  reducer: rootReduce,
})