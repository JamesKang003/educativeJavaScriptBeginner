function olderMovies(movieList) {
  // TODO: Return an array of the titles of movies released before 2000
  oldMovies = movieList.filter((x) => x.year < 2000);
  oldMovieTitles = oldMovies.map((x) => x.title);
  return oldMovieTitles;
}
