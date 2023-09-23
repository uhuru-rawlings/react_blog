import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Blogs } from './components/Blogs/Blogs';

function App() {
  return (
     <Router>
        <Routes>
          <Route exact path='/' element={<Blogs />}/>
        </Routes>
     </Router>
  );
}

export default App;
