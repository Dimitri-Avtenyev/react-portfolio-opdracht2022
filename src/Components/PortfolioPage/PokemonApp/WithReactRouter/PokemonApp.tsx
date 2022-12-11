import React, { useContext, useEffect, useState } from 'react';
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import styles from "./PokemonApp.module.css";
import {Vortex} from "react-loader-spinner";

import PageNotFound from './Components/PageNotFound/PageNotFound';
import Root from "./Root";
import Home from "./Components/Home";
import PokemonPage from './Components/Pokemon/PokemonPage';
import PokemonDetail from './Components/Pokemon/PokemonDetail';

export interface PokemonApi {
	name:	string,
	url:	string
}
interface ApiResults {
	results: PokemonApi[]
}
export interface Pokemon {
    id:                       number,
    name:                     string,
    sprites:                  Sprites, // front pic url
    weight:                   number,
	height:                   number,
}
export interface Sprites {
	front_default:	string
}

export const loadingIndicator = () => {
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
interface IPokemonDataContext {
	pokemon: PokemonApi[]
}
const PokemonDataContext = React.createContext<IPokemonDataContext>({pokemon: []});

const PokemonApp = () => {
	const [pokemon, setPokemon] = useState<Pokemon[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [pokemonApi, setPokemonApi] = useState<PokemonApi[]>([]);

	useEffect(() => {
		const loadPokemonFromApi = async () => {
			setLoading(true);

			let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151/");
			let data:ApiResults = await response.json();
			setPokemonApi(data.results);

			setLoading(false);
		}
		loadPokemonFromApi();
	}, []);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root/>,
			children: [
				{
					path: "",
					element: <Home/>
				},
				{
					path: "pokemon",
					element: <PokemonPage pokemon={pokemonApi}/>,
				}, 
				{
					path: "pokemon/:id",
					element: <PokemonDetail/>
				}
				
			]
		},
		{
			path: "*",
			element: <PageNotFound/>
		}
	]);
	return ( 
		<PokemonDataContext.Provider value={{pokemon: pokemonApi}}>
			<RouterProvider router={router}/>
		</PokemonDataContext.Provider>
  );

}

export default PokemonApp;
