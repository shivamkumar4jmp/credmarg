// src/components/AddEmployee.js
import React, { useState } from 'react';
import api from '../api';
import '../component/AddForm.css'
function AddEmployee() {
    const [employee, setEmployee] = useState({
        name: '',
        designation: '',
        ctc: '',
        email: '',
    });

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/employees', employee)
            .then(response => {
                console.log('Employee added:', response.data);
                alert('Employee added successfully!');
                setEmployee({
                    name: '',
                    designation: '',
                    ctc: '',
                    email: '',
                });
            })
            .catch(error => console.error('Error adding employee:', error));
    };

    return (
        <div className='container'>

        <form onSubmit={handleSubmit}>
            <h2>Add Employee</h2>
            <div >
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={employee.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Designation:</label>
                <input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    value={employee.designation}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>CTC:</label>
                <input
                    type="number"
                    name="ctc"
                    placeholder="CTC"
                    value={employee.ctc}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={employee.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <button   className='btn' type="submit">Add Employee</button>
        </form>
        </div>

    );
}

export default AddEmployee;
