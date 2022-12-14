import { IComponent } from "Components/App/Context/ComponentsContext";
import ColorSelect from "../ColorSelect/ColorSelect";
import CounterList from "../CounterList/CounterList";
import DadJoke from "../DadJoke/DadJoke";
import Filtering from "../FilteringAndSorting/Filtering";
import Interval from "../Interval/Interval";
import PokedexApp from "../Pokedex/PokedexApp";
import PokemonApp from "../PokemonApp/ReactRouterSimulated/PokemonApp";
import ShoppingList from "../ShoppingList/ShoppingList";
import SlotMachine from "../SlotMachine/SlotMachine";
import TicTacToe from "../TicTacToe/TicTacToe";

const ComponentList = ():IComponent[] => {
	let components:IComponent[] = [
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
    return components;

}

export default ComponentList;