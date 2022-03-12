//Kalo pake Typescript pake command ini
//const axios = require('axios').default;

//Kalo JS biasa 
const axios = require('axios');
const { FILMROUTES } = require('../routes');
const BASE_URL = "https://swapi.dev/api"; //gedein nama variabel untuk tanda gk ubah2

export const getAllFilms = () => {
    return axios.get(BASE_URL + FILMROUTES.FILMS);
};

export const getDetailFilm = (idFilm) => {
    return axios.get(BASE_URL + FILMROUTES.FILMS + `/${idFilm}`);
};