import React, { useContext, useEffect, useState } from 'react';
import {createBrowserRouter, Link, NavLink, RouterProvider} from "react-router-dom";
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
	results: 		PokemonApi[]
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
// Changes to use this app in a container with already router running
// simulating routes

interface IPokemonDataContext {
	pokemon: PokemonApi[],
	currRoute:		string,
	setCurrRoute:	(route: string) => void
}
export const PokemonDataContext = React.createContext<IPokemonDataContext>({pokemon: [], currRoute: "", setCurrRoute: () => {}});

const PokemonApp = () => {
	const [pokemon, setPokemon] = useState<Pokemon[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [pokemonApi, setPokemonApi] = useState<PokemonApi[]>([]);

	const [currRoute, setCurrRoute] = useState<string>("");

	let page = <Home/>;
	if (currRoute === "pokemon") {
		page = <PokemonPage/>;
		
	} 

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
/* 
	Error -> You cannot render a <Router> inside another <Router>. 
	You should never have more than one in your app. 
	creating router in comment
*/

	// const router = createBrowserRouter([
	// 	{
	// 		path: "/",
	// 		element: <Root/>,
	// 		children: [
	// 			{
	// 				path: "",
	// 				element: <Home/>
	// 			},
	// 			{
	// 				path: "pokemon",
	// 				element: <PokemonPage/>,
	// 			}, 
	// 			{
	// 				path: "pokemon/:id",
	// 				element: <PokemonDetail/>
	// 			}
	// 		]
	// 	},
	// 	{
	// 		path: "*",
	// 		element: <PageNotFound/>
	// 	}
	// ]);
	return ( 
		<PokemonDataContext.Provider value={{pokemon: pokemonApi, currRoute, setCurrRoute}}>
			<div>
				<button onClick={() => setCurrRoute("home")}>Home</button>
				<button onClick={() => setCurrRoute("pokemon")}>Pokemon</button>
					{page}
			</div>
		</PokemonDataContext.Provider>
  );
}

export default PokemonApp;
