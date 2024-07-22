// src/components/EmployeeList.js
import React, { useEffect, useState } from 'react';
import api from '../api';

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        api.get('/employees')
            .then(response => setEmployees(response.data))
            .catch(error => console.error('Error fetching employees:', error));
    }, []);

    return (
        <div>
            <h2>Employees</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.email}>
                        {employee.name} - {employee.designation} - {employee.ctc}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;
