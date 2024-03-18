import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/slice'
import postReducer from '../slice/postSlice'

const rootReduce = {
  counter: counterReducer,
  posts: postReducer
}

export default configureStore({
  reducer: rootReduce,
})

