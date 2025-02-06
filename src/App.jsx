import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Doctor from './components/Doctor'
import Patient from './components/Patient'
import Pharmacist from './components/Pharmacist'
import PharmaDash from './components/PharmacyDash'
import DoctorDash from './components/DoctorDashBoard'
import UserDash from './components/PatientDashBoard'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Doctor' element={<Doctor/>}/>
      <Route path='/Patient' element={<Patient/>}/>
      <Route path='/Pharmacist' element={<Pharmacist/>}/>
      <Route path='/pharmadash' element={<PharmaDash/>}/>
      <Route path='/doctordash' element={<DoctorDash/>}/>
      <Route path='/patientdash' element={<UserDash/>}/>
    </Routes>
  )
}

export default App
