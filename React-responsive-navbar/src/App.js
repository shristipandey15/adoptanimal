import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import  Dogs  from "./components/Navbar/Dogs";
import  Cats from "./components/Navbar/Cats";
import Login from './components/Navbar/Login';
import Signup from './components/Navbar/Signup';
import Adopt from './components/Navbar/Adopt';
import Petcares from './components/Navbar/Petcare';


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
          <Route path="/PETCARE" element={<Petcares/>} />
            <Route path="/dog" element={<Dogs />} />
            <Route path="/cat" element={<Cats />} />
            <Route path="/adopted" element={<Adopt/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
