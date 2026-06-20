import { useState } from "react";

function MoviesList() {
  // collection of objects representing movies
  const movies = [
    {
      id: 1, // items in data collections need unique IDs
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2, // unique ID
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as theJoker.",
    },
    {
      id: 3, // unique ID
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole inspace.",
    },
  ];

  function Movie({ title, year, synopsis }) {
    return (
      <li>
        <h3>{title}</h3>
        <span>({year})</span>
        <div>{synopsis}</div>
      </li>
    );
  }

  const [currentMovies, setCurrentMovies] = useState(movies);
  const movieItems = currentMovies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));
  const handleReverseMovies = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...currentMovies];
    newMovies.reverse(); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clonein state
  };

  const addButton = () => {
    let newMovies = [
      ...currentMovies,
      {
        id: 4,
        title: "The Whale",
        year: 2022,
        synopsis:
          "A morbidly obese teacher attempts to reconnect with his daughter.",
      },
    ];
    setCurrentMovies(newMovies);
  };
  return (
    <div className="MoviesList">
      <ul>{movieItems}</ul>
      <button onClick={handleReverseMovies}>Reverse List</button>
      <button onClick={addButton}>Add The Whale</button>
    </div>
  );
}
export default MoviesList;
