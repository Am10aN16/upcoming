import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Contactus from './pages/Contactus';
import Events from './pages/Events';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Developers from './pages/Developers'
import Team from './pages/Team';
import Sidebar from './components/Sidebar';

function App() {
  return (
   <>
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ourdevelopers" element={<Developers />} />
          <Route path="/ourteam" element={<Team />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </Sidebar>
    </Router>
   </>
  );
}

export default App;
