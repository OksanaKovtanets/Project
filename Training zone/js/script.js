"use strict";
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  genres: [],
  privat: false
};