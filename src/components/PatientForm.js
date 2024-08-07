import React from 'react';
import '../css/main.css';
const PatientForm = ({ handleChange, addPatient, newPatient, isImporting }) => {
    if (!newPatient) {
        return <div></div>;
    }
  
    return(
        <form className="patient-form" onSubmit={addPatient}>
        <input name="name"  placeholder="name" onChange={handleChange} value={newPatient.name}/>
        <input name="age"placeholder="age"  onChange={handleChange} value={newPatient.age} />
        <input name="breed" placeholder="breed" onChange={handleChange} value={newPatient.breed}/>
        <input name="gender" placeholder="gender" onChange={handleChange} value={newPatient.gender}/>
        <input name="identificationNumber" placeholder="identificationNumber" onChange={handleChange} value={newPatient.identificationNumber}/>
        <input name="tutorFirstName" placeholder="tutorFirstName" onChange={handleChange} value={newPatient.tutorFirstName}/>
        <input name="tutorLastName" placeholder="tutorLastName" onChange={handleChange} value={newPatient.tutorLastName}/>
        <input name="tutorPhoneNumber" placeholder="tutorPhoneNumber" onChange={handleChange} value={newPatient.tutorPhoneNumber}/>
        <input name="treatment" placeholder="treatment" onChange={handleChange} value={newPatient.treatment}/>
        <input name="profileImage" placeholder="profileImage" onChange={handleChange} value={newPatient.profileImage}/>
        <button type="submit">{isImporting ? 'Save Changes' : 'Add'}</button>
    </form>
    );
}
export default PatientForm