
import { Route, Routes } from 'react-router-dom'
import Dash from './pages/Dash'
import Learn from './pages/Learn'
import Tasks from './pages/Tasks'
import Team from './pages/Team'
import Award from './pages/Award'


const App = () => {
  return (
    <div >
     <Routes>
      <Route path='/' element={<Dash />} />
      <Route path='/learn' element={<Learn />} />
      <Route path='/tasks' element={<Tasks />} />
      <Route path='/team' element={<Team />} />
      <Route path='/award' element={<Award />} />
      
      </Routes> 
    </div>
  )
}

export default App
