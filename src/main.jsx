import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'

axios.get('/list')
  .then(({data}) => {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App baseList={data}/>
      </React.StrictMode>,
    )
  })
  .catch(err => console.log(err))
