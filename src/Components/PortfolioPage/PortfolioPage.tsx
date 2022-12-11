import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import ColorSelect from './ColorSelect/ColorSelect';
import CounterList from './CounterList/CounterList';
import DadJoke from './DadJoke/DadJoke';
import Filtering from './FilteringAndSorting/Filtering';
import Interval from './Interval/Interval';
import PokedexApp from './Pokedex/PokedexApp';
import PokemonApp from './PokemonApp/WithReactRouter/PokemonApp';
import SlotMachine from './SlotMachine/SlotMachine';


interface Component {
	type:	React.ReactNode,
	name:	string
}
const PortfolioPage = () => {
	let components:Component[] = [
		{type: <Interval/>, name: "Interval"},
		{type: <SlotMachine slots={3}/>, name: "SlotMachine"},
		{type: <ColorSelect/>, name: "ColorSelect"},
		{type: <Filtering/>, name: "FilteringAndSorting"},
		{type: <CounterList/>, name: "CounterList"},
		{type: <DadJoke/>, name: "DadJoke"},
		{type: <PokedexApp/>, name: "Pokedex"},
		{type: <PokemonApp/>, name: "PokemonApp"}
	];

    return (
	<div>
		<Accordion>
			{
				components.map((component, index) => {
					return (
						<Accordion.Item key={index} eventKey={index.toString()}>
						<Accordion.Header>{component.name}</Accordion.Header>
							<Accordion.Body>
								{component.type}
							</Accordion.Body>
						</Accordion.Item>
					);
				})
			}
		</Accordion>
	</div>
    );
}

export default PortfolioPage;