import React from "react"
import '../css/patient-management-styles.css';
const AppointmentList = ({appointments, deleteAppointment, importAppointment}) => {
    if (!appointments || appointments.length === 0) {
        return <div>No appointments available.</div>
    }
return (
<div className="appointment-list">
<h2>Appointment List</h2>
            {appointments.map(appointment => (
                <div key={appointment.id} className="appointment-card">
                    <p>dateTime: {appointment.dateTime || 'N/A'}</p>
                    <p>consultationType: {appointment.consultationType || 'N/A'}</p>
                    <p>reason: {appointment.reason || 'N/A'}</p>
                    <p>status: {appointment.status ? 'terminated' : 'not terminated'}</p>
                    <button className="btn btn-delete" onClick={() => deleteAppointment(appointment.id)} type="button">Delete</button>
                    <button className="btn btn-update" onClick={() => importAppointment(appointment)} type="button">update</button>
        </div>
    ))}
</div>
)
}
export default AppointmentList