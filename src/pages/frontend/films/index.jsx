import React, { useState } from "react";
import {useMount} from 'react-use';
import FilmsList from "../../../components/films-list";
import { getAllFilms } from "../../../utils/api";
import { format } from "date-fns";
import { StarWarsLogo } from "../../../assets";

const Films = () => {
    const [dataFilms, setDataFilms] = useState([]);
    useMount(() => {
        getAllFilms()
            .then((response) => {
                console.log(response.data.results)
                setDataFilms(response.data.results);
            })
    });

    return (
        <div className="modified-container">
            <div className="films">
                <div className="films__box-left">
                    <div>
                        <img src={StarWarsLogo} alt="Star Wars Logo" width="250" height="auto"/>
                    </div>
                    <div>
                        <h1>All STAR WARS Movie Series</h1>
                    </div>
                </div>
                <div className="films__box-right">
                    {
                        dataFilms
                        .map((film, index) => {
                            return <FilmsList 
                                index={index}
                                title={film.title}
                                release_date={format(Date.parse(film.release_date), "dd/MM/yyyy")}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Films;