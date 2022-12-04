import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";
const errorImage = require("./Psyduck_404.webp");


const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <img src={errorImage} alt="psyduck"></img>
            <p>404 oops</p>
            <Link to="/">Back</Link>
        </div>
    )
}

export default PageNotFound;