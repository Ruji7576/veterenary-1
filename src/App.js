import React from "react"
import PatientForm from "./components/PatientForm"
import Header from "./components/Header"
import Patient from "./components/Patient"
class App extends React.Component {

  render() {
    return(
      <div>
      <Header title="Anime"/>
      <main>
        <PatientForm/>
        <Patient />
      </main>
      </div>)
    }
  }
export default App