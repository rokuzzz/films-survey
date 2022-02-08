
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

    if (a != null && b != null && a != '' && b !='' && a.length <50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        i--;
        console.log('error');
    }
}

if (personalMovieDB.count < 10) {
    console.log('You just started, keep watching movies :)');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('You are an average viewer.');
} else if (personalMovieDB.count >= 30){
    console.log('You are a cinephile!');
} else{
    console.log('Error');
}

console.log(personalMovieDB);