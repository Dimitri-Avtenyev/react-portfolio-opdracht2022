import { Link } from "react-router-dom";

const errorImage = require("./Psyduck_404.webp");


const PageNotFound = () => {
    return (
        <div>
            <img src={errorImage} alt="psyduck"></img>
            <p>404 oops</p>
            <Link to="pokemon">Back</Link>
        </div>
    )
}

export default PageNotFound;