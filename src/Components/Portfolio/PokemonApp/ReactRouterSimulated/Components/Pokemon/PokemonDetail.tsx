import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {loadingIndicator, PokemonApi} from "../../PokemonApp";
import {Pokemon} from "../../PokemonApp";

interface PokemonProps {
	pokemon: PokemonApi[]
}

// adjusted instead of using useParams to work in "simulated router" 
// for router app see "WithReactRouter" folder
const PokemonDetail = ({id}:{id:string}) => {
	const [pokemon, setPokemon] = useState<Pokemon>();
	//let {id} = useParams();
	//let pokemon:Pokemon | undefined;

	useEffect(()=> {
		const getPokemon = async () => {
			let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			let pokemon = await response.json();
			setPokemon(pokemon);
		}
		getPokemon();
	},[])

	if(pokemon == undefined) {
		return (
			<div>{loadingIndicator()}</div>
		)
	} else {
		return (
			<div style={{display:"flex", flexDirection:"column", textAlign: "center"}}>
				<p>Name: {pokemon.name}</p>
				<p>Weight: {pokemon.weight}</p>
				<p>Height: {pokemon.height}</p>
				<p><img src={`${pokemon.sprites?.front_default}`}/></p>
				<p><Link to="pokemon"></Link></p>
			</div>
		);
	}
}

export default PokemonDetail;