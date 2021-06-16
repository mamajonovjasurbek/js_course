// 'use strict';




const pesonalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: {},
    privat: {},
    start:function(){
        pesonalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели? ', '');
        while(pesonalMovieDB.count == '' || pesonalMovieDB.count == null || isNaN(pesonalMovieDB.count))
        {
            pesonalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели? ', '');
        }
    },
    rememberMyFilms:function(){
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
    },
    detectedPersonalLevel: function(){
        if(pesonalMovieDB.count < 10 ){
            console.log("Просмотрено довольно мало фильмов");
        }else if(pesonalMovieDB.count> 10 && pesonalMovieDB.count < 30){
            console.log("Вы классический зритель");
        }else if(pesonalMovieDB.count > 30 ){
            console.log("Вы кономан");
        }else{
            console.log("Произошла ошибка");
        }
    },
    showMyDB:function(hidden){
        if(!hidden){
            console.log(pesonalMovieDB);
        }
    },
    toogleVisibleMyDB:function(){
        if(pesonalMovieDB.privat){
            pesonalMovieDB.privat = false;
        }else{
            pesonalMovieDB.privat = true;
        }
    },
    writeYourGenres:function(){
        for(let i =1 ; i<= 3 ; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            
            if(genre === '' || genre === null){
                console.log("Вы введи неккоректные данные или не их вообще!");
                i--;
            }else{
                pesonalMovieDB.genres[i-1] = genre;
            }
            pesonalMovieDB.genres.forEach((item,i) =>{
                console.log(`Любимый жанр ${i+1} - это ${item}`);
            });
        }
    }

};
 

// console.log(pesonalMovieDB);