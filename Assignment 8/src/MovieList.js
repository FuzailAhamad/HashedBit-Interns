import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const movies = [
  { id: 1, title: 'The Gangster, The Cop, The Devil', img: '/the-gangster-the-cop-the-devil.jpg' },
  { id: 2, title: 'Ghostbuster Afterlife', img: '/ghostbuster-afterlife.jpg' },
  { id: 3, title: "Guy Ritchie's The Covenant", img: '/the-covenant.jpg' },
  { id: 4, title: 'Guardian of the Galaxy', img: '/guardian-of-the-galaxy.jpg' },
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/details/${movie.id}`} key={movie.id} className="movie-item">
          <img src={movie.img} alt={movie.title} />
          <h2>{movie.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
