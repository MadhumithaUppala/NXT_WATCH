import React from 'react'
import ReactDOM from 'react-dom/client'
import {configureStore} from '@reduxjs/toolkit'

import {Provider} from 'react-redux'

import App from './App'
import saveReducer from './reducers/saveSlice'
import filterReducer from './reducers/filterSlice'

import './App.css'

const store = configureStore({
  reducer: {
    save: saveReducer,
    filterhome: filterReducer,
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
