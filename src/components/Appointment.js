import { useEffect, useState } from "react";
import AppointmentForm from './AppointmentForm'
import { useParams } from "react-router-dom";
import AppointmentList from './AppointmentList'
import axios from "axios";
const Appointment =() => {
    const { patientId } = useParams()
    const[appointments, setAppointments] = useState([]);
    const[isImportAppointment, setIsImportAppointment] = useState(false);
    const[newAppointment, setNewAppointment] = useState({
    dateTime: '',
    consultationType: '',
    reason: '',
    status: false,
    patient: { id: patientId }
    });
    useEffect(() => {
        if (!patientId) return;

        const getAllAppointments = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/appointments/${patientId}`);
                setAppointments(response.data);
            } catch (error) {
                console.error("Failed to fetch appointments", error);
            }
        };

        getAllAppointments();
    }, [patientId]);

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setNewAppointment({
            ...newAppointment,
            [e.target.name]: value
        });
    };

    const addAppointment = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:8080/appointments', newAppointment);
        setAppointments([...appointments, response.data])
        setNewAppointment({
            dateTime: '',
            consultationType: '',
            reason: '',
            status: false,
            patient: { id: patientId }
        });
    }

    const deleteAppointment = async(id) => {
        await axios.delete(`http://localhost:8080/appointments/${id}`)
        setAppointments(appointments.filter(appointments => appointments.id !==id))
    }

    const updateAppointment = async (id, newAppointment) => {
        const updatedAppointment = {
            ...newAppointment,
            patient: { id: patientId }
        };
        await axios.put(`http://localhost:8080/appointments/${id}`, updatedAppointment)
        setAppointments(prevAppointments =>
            prevAppointments.map(appointment =>
                appointment.id === id ? { ...appointment, ...newAppointment } : appointment
            )
        );
        setNewAppointment({
            dateTime: '',
            consultationType: '',
            reason: '',
            status: false,
            patient: { id: patientId }
        });
    }

    const importAppointment = appointment => {
        setNewAppointment(appointment);
        setIsImportAppointment(true);
    };

    const cancelImport = () => {
        setIsImportAppointment(false);
        setNewAppointment({
            dateTime: '',
            consultationType: '',
            reason: '',
            status: false,
            patient: { id: patientId }
        });
      };

    return (
    <div className="list">
        <AppointmentForm
        setIsImportAppointment={setIsImportAppointment}
        handleChange={handleChange}
        isImportAppointment={isImportAppointment}
        importAppointment={importAppointment}
        newAppointment={newAppointment}
        setNewAppointment={setNewAppointment}
        addAppointment={addAppointment}
        updateAppointment={updateAppointment}
        cancelImport={cancelImport}
        />
        <AppointmentList
        appointments={appointments}
        deleteAppointment={deleteAppointment}
        importAppointment={importAppointment}
        />
    </div>
    )
}

export default Appointment