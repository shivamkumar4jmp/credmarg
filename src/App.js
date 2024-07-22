// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VendorList from "./component/VendorList";
import SendEmail from "./component/SendEmail";
import EmployeeList from "./component/EmployeeList";
import Shivam from "./component/Shivam";

import AddEmployee from "./component/AddEmployee";
import AddVendor from "./component/AddVendor";

const NotFound = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
    </>
  );
};
function App() {
  return (
    <Router>
      <nav>
        <ol>
        <li>
            <a  href="/add-employees">Add Employees</a>
          </li> 
          <li>
            <a  href="/add-vendor">Add Vendor</a>
          </li> 
          <li>
            <a href="/employees">Employees</a>
          </li>
          <li>
            <a href="/vendors">Vendors</a>
          </li>
          <li>
            <a href="/send-email">Send Email</a>
          </li>
        </ol>
      </nav>
      <Routes>
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/vendors" element={<VendorList />} />
        <Route path="/send-email" element={<SendEmail />} />
        <Route path="/add-employees" element={<AddEmployee />} />
        <Route path="/add-vendor" element={<AddVendor />} />
        <Route path="/" element={<Shivam />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
