import React from "react";
import { FILMROUTES } from "../../../routes";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="modified-container">
            <div className="home-page">
                <div>
                    <div className="home-page__box text-center">
                        <span>Hi Welcome!</span>
                    </div>
                    <div className="home-page__box text-center">
                    <span>This page provides information of STAR WARS Movie Series</span>
                        <div className="btn-modify-text-color text-center">
                            <Link to={`${FILMROUTES.FILMS}`} className="btn-modify-text-color__text-decor">
                                Check it out?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;