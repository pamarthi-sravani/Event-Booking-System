// src/components/EventDetail.js
import React from 'react';
import BookingButton from './BookingButton';

const EventDetail = ({ event }) => (
  <div>
    <h2>{event.title}</h2>
    <p>{event.description}</p>
    <p>Category: {event.category}</p>
    <p>Date: {event.date}</p>
    <p>Price: ${event.price}</p>
    <p>Seats Available: {event.availableSeats}</p>
    <BookingButton event={event} />
  </div>
);

export default EventDetail;
