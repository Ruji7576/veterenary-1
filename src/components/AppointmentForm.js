import React from 'react';
import '../css/patient-management-styles.css';
const AppointmentForm = ({addAppointment, handleChange, newAppointment, isImportAppointment, setIsImportAppointment, updateAppointment}) => {
    if (!newAppointment) {
        return <div></div>;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isImportAppointment) {
             updateAppointment(newAppointment.id, newAppointment);
             setIsImportAppointment(false);
        } else {
            addAppointment(e);
        }
    };
    return (
        <form className="appointment-form" onSubmit={handleSubmit}> 
            <input name="dateTime" type="datetime-local" onChange={handleChange} value={newAppointment.dateTime}></input>
            <input name="consultationType" type="text" placeholder="consultationType" onChange={handleChange} value={newAppointment.consultationType}></input>
            <input name="reason" type="text" placeholder="reason" onChange={handleChange} value={newAppointment.reason}></input>
            <input name="status" type="checkbox" onChange={handleChange}  checked={newAppointment.status || false}></input>
            <button type="submit">{isImportAppointment ? 'Save Changes' : 'Add'}</button>
        </form>
        );
}
export default AppointmentForm