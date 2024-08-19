import React from "react";

const AppointmentPerfil = ({appointmentPerfil}) => {
return (
    <div className="perfil-form">
        {appointmentPerfil.map(perfil => (
            <div key={perfil.id} className="form">
                        <h3>{perfil.name || 'Unknown Name'}</h3>
                    {perfil.profileImage && <img src={perfil.profileImage} alt={`${perfil.name}'s profile`} className="patient-profile-image" />}
                    <p>Age: {perfil.age || 'N/A'}</p>
                    <p>Breed: {perfil.breed || 'N/A'}</p>
                    <p>Gender: {perfil.gender || 'N/A'}</p>
                    <p>Identification Number: {perfil.identificationNumber || 'N/A'}</p>
                    <p>Tutor: {perfil.tutorFirstName || ''} {perfil.tutorLastName || ''}</p>
                    <p>Tutor Phone Number: {perfil.tutorPhoneNumber || 'N/A'}</p>
                    <p>Treatment: {perfil.treatment || 'N/A'}</p>
            </div>
        ))}
    </div>
)

}
export default AppointmentPerfil