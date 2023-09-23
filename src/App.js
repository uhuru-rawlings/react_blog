import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Blogs } from './components/Blogs/Blogs';
import { Forms } from './components/Forms/Forms';
import { Blog } from './components/Blog/Blog';

function App() {
  return (
     <Router>
        <Routes>
          <Route exact path='/' element={<Blogs />}/>
          <Route exact path='/blog/:id' element={<Blog />}/>
          <Route exact path='/blog/new' element={<Forms />}/>
        </Routes>
     </Router>
  );
}

export default App;
