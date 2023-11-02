
import './App.css'
import Signup from './Signup'
import Appbar from './Appbar'
import Signin from './Signin'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import AddCourse from './AddCourse'

function App() {

  return (
    <div style={{ width : '100wv' , height : '100vh' , backgroundColor : '#eeeeee'}}>
      <Appbar />
      <Router>
        <Routes>
          <Route path='/addcourse' element = {<AddCourse />}></Route>
          <Route path='/signin' element = {<Signin />}></Route>
          <Route path='/signup' element = {<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
