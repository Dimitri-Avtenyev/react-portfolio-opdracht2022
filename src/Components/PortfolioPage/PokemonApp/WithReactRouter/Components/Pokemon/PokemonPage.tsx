import { useState } from "react";
import styles from "./PokemonPage.module.css";
import {Pokemon} from "../../PokemonApp";
import {PokemonApi} from "../../PokemonApp";
import { Link } from "react-router-dom";

interface PokemonProps {
    pokemon: PokemonApi[]
}

const PokemonPage = ({pokemon}: PokemonProps) => {
    const [searchInput, setSearchInput] = useState<string>("");

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