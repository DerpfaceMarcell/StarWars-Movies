import { Link } from "react-router-dom";
import { FILMROUTES } from "../../routes";


const FilmsList = ({
    index,
    title,
    release_date
}) => {
    return(
        <div>
            <div className="text-scale-expand">
                <h3>
                    <Link to={`${FILMROUTES.FILMS}/${index+1}`} className="plain remove-link-color">{title}</Link>
                </h3>
            </div>
            <p>{release_date}</p>
        </div>
    );
};

export default FilmsList;