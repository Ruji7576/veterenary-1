import React from "react"
import '../css/Date.css'

const formatDate = (dateString) => {
    if (!dateString) return 'N/A'; 
    
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

const AppointmentList = ({appointments, deleteAppointment, importAppointment}) => {
    if (!appointments || appointments.length === 0) {
        return <div>No appointments available.</div>
    }
return (
<div className="appointment-list">
<h2 className="patient-list-title">List</h2>
            {appointments.map(appointment => (
                <div key={appointment.id} className="appointment-card">
                    <p className="date">Date: {formatDate(appointment.dateTime)}</p>
                    <p>Consultation type: {appointment.consultationType || 'N/A'}</p>
                    <p>Reason: {appointment.reason || 'N/A'}</p>
                    <p>Status: {appointment.status ? 'terminated' : 'not terminated'}</p>
                    <button className="btn btn-delete" onClick={() => deleteAppointment(appointment.id)} type="button">Delete</button>
                    <button className="btn btn-update" onClick={() => importAppointment(appointment)} type="button">Update</button>
        </div>
    ))}
</div>
)
}
export default AppointmentList