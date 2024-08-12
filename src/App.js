import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientForm from "./components/PatientForm";
import Header from "./components/Header";
import Patient from "./components/Patient";
import AppointmentForm from './components/AppointmentForm';
import Appointment from './components/Appointment'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header title="Veterinary clinic" />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Patient />
                </>
              } />
              <Route path="/patients/:patientId/appointments" element={
                <>
                <Appointment />
                </>
                } />
            </Routes>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
