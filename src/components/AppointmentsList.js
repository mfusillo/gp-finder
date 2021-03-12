/* eslint-disable no-undef */
import React from "react";

export const AppointmentsList = ({ appointmentsList }) => {
  return (
    <>
      <h2>Appointments</h2>
      {appointmentsList.map((appointment, index) => (
        <ul key={index}>
          <li>{appointment.label}</li>
          <li>{appointment.name}</li>
          <li>{appointment.email}</li>
          <li>{new Date(appointment.datetime).toDateString()}</li>
        </ul>
      ))}
    </>
  );
};

export default AppointmentsList;
