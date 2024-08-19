import React from 'react';

const AppointmentForm = ({addAppointment, handleChange, newAppointment, isImportAppointment, setIsImportAppointment, updateAppointment, cancelImport}) => {
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
        <div>
        <h1 className="patient-list-title">Form</h1>
        <form className="patient-form" onSubmit={handleSubmit}> 
            <div className="form-group"><input id="dateTime" name="dateTime" type="datetime-local" onChange={handleChange} value={newAppointment.dateTime}/></div>
            <input name="consultationType" type="text" placeholder="Consultation type" onChange={handleChange} value={newAppointment.consultationType}></input>
           <input name="reason" type="text" placeholder="Reason" onChange={handleChange} value={newAppointment.reason}></input>
           <div className='cheack-box'>
            <input name="status" type="checkbox" onChange={handleChange} checked={newAppointment.status || false}></input>
           <h1 className='cheack-box-text'>Terminated</h1>
           </div>
            {isImportAppointment ? (
          <>
            <button type="submit" className="btn btn-update">Save Changes</button>
            <button type="button" className="btn btn-cancel" onClick={cancelImport}>Cancel</button>
          </>
        ) : (
          <button type="submit" className="btn btn-add">Add appointment</button>
        )}
        </form>
        </div>
        );
}
export default AppointmentForm