import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { ComponentsContext } from 'Components/App/Context/ComponentsContext';
import styles from "./PortfolioPage.module.css";
import { switchTheme, ThemeContext } from 'Components/App/Context/ThemeContext';


const PortfolioPage = () => {
	const { components } = useContext(ComponentsContext);
	const {theme, setTheme} = useContext(ThemeContext);

    return (
	<div>
		<Accordion flush>
			{
				components.map((component, index) => {
					return (
						<Accordion.Item key={index} eventKey={index.toString()}>
						<Accordion.Button style={switchTheme(theme)}>
							<div className={styles.accorHeaderContents}>
								<p>{component.name}</p><p>{component.description}</p>
							</div>
						</Accordion.Button>
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