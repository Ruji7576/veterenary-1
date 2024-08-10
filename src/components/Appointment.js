import { useEffect, useState } from "react";
import AppointmentForm from './AppointmentForm'
import { useParams } from "react-router-dom";
import AppointmentList from './AppointmentList'
import axios from "axios";
const Appointment =() => {
    const { patientId } = useParams()
    const[appointments, setAppointments] = useState([]);
    const[isInportAppointment, setIsInportAppointment] = useState(false);
    const[newAppointment, setNewAppointment] = useState({
    dateTime: '',
    consultationType: '',
    reason: '',
    status: ''
    });
    useEffect(() => {
        if (!patientId) return;

        const getAllAppointments = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/patients/${patientId}/appointments`);
                setAppointments(response.data);
            } catch (error) {
                console.error("Failed to fetch appointments", error);
            }
        };

        getAllAppointments();
    }, [patientId]);

    const addAppointmnet = async () => {
        const responce = await axios.post('/api/patients/appointments', newAppointment);
        setAppointments([...appointments, responce.data])
    }

    return (
        <div className="list">
        <AppointmentList
            appointments={appointments}
        >
            <AppointmentForm
                newAppointment={newAppointment}
                setNewAppointment={setNewAppointment}
            />
        </AppointmentList>
    </div>
    )
}

export default Appointment