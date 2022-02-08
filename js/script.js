
'use strict';

const numberOfFilms = +prompt('How many movies have you watched so far?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i ++){
    const a = prompt('What was the last movie you saw?', ''),
    b = prompt('How would you rate it?', '');
    personalMovieDB.movies[a] = b;
    }

console.log(personalMovieDB);