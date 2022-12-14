import { useContext, useState } from "react";
import styles from "./PokemonPage.module.css";
import {Pokemon, PokemonDataContext} from "../../PokemonApp";
import {PokemonApi} from "../../PokemonApp";
import { Link } from "react-router-dom";



const PokemonPage = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const { pokemon } = useContext(PokemonDataContext)
    return (
        <div>
            <div className={styles.searchBar}>
                <input placeholder="search..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            </div>
            <div className={styles.pokemonList}>
                {pokemon.filter((p)=> p.name.startsWith(searchInput)).map((pokemon, index) => {
                        return (
                            <Link to={`${index+1}`} className={styles.pokemon} key={index}>{pokemon.name}</Link>
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