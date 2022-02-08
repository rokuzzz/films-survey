
'use strict';

const numberOfFilms = +prompt('How many movies have you watched so far?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What was the last movie you saw?', ''),
      b = prompt('How would you rate it?', ''),
      c = prompt('What was the last movie you saw?', ''),
      d = prompt('How would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);