// src/components/VendorList.js
import React, { useEffect, useState } from 'react';
import api from '../api';

function VendorList() {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        api.get('/vendors')
            .then(response => setVendors(response.data))
            .catch(error => console.error('Error fetching vendors:', error));
    }, []);

    return (
        <div>
            <h2>Vendors</h2>
            <ul>
                {vendors.map(vendor => (
                    <li key={vendor.email}>
                        {vendor.name} - {vendor.upi}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VendorList;
