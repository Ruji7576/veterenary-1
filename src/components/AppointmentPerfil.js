import React from "react";
import '../css/Perfil.css'
import defaultImage from '../Deffault_image/deffault_image.png';
const AppointmentPerfil = ({ appointmentPerfil }) => {
    return (
        <div className="perfil-form">
            {appointmentPerfil.map(perfil => (
                <div key={perfil.id} className="form">
                    <img
                        src={perfil.profileImage || defaultImage} 
                        alt={`${perfil.name}'s profile`}
                        className="patient-profile-image"
                    />
                    <h3>
                        {perfil.name || 'Unknown Name'}
                        <span className="tutor">
                            {perfil.tutorFirstName && perfil.tutorLastName ? ` (Tutor: ${perfil.tutorFirstName} ${perfil.tutorLastName})` : ''}
                        </span>
                    </h3>
                    <div className="text-container">
                        <div className="text-column">
                            <p><strong>Age:</strong> {perfil.age || 'N/A'}</p>
                            <p><strong>Breed:</strong> {perfil.breed || 'N/A'}</p>
                            <p><strong>Gender:</strong> {perfil.gender || 'N/A'}</p>
                        </div>
                        <div className="text-column">
                            <p><strong>Identification Number:</strong> {perfil.identificationNumber || 'N/A'}</p>
                            <p><strong>Tutor Phone Number:</strong> {perfil.tutorPhoneNumber || 'N/A'}</p>
                            <p><strong>Treatment:</strong> {perfil.treatment || 'N/A'}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AppointmentPerfil;