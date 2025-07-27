import {Route, Routes} from 'react-router'
import NotesPage from './pages/NotesPage'
import NotesCreated from './pages/NotesCreated'
import NotesDetail from './pages/NotesDetail'

const App = () => {
  return (
    <div data-theme="forest">
      <button className='btn btn-primary'>Click</button>
      <Routes>
        <Route path='/' element={<NotesPage />} />
        <Route path='/create' element={<NotesCreated />} />
        <Route path='/note/:id' element={<NotesDetail />} />
      </Routes>
    </div>
  )
}

export default App