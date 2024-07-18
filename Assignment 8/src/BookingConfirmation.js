import React from 'react';
import { useLocation } from 'react-router-dom';
import './BookingConfirmation.css';

const BookingConfirmation = () => {
  const { state } = useLocation();

  return (
    <div className="booking-confirmation">
      <h2>Booking Confirmed!</h2>
      <p>Booking ID: {state.bookingId}</p>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
    </div>
  );
};

export default BookingConfirmation;
