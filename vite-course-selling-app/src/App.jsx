
import './App.css'
import Signup from './Signup'
import Appbar from './Appbar'
import Signin from './Signin'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import AddCourse from './AddCourse'
import Course from './Course'

function App() {

  return (
    <div style={{ width : '100wv' , height : '100vh' , backgroundColor : '#eeeeee'}}>
      
      <Router>
        <Appbar />  
        <Routes>
          <Route path='/addcourse' element = {<AddCourse />}></Route>
          <Route path='/signin' element = {<Signin />}></Route>
          <Route path='/signup' element = {<Signup />}></Route>
          <Route path='/course' element = {<Course />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
