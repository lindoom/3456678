"use strict";

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


//       for(let i = 0; i < 2; i++) {
//         const   a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько вы его оцените?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }


//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено двольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         } else if (personalMovieDB.count > 50) {
//             alert('Вы киноман!');
//         } else {
//             console.log('Произошла ошибка');
//         }


//       }

//       console.log(personalMovieDB);

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
// }

// showFirstMessage('hello world'); 
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;


//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log('hello');
// };

// logger();

// const calc = (a, b) =>  a + b ;

// const str = 'test';
// const arr = [1, 2, 3, 4];

// console.log(str.toLocaleUpperCase()); 
// console.log(str.toLocaleLowerCase());

// let fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));

// const logg = 'Любимая жена';

// console.log(logg.substring(8, 13));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));


let numberOfFilms;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько вы его оцените?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    }

    rememberMyFilms();  

    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
                console.log('Просмотрено двольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 50) {
            alert('Вы киноман!');
        } else {
                console.log('Произошла ошибка');
            }
        }

        detectPersonalLevel();

        function showMyDB(hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        }

        showMyDB(personalMovieDB.privat);

        function writeYourGenres() {
            for (let i = 1; i <= 3; i++) {
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            }
        }
        writeYourGenres();
        
      

