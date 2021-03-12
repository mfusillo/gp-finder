/* eslint-disable no-undef */
import React, { useState } from "react";
import "./AppointmentForm.css";

export const AppointmentForm = ({
  doctorsPosition,
  appointmentsList,
  setAppointmentsList,
}) => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: "",
    email: "",
    datetime: "",
  });

  const handleSubmit = () => {
    if (
      appointmentDetails.name.length === 0 ||
      appointmentDetails.email.length === 0 ||
      appointmentDetails.datetime.length === 0
    ) {
      alert("Please fill in all fields before submitting");
    } else {
      setAppointmentsList([...appointmentsList, appointmentDetails]);
      alert("Booking successful!");
    }
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setAppointmentDetails((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <>
      <h2>{doctorsPosition.label}</h2>
      <form className="form-container" onSubmit={() => {}}>
        <label>
          Name
          <input
            required
            className="text-input"
            name="name"
            type="text"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email
          <input
            required
            className="text-input"
            name="email"
            type="text"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Preferred Time
          <input
            required
            className="text-input"
            type="datetime-local"
            name="datetime"
            onChange={handleInputChange}
          />
        </label>
        <input
          style={{ marginTop: 10 }}
          type="button"
          value="Book Appointment"
          onClick={handleSubmit}
        />
      </form>
    </>
  );
};

export default AppointmentForm;
