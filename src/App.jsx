import {Route, Routes} from 'react-router'
import NotesPage from './pages/NotesPage'
import NotesCreated from './pages/NotesCreated'
import NotesDetail from './pages/NotesDetail'

const App = () => {
  return (
    <div className='relative h-full w-full' >
      <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]' />     
      <Routes>
        <Route path='/' element={<NotesPage />} />
        <Route path='/create' element={<NotesCreated />} />
        <Route path='/note/:id' element={<NotesDetail />} />
      </Routes>
    </div>
  )
}

export default App