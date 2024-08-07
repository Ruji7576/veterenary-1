import React from 'react';
const PatientList = ({ patients, deletePatient, newPatient, updatePatient, importPatient }) => {
// const newPatient = newPatient;
    if (!patients || patients.length === 0) {
        return <div>No patients found.</div>;
    }

    return (
        <div>
            <h2>Patient List</h2>
            {patients.map(newPatient => (
                <div key={newPatient.id || Math.random()}>
                    <h3>{newPatient.name || 'Unknown Name'}</h3>
                    <p>Age: {newPatient.age || 'N/A'}</p>
                    <p>Breed: {newPatient.breed || 'N/A'}</p>
                    <p>Gender: {newPatient.gender || 'N/A'}</p>
                    <p>Identification Number: {newPatient.identificationNumber || 'N/A'}</p>
                    <p>Tutor: {newPatient.tutorFirstName || ''} {newPatient.tutorLastName || ''}</p>
                    <p>Tutor Phone Number: {newPatient.tutorPhoneNumber || 'N/A'}</p>
                    <p>Treatment: {newPatient.treatment || 'N/A'}</p>
                    {newPatient.profileImage && <img src={newPatient.profileImage} alt={`${newPatient.name}'s profile`} style={{ width: '100px', height: '100px' }} />}
                    <button onClick={() => deletePatient(newPatient.id || Math.random())} type="button">delete</button>
                    <button onClick={() => importPatient(newPatient)} type="button">Update patient</button>
                    <button type="button">see all appointments</button>
                </div>
            ))}
        </div>
    );
};

export default PatientList;