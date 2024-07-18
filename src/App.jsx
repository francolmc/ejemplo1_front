import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Counter from './pages/Counter'
import CreateTask from './pages/CreateTask'
import EditTask from './pages/EditTask'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks/create' element={<CreateTask />} />
        <Route path='/tasks/edit/:id' element={<EditTask />} />
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </Router>
  )
}

export default App
