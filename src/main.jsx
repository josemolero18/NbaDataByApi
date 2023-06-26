import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { NbaDataByAPI } from './NbaDataByAPI'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NbaDataByAPI/>
    </BrowserRouter>
  </React.StrictMode>,
)
