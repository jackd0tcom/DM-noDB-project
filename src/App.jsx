import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SetList from './components/setList'

function App({baseList}) {
  return (
    <SetList initialSetList={baseList}/>
  )
}

export default App
