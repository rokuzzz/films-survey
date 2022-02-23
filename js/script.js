
'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies have you watched so far?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you watched so far?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('You just started, keep watching movies :)');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('You are an average viewer.');
        } else if (personalMovieDB.count >= 30){
            console.log('You are a cinephile!');
        } else{
            console.log('Error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            /* const genre = prompt(`Your favourite genre number ${i}`);
            personalMovieDB.genres[i - 1] = genre; */
    
            //alternative code
            personalMovieDB.genres[i - 1] = prompt(`Your favourite genre number ${i}`);
        }
    }
};

