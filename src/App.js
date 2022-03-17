import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Student from './components/Student';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Reviews from './components/Reviews';
import CV from './components/CV'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/student/:id" element={<Student />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
