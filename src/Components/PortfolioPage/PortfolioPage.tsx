import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { ComponentsContext } from 'Components/App/ComponentsContext';
import styles from "./PortfolioPage.module.css";


const PortfolioPage = () => {
	const { components } = useContext(ComponentsContext);
    return (
	<div>
		<Accordion>
			{
				components.map((component, index) => {
					return (
						<Accordion.Item key={index} eventKey={index.toString()}>
						<Accordion.Header>{`Component #${index+1}: `}<b>{component.name}</b></Accordion.Header>
							<Accordion.Body className={styles.body}>
								{component.type}
								<Link to={`/portfolio/${component.name}`} className={styles.linkToStyle}>Go to component</Link>
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