import { useEffect, useState } from "react"
import PatientList from './PatientList'
import PatientForm from './PatientForm';
import axios from "axios";
import '../css/list.css'
const Patient =()=> {
    const[patients, setPatients] = useState([]);
    const [isImporting, setIsImporting] = useState(false);
    const [newPatient, setNewPatient] = useState({
        name: '',
        age: '',
        breed: '',
        gender: '',
        identificationNumber: '',
        tutorFirstName: '',
        tutorLastName: '',
        tutorPhoneNumber: '',
        treatment: '',
        profileImage: ''
    });

    const handleChange = (e) => {
        setNewPatient({
            ...newPatient,
            [e.target.name]: e.target.value
        });
    };
    const addPatient = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:8080/api/patients', newPatient);
        setPatients([...patients, response.data]);
        setNewPatient({
            name: '',
            age: '',
            breed: '',
            gender: '',
            identificationNumber: '',
            tutorFirstName: '',
            tutorLastName: '',
            tutorPhoneNumber: '',
            treatment: '',
            profileImage: ''
        });

    }
    const updatePatient = async (id, newPatient) => {
        await axios.put(`http://localhost:8080/api/patients/${id}`, newPatient);
    }

    const deletePatient = async(id) => {
        await axios.delete(`http://localhost:8080/api/patients/${id}`)
        setPatients(patients.filter(patient => patient.id !== id));
    }
    
    useEffect(() => {
        const instance = axios.create({
            baseURL: 'http://localhost:8080/api/patients',
        });

        const getAllPatients = async () => {
            const response = await instance.get('');
            setPatients(response.data)
        };

        getAllPatients();
    }, []);

    const importPatient = patient => {
        setNewPatient(patient);
        setIsImporting(true);
    };
    
return (
<div className="list">
     <h1 className="name-of-list">Patient List </h1>
            <PatientForm 
                handleChange={handleChange} 
                addPatient={addPatient} 
                newPatient={newPatient}
                isImporting={isImporting}
            />
     <PatientList 
     patients={patients}
     deletePatient={deletePatient}
     newPatient={newPatient}
        updatePatient={updatePatient}
        importPatient={importPatient}    
     />
</div>);
};

export default Patient;