// 'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели? ', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели? ', '');
    }
}

// start();


const pesonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: {},
};
 
function rememberMyFilms(){
    for(let i = 0; i<2; i++){
        const a = prompt('Один из последних просмотренных фильсов?', ''),
            b = prompt('На сколько оцените его?', '');
        if(a!= null && b!= null && a!= '' && b!= '' && a.length< 50){
            pesonalMovieDB.movies[a] = b;
            console.log('done');
        }else{
            console.log('error');
            i--;
        }   
    }
}

// rememberMyFilms();

function detectedPersonalLevel(){
    if(pesonalMovieDB.count < 10 ){
        console.log("Просмотрено довольно мало фильмов");
    }else if(pesonalMovieDB.count> 10 && pesonalMovieDB.count < 30){
        console.log("Вы классический зритель");
    }else if(pesonalMovieDB.count > 30 ){
        console.log("Вы кономан");
    }else{
        console.log("Произошла ошибка");
    }
}

// detectedPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(pesonalMovieDB);
    }
}

// showMyDB();

function writeYourGenres(){
    for(let i =1 ; i<=3 ; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        pesonalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres(); 
// const a = prompt('Один из последних просмотренных фильсов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильсов?', ''),
//     d = prompt('На сколько оцените его?', '');

// pesonalMovieDB.movies[a] = b;
// pesonalMovieDB.movies[c] = d;

console.log(pesonalMovieDB);