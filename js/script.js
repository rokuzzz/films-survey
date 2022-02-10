
'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you watched so far?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you watched so far?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('You just started, keep watching movies :)');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('You are an average viewer.');
    } else if (personalMovieDB.count >= 30){
        console.log('You are a cinephile!');
    } else{
        console.log('Error');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        const genre = prompt(`Your favourite genre number ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();