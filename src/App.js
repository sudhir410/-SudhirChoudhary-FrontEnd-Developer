import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error, Homepage } from './pages'
import { Header } from './components'

import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
