import { useState } from 'react'
import './App.css'
import SetList from './components/setList'

function App({baseList}) {
  return (
    <SetList initialSetList={baseList}/>
  )
}

export default App
