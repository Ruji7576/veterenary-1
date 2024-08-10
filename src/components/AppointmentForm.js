const AppointmentForm = ({}) => {
    return (
        <form className="appointment-form">
            <input name="dateTime" type="datetime-local"></input>
            <input name="consultationType" type="text" placeholder="consultationType"></input>
            <input name="reason" type="text" placeholder="reason"></input>
            <input name="status" type="checkbox"></input>
            <button type="submit">Add</button>
        </form>
        )
}
export default AppointmentForm