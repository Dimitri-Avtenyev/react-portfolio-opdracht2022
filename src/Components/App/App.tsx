import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Root from 'Components/Root/Root';
import Home from 'Components/Home/Home';
import PageNotFound from 'Components/PageNotFound/PageNotFound';
import PortfolioPage from 'Components/PortfolioPage/PortfolioPage';
import PortfolioDetail from 'Components/PortfolioPage/PortfolioDetail';
import Contact from 'Components/Contact/Contact';
import { ComponentsContext } from './ComponentsContext';
import ColorSelect from '../PortfolioPage/ColorSelect/ColorSelect';
import CounterList from '../PortfolioPage/CounterList/CounterList';
import DadJoke from '../PortfolioPage/DadJoke/DadJoke';
import Filtering from '../PortfolioPage/FilteringAndSorting/Filtering';
import Interval from '../PortfolioPage/Interval/Interval';
import PokedexApp from '../PortfolioPage/Pokedex/PokedexApp';
import PokemonApp from '../PortfolioPage/PokemonApp/ReactRouterSimulated/PokemonApp';
import ShoppingList from '../PortfolioPage/ShoppingList/ShoppingList';
import SlotMachine from '../PortfolioPage/SlotMachine/SlotMachine';
import TicTacToe from '../PortfolioPage/TicTacToe/TicTacToe';
import { ThemeContext } from './ThemeContext';
import { useState } from "react";

const App = () => {
	const [theme, setTheme] = useState<string>("dark");

	let components = [
		{type: <Interval/>, name: "Interval", description: "A simple interval with random generator that uses React Hooks and TypeScript"},
		{type: <SlotMachine slots={3}/>, name: "SlotMachine", description: "A simple Slot Machine game that uses React Hooks and TypeScript"},
		{type: <ColorSelect/>, name: "ColorSelect", description: "A simple Color selector that uses React Hooks and TypeScript"},
		{type: <Filtering/>, name: "FilteringAndSorting", description: "A simple Filtering and sorting demo that uses React Hooks and TypeScript"},
		{type: <CounterList/>, name: "CounterList", description: "A simple Counter list that uses React Hooks and TypeScript"},
		{type: <DadJoke/>, name: "DadJoke", description: "A simple Dad joke api fetcher that uses React Hooks, local storage and TypeScript"},
		{type: <PokedexApp/>, name: "Pokedex", description: "A simple Pokedex api fetcher that uses React Hooks and TypeScript"},
		{type: <PokemonApp/>, name: "PokemonApp", description: "A simple Pokemon app simulated without React Router (check github for ReactRouter version) that uses React Hooks and TypeScript"},
		{type: <ShoppingList/>, name: "ShoppingList", description: "A simple shopping list that uses React Hooks and TypeScript"},
		{type: <TicTacToe/>, name: "TicTacToe", description: "A simple Tictactoe game that uses React Hooks and TypeScript"},
	];
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
					path: "portfolio",
					element: <PortfolioPage/>,
				}, 
				{
					path: "portfolio/:component",
					element: <PortfolioDetail/>
				},
				{
					path: "contact",
					element: <Contact/>
				},
			]
		},
		{
			path: "*",
			element: <PageNotFound/>
		}
	]);
	return ( 
		<ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
			<ComponentsContext.Provider value={{components: components}}>
				<RouterProvider router={router}/>
			</ComponentsContext.Provider>
		</ThemeContext.Provider> 
  );
}

export default App;
