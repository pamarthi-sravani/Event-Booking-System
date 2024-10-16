// src/components/BookingButton.js
import React from 'react';
import { useAuth } from '../context/AuthContext';

const BookingButton = ({ event, onBook }) => {
  const { isLoggedIn } = useAuth();

  const handleBooking = () => {
    if (event.availableSeats > 0) {
      onBook(event.id);
    } else {
      alert('No more seats available');
    }
  };

  return isLoggedIn ? (
    <button onClick={handleBooking} disabled={event.availableSeats === 0}>
      {event.availableSeats > 0 ? 'Book Ticket' : 'Fully Booked'}
    </button>
  ) : (
    <p>Please log in to book tickets.</p>
  );
};

export default BookingButton;
