import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Counter from './pages/Counter'
import TasksPage from './pages/Tasks'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/tasks/create' element={<CreatePage />} />
        <Route path='/tasks/edit/:id' element={<EditPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </Router>
  )
}

export default App
