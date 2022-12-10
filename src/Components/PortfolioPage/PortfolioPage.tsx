import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import CurrentTime from './Component-1/CurrentTime';

const PortfolioPage = () => {
    return (
	<div>
		<Accordion>
			<Accordion.Item eventKey='0'>
				<Accordion.Header>Component #1</Accordion.Header>
				<Accordion.Body>
					<CurrentTime/>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey='1'>
				<Accordion.Header>Component #2</Accordion.Header>
				<Accordion.Body>

				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey='2'>
				<Accordion.Header>Component #3</Accordion.Header>
				<Accordion.Body>

				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey='3'>
				<Accordion.Header>Component #4</Accordion.Header>
				<Accordion.Body>

				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey='4'>
				<Accordion.Header>Component #5</Accordion.Header>
				<Accordion.Body>

				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey='5'>
				<Accordion.Header>Component #6</Accordion.Header>
				<Accordion.Body>

				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey='6'>
				<Accordion.Header>Component #7</Accordion.Header>
				<Accordion.Body>

				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey='7'>
				<Accordion.Header>Component #7</Accordion.Header>
				<Accordion.Body>
				<CurrentTime/>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	</div>
    );
}

export default PortfolioPage;