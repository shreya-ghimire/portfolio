
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import Home from "./Home";
import Resume from './Resume'; 

function App() {
  return (
    <div className="App">
      
      <Router>
      
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for Home component */}
          <Route path="/resume" element={<Resume />} /> {/* Route for Resume component */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
