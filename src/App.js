import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [conatcts, setContact] = useState([]);
  const [appointments, setAppointment] = useState([])
  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    const newArrayObject = {Name: `Name: ${name}`, phone: `Phone: ${phone}`, Email: `Email: ${email}`}
    setContact((conatcts) => [...conatcts, newArrayObject]);
  }

  const addAppointment = (title, contact, date, time) => {
    const newArrayObject = {title, contact, date, time}
    setAppointment((appointments) => [...appointments, newArrayObject]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={conatcts} addContact={addContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={conatcts} addAppointment={addAppointment}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
