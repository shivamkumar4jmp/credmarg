// src/components/SendEmail.js
import React, { useState, useEffect } from 'react';
import api from '../api';

function SendEmail() {
    const [vendors, setVendors] = useState([]);
    const [selectedVendors, setSelectedVendors] = useState([]);

    useEffect(() => {
        api.get('/vendors')
            .then(response => setVendors(response.data))
            .catch(error => console.error('Error fetching vendors:', error));
    }, []);

    const handleSendEmail = () => {
        api.post('/vendors/sendEmail', selectedVendors)
            .then(response => alert('Emails sent!'))
            .catch(error => console.error('Error sending emails:', error));
    };

    return (
        <div>
            <h2>Send Email to Vendors</h2>
            <ul>
                {vendors.map(vendor => (
                    <li key={vendor.email}>
                        <input
                            type="checkbox"
                            value={vendor.email}
                            onChange={e => {
                                if (e.target.checked) {
                                    setSelectedVendors([...selectedVendors, vendor.email]);
                                } else {
                                    setSelectedVendors(selectedVendors.filter(email => email !== vendor.email));
                                }
                            }}
                        />
                        {vendor.name} - {vendor.upi}
                    </li>
                ))}
            </ul>
            <button onClick={handleSendEmail}>Send Email</button>
        </div>
    );
}

export default SendEmail;
