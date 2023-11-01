import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup'
import Appbar from './Appbar'

function App() {

  return (
    <div style={{ width : '100wv' , height : '100vh' , backgroundColor : '#eeeeee'}}>
      <Appbar />
      <Signup />
    </div>
  )
}

export default App
