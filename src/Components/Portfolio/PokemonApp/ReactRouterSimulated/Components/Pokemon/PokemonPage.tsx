import { useContext, useState } from "react";
import styles from "./PokemonPage.module.css";
import {PokemonDataContext} from "../../PokemonApp";
import { Link } from "react-router-dom";


const PokemonPage = () => {
    const [searchInput, setSearchInput] = useState<string>("");

    const { pokemon } = useContext(PokemonDataContext);
    const {setCurrRoute} = useContext(PokemonDataContext);
    return (
        <div>
            <div className={styles.searchBar}>
                <input placeholder="search..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            </div>
            <div className={styles.pokemonList}>
                {pokemon.filter((p)=> p.name.startsWith(searchInput)).map((pokemon, index) => {
                        return (
                            // <Link to={`${index+1}`} className={styles.pokemon} key={index}>{pokemon.name}</Link>
                            <span className={styles.pokemon} key={index} onClick={()=> setCurrRoute((index+1).toString())}>{pokemon.name}</span>
                        );
                    })}
            </div>
            <div>
                <Link to="/">Back</Link>
            </div>
        </div>
    );
}

export default PokemonPage;