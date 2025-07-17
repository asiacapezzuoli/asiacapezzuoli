import React from 'react';
import { Link } from 'react-router-dom';
import BioSidebar from './components/BioSidebar';
import './App.css';

const projects = [
  { slug: 'project-1', title: 'Project 1' },
  { slug: 'project-2', title: 'Project 2' },
];

export default function App() {
  return (
    <div className="container">
      <div className="scroll">
        {projects.map((p) => (
          <Link key={p.slug} to={`/project/${p.slug}`} className="card">
            <h2>{p.title}</h2>
          </Link>
        ))}
      </div>
      <BioSidebar />
    </div>
  );
}
