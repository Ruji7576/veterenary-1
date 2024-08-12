import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/patient-management-styles.css';
const PatientList = ({ patients, deletePatient, importPatient }) => {
const navigate = useNavigate();
    if (!patients || patients.length === 0) {
        return <div>No patients found.</div>;
    }

    return (
        <div className="patient-page">
            <h2 className="patient-list-title">Patient List</h2>
            <div className="patient-list">
            {patients.map(patient => (
                <div key={patient.id} className="patient-card">
                    <h3>{patient.name || 'Unknown Name'}</h3>
                    {patient.profileImage && <img src={patient.profileImage} alt={`${patient.name}'s profile`} className="patient-profile-image" />}
                    <p>Age: {patient.age || 'N/A'}</p>
                    <p>Breed: {patient.breed || 'N/A'}</p>
                    <p>Gender: {patient.gender || 'N/A'}</p>
                    <p>Identification Number: {patient.identificationNumber || 'N/A'}</p>
                    <p>Tutor: {patient.tutorFirstName || ''} {patient.tutorLastName || ''}</p>
                    <p>Tutor Phone Number: {patient.tutorPhoneNumber || 'N/A'}</p>
                    <p>Treatment: {patient.treatment || 'N/A'}</p>
                    <button className="btn btn-delete" onClick={() => deletePatient(patient.id || Math.random())} type="button">Delete</button>
                    <button className="btn btn-update" onClick={() => importPatient(patient)} type="button">Update patient</button>
                    <button className="btn btn-view" onClick={() => navigate(`/patients/${patient.id}/appointments`)} type="button">See all appointments</button>
                </div>
            ))}
            </div>
        </div>
    );
};

export default PatientList;