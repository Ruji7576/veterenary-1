import React from "react"
import '../css/patient-management-styles.css';
const AppointmentList = ({appointments, deleteAppointment, importAppointment}) => {
    if (!appointments || appointments.length === 0) {
        return <div>No appointments available.</div>
    }
return (
<div className="appointment-list">
<h2 className="patient-list-title">List</h2>
            {appointments.map(appointment => (
                <div key={appointment.id} className="appointment-card">
                    <p>Date: {appointment.dateTime || 'N/A'}</p>
                    <p>Consultation type: {appointment.consultationType || 'N/A'}</p>
                    <p>Reason: {appointment.reason || 'N/A'}</p>
                    <p>Status: {appointment.status ? 'terminated' : 'not terminated'}</p>
                    <button className="btn btn-delete" onClick={() => deleteAppointment(appointment.id)} type="button">Delete</button>
                    <button className="btn btn-update" onClick={() => importAppointment(appointment)} type="button">update</button>
        </div>
    ))}
</div>
)
}
export default AppointmentList