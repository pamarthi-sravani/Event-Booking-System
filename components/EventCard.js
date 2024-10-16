// src/components/EventCard.js
import React from 'react';

const EventCard = ({ event, onBook }) => {
  const handleBooking = () => {
    if (onBook) {
      onBook(event.id); // Call the onBook function passed as a prop
    } else {
      console.error('onBook function not passed!');
    }
  };

  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>Available Seats: {event.availableSeats}</p>
      <button onClick={handleBooking} disabled={event.availableSeats <= 0}>
        {event.availableSeats > 0 ? 'Book Ticket' : 'Sold Out'}
      </button>
    </div>
  );
};

export default EventCard;
