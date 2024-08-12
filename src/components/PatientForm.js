import React from 'react';
import '../css/patient-management-styles.css';
const PatientForm = ({ handleChange, addPatient, newPatient, isImporting, updatePatient, setIsImporting, cancelImport}) => {
    if (!newPatient) {
        return <div></div>;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isImporting) {
            updatePatient(newPatient.id, newPatient);
            setIsImporting(false);
        } else {
            addPatient(e);
        }
    };
  
    return(
        <div>
        <h1 className="patient-list-title">Patient Form </h1>
        <form className="patient-form" onSubmit={handleSubmit}>
        <input name="name"  placeholder="Name" onChange={handleChange} value={newPatient.name}/>
        <input name="age"placeholder="Age"  onChange={handleChange} value={newPatient.age} />
        <input name="breed" placeholder="Breed" onChange={handleChange} value={newPatient.breed}/>
        <input name="gender" placeholder="Gender" onChange={handleChange} value={newPatient.gender}/>
        <input name="identificationNumber" placeholder="Identification Number" onChange={handleChange} value={newPatient.identificationNumber}/>
        <input name="tutorFirstName" placeholder="Tutor First Name" onChange={handleChange} value={newPatient.tutorFirstName}/>
        <input name="tutorLastName" placeholder="Tutor Last Name" onChange={handleChange} value={newPatient.tutorLastName}/>
        <input name="tutorPhoneNumber" placeholder="Tutor Phone Number" onChange={handleChange} value={newPatient.tutorPhoneNumber}/>
        <input name="treatment" placeholder="Treatment" onChange={handleChange} value={newPatient.treatment}/>
        <input name="profileImage" placeholder="Profile Image URL" onChange={handleChange} value={newPatient.profileImage}/>
        <div className="form-buttons">
        {isImporting ? (
          <>
            <button type="submit" className="btn btn-update">Save Changes</button>
            <button type="button" className="btn btn-cancel" onClick={cancelImport}>Cancel</button>
          </>
        ) : (
          <button type="submit" className="btn btn-add">Add Patient</button>
        )}
      </div>
    </form>
    </div>
    );
}
export default PatientForm