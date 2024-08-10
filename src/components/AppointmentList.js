import React from "react"
const AppointmentList = ({appointments}) => {
    if (!appointments || appointments.length === 0) {
        return <div>No appointments available.</div>
    }
return (
<div>
<h2>Appointment List</h2>
            {appointments.map(appointment => (
                <div key={appointment.id}>
                    <p>{appointment.dateTime}</p>
                    <p>{appointment.consultationType}</p>
                    <p>{appointment.reason}</p>
                    <p>{appointment.status.toString()}</p>
                    
            {/* <button onClick={() => deleteAppointment(appointment.id)} type="button">delete</button> */}
            {/* <button onClick={() => isInportAppointment(appointment)} type="button">update</button>    */}
        </div>
    ))}
</div>
)
}
export default AppointmentList