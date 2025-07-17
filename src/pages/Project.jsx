import React from 'react';
import { useParams } from 'react-router-dom';

export default function Project() {
  const { slug } = useParams();

  return (
    <div className="project">
      <h1>{slug.replace('-', ' ')}</h1>
      <p><strong>Year:</strong> 2025</p>
      <p><strong>Client:</strong> Placeholder Client</p>
      <div className="media">
        <img src="/placeholder.jpg" alt="Project visual" />
        <p>Main description text here.</p>
        <img src="/placeholder2.jpg" alt="Project visual 2" />
        <p>More detailed caption or explanation.</p>
      </div>
    </div>
  );
}
