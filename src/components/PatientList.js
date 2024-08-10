import React from 'react';
import { useNavigate } from 'react-router-dom';
const PatientList = ({ patients, deletePatient, newPatient, updatePatient, importPatient }) => {
const navigate = useNavigate();
    if (!patients || patients.length === 0) {
        return <div>No patients found.</div>;
    }

    return (
        <div>
            <h2>Patient List</h2>
            {patients.map(patient => (
                <div key={patient.id}>
                    <h3>{patient.name || 'Unknown Name'}</h3>
                    <p>Age: {patient.age || 'N/A'}</p>
                    <p>Breed: {patient.breed || 'N/A'}</p>
                    <p>Gender: {patient.gender || 'N/A'}</p>
                    <p>Identification Number: {patient.identificationNumber || 'N/A'}</p>
                    <p>Tutor: {patient.tutorFirstName || ''} {patient.tutorLastName || ''}</p>
                    <p>Tutor Phone Number: {patient.tutorPhoneNumber || 'N/A'}</p>
                    <p>Treatment: {patient.treatment || 'N/A'}</p>
                    {patient.profileImage && <img src={patient.profileImage} alt={`${patient.name}'s profile`} style={{ width: '100px', height: '100px' }} />}
                    <button onClick={() => deletePatient(patient.id || Math.random())} type="button">delete</button>
                    <button onClick={() => importPatient(patient)} type="button">Update patient</button>
                    <button onClick={() => navigate(`/patients/${patient.id}/appointments`)} type="button">see all appointments</button>
                </div>
            ))}
        </div>
    );
};

export default PatientList;