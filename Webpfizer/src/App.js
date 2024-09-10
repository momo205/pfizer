import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';  // Assuming this is your home page
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';  
import PatientPage from './pages/patient'; 
function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path='/' element={<Home />} />

        {/* Sign In route */}
        <Route path='/sign-in' element={<SignIn />} />

        {/* Sign Up route */}
        <Route path='/sign-up' element={<SignUp />} />

        {/* Patient route after successful login */}
        <Route path='/pages/patient' element={<PatientPage />} />

        {/* Add more routes as necessary */}
      </Routes>
    </Router>
  );
}

export default App;
