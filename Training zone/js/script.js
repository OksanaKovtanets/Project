"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  genres: [],
  privat: false
};
const lastWatchedFilm1 = prompt("Укажите один из последних просмотренных фильмов",""),
      raiting1 = prompt("На сколько оцените его?"),
      lastWatchedFilm2 = prompt("Укажите один из последних просмотренных фильмов",""),
      raiting2 = prompt("На сколько оцените его?");
personalMovieDB.movies[lastWatchedFilm1] = raiting1;  
personalMovieDB.movies[lastWatchedFilm2] = raiting2;

console.log(personalMovieDB);