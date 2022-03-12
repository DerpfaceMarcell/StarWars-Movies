import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMount } from "react-use";
import { getDetailFilm } from "../../../utils/api";

const FilmDetails = () => {
    const { filmId } = useParams();
    const [ filmDetail, setFilmDetail ] = useState({});
    useMount(() => {
        getDetailFilm(filmId)
            .then((response) => {
                // console.log(response);
                setFilmDetail(response.data);
            })
    });

    return (
        <div className="modified-container">
            <div className="film-details">
                <div className="film-details__title">
                    <h1>{filmDetail.title}</h1>
                    <div>
                        <i>
                            {filmDetail.opening_crawl}
                        </i>
                    </div>
                    <hr className="line-title"></hr>
                </div>
                <div className="film-details__details-list">
                    <h4>Directed By</h4>
                    <h3>
                        {filmDetail.director}
                    </h3>
                    <h4>Produced By</h4>
                    <h3>
                        {filmDetail.producer}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default FilmDetails;