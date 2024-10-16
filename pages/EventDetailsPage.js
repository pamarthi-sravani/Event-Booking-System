// src/pages/EventDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import EventDetail from '../components/EventDetail';
import mockEvents from '../mockData/mockEvents';

const EventDetailsPage = () => {
  const { id } = useParams();
  const event = mockEvents.find((e) => e.id === parseInt(id));

  return event ? <EventDetail event={event} /> : <p>Event not found</p>;
};

export default EventDetailsPage;
