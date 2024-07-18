import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 100000);
    navigate('/confirmation', { state: { bookingId, name, email, mobile, movieId: id } });
  };

  return (
    <div className="booking-form">
      <h2>Book Seat</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="tel" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
