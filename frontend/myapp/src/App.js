import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import Register from './components/Reg';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Doctor from './components/Doctor';
import Patient from './components/Patient';
import ViewDoc from './components/ViewDoc';
import GetAppointment from './components/BookAppointment';
import PatientProfile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/viewdoc" element={<ViewDoc />} />
        <Route path="/book-appointment" element={<GetAppointment />} />
        <Route path="/profile" element={<PatientProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
