import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css';

const movies = [
  { id: 1, title: 'The Gangster, The Cop, The Devil', img: '/the-gangster-the-cop-the-devil.jpg', description: '"The Gangster, the Cop, the Devil" is a 2019 South Korean action thriller directed by Lee Won-tae. The film follows an unlikely alliance between a crime boss, Jang Dong-soo, and a dedicated cop, Jung Tae-seok, as they team up to hunt down a brutal serial killer. After surviving an attack by the elusive murderer known as "K," Jang joins forces with Detective Jung, who has been trying to catch both the killer and Jang. Starring Ma Dong-seok, Kim Mu-yeol, and Kim Sung-kyu, the movie blends intense action with psychological tension, exploring themes of revenge and justice.' },
  { id: 2, title: 'Ghostbuster Afterlife', img: '/ghostbuster-afterlife.jpg', description: 'Description of Ghostbuster Afterlife' },
  { id: 3, title: "Guy Ritchie's The Covenant", img: '/the-covenant.jpg', description: "Description of Guy Ritchie's The Covenant" },
  { id: 4, title: 'Guardian of the Galaxy', img: '/guardian-of-the-galaxy.jpg', description: 'Description of Guardian of the Galaxy' },
];

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="movie-details">
      <img src={movie.img} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`} className="book-button">Book Seat</Link>
    </div>
  );
};

export default MovieDetails;
