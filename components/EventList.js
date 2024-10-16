// src/components/EventList.js
import React, { useState, useMemo } from 'react';
import EventCard from './EventCard';

const EventList = ({ events }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  const paginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * eventsPerPage;
    return events.slice(startIndex, startIndex + eventsPerPage);
  }, [events, currentPage]);

  const totalPages = Math.ceil(events.length / eventsPerPage);

  return (
    <div>
      {paginatedEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventList;
