import { useState, useEffect } from "react";
import {Vortex} from "react-loader-spinner";

const loadingIndicator = () => {
    return (
        <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
    )
}
interface Pokemon {
    name:       string,
    url:        string
}
interface Pokedex {
    results: Pokemon[]
}

const Pokedex = ({limit}:{limit:number}) => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState<string>("");
    
    useEffect(() => {
        (async () => {
          
            setLoading(true);
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
            let data:Pokedex = await response.json();
            setPokemon(data.results);
            setLoading(false);

        })();
      
    }, [limit]);
    if(loading) {
        return (<div>{loadingIndicator()}</div>)
    }

    return (
        <div>
            <div>
                <input type="text" onChange={(e) => {setSearchInput(e.target.value)}}></input>
            </div>
            <div>
                {pokemon.filter((pokemon) => pokemon.name.startsWith(searchInput)).map((pokemon:Pokemon, index:number) => 
                    <div key={index}>{pokemon.name}</div>
                    )}
            </div>
  
        </div>
    );
}

export default Pokedex;