// src/components/AddEmployee.js
import React, { useState } from 'react';
import api from '../api';

function AddVendor() {
    const [vendor, setVendor] = useState({
        email: '',
        name: '',
        upi: '',
    });

    const handleChange = (e) => {
        setVendor({
            ...vendor,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/vendors', vendor)
            .then(response => {
                console.log('Vendor added:', response.data);
                alert('Vendor added successfully!');
                setVendor({
                    name: '',
                    designation: '',
                    ctc: '',
                    email: '',
                });
            })
            .catch(error => console.error('Error adding Vendor:', error));
    };

    return (
       <div className='container'> 
        <form onSubmit={handleSubmit}>
            <h2>Add Vendor</h2>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={vendor.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={vendor.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>UPI</label>
                <input
                    type="text"
                    name="upi"
                    placeholder="vpa"
                    value={vendor.upi}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className='btn' type="submit">Add Vendor</button>
        </form>
        </div>
    );
}

export default AddVendor;
