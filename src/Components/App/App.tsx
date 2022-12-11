import React, { useContext, useEffect, useState } from 'react';
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Root from 'Components/Root/Root';
import Home from 'Components/Home/Home';
import PageNotFound from 'Components/PageNotFound/PageNotFound';
import PortfolioPage from 'Components/PortfolioPage/PortfolioPage';
import PortfolioDetail from 'Components/PortfolioPage/PortfolioDetail';
import Contact from 'Components/Contact/Contact';
import { ComponentsContext } from './ComponentsContext';
import styles from "./PortfolioPage.module.css";
import ColorSelect from '../PortfolioPage/ColorSelect/ColorSelect';
import CounterList from '../PortfolioPage/CounterList/CounterList';
import DadJoke from '../PortfolioPage/DadJoke/DadJoke';
import Filtering from '../PortfolioPage/FilteringAndSorting/Filtering';
import Interval from '../PortfolioPage/Interval/Interval';
import PokedexApp from '../PortfolioPage/Pokedex/PokedexApp';
import PokemonApp from '../PortfolioPage/PokemonApp/ReactRouterSimulated/PokemonApp';
import ShoppingList from '../PortfolioPage/ShoppingList/ShoppingList';
import SlotMachine from '../PortfolioPage/SlotMachine/SlotMachine';

const App = () => {
	let components = [
		{type: <Interval/>, name: "Interval"},
		{type: <SlotMachine slots={3}/>, name: "SlotMachine"},
		{type: <ColorSelect/>, name: "ColorSelect"},
		{type: <Filtering/>, name: "FilteringAndSorting"},
		{type: <CounterList/>, name: "CounterList"},
		{type: <DadJoke/>, name: "DadJoke"},
		{type: <PokedexApp/>, name: "Pokedex"},
		{type: <PokemonApp/>, name: "PokemonApp"},
		{type: <ShoppingList/>, name: "ShoppingList"},
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
		// <ThemeContext.Provider value={{dark}}>
		<ComponentsContext.Provider value={{components: components}}>
			<RouterProvider router={router}/>
		</ComponentsContext.Provider>
		
		// </ThemeContext.Provider> 
  );
}



export default App;
