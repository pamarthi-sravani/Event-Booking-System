// src/pages/Home.js
import React, { useState } from 'react';
import EventCard from '../components/EventCard';


const Home = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Concert', description: 'Live concert', date: '2024-10-20', availableSeats: 5 },
    { id: 2, title: 'Art Exhibition', description: 'An exhibition of modern art', date: '2024-11-15', availableSeats: 0 },
    { id: 3, title: 'Rockstar concert', description: 'DSP music', date: '2024-12-25', availableSeats: 7 },
    { id: 4, title: 'exhibition', description: 'play zone', date: '2024-11-15', availableSeats: 10 },
    { id: 5, title: 'rocking dance', description: 'dance', date: '2024-11-15', availableSeats: 16},
    { id: 6, title: 'fun club', description: 'play', date: '2024-11-15', availableSeats: 8 },
    { id: 7, title: 'classical culture', description: ' traditional event', date: '2024-11-15', availableSeats: 20 },
  ]);

  const handleBookTicket = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId && event.availableSeats > 0
          ? { ...event, availableSeats: event.availableSeats - 1 }
          : event
      )
    );
  };

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onBook={handleBookTicket} />
      ))}
    </div>
  );
};

export default Home;
