import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Root.module.css"
import searchIcon from "./Icons/searchIcon.svg";
import lightsOff from "./Icons/icons8-light-off.png";
import lightsOn from "./Icons/icons8-light-on.png";
import { useContext, useState } from "react";
import { ComponentsContext } from "Components/App/ComponentsContext";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Root = () => {
	let { components } = useContext(ComponentsContext);
	const [theme, setTheme] = useState<string>("dark");
	const [search, setSearch] = useState<string>("");

	// state + handle Modal
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	// 
	return (
		<div className={styles.container}>
			<div className={styles.navigation}>
				<div>
					<NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="/">Home</NavLink>
					<NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="portfolio">Portfolio</NavLink>
					<NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="contact">Contact</NavLink>
				</div>
				<div className={styles.searchAndTheme}>
					{theme === "light" ?
						<button className={styles.lightsOff} onClick={() => setTheme("dark")}><img src={lightsOff} alt="searchIcon" /></button> :
						<button className={styles.lightsOn} onClick={() => setTheme("light")}><img src={lightsOn} alt="searchIcon" /></button>
					}
					<button className={styles.searchButton} onClick={() => handleShow()}><img src={searchIcon} alt="searchIcon" />Search...</button>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header className={styles.ModalHeader}>
							<Modal.Title >
								<input className={styles.searchInput} type="text" placeholder="Search..." value={search} onChange={(e) =>{setSearch(e.target.value)}}></input>
							</Modal.Title>
						</Modal.Header>
							<Modal.Body>
								{components.filter((component => component.name.toLowerCase().startsWith(search))).map((component, index) => {
									return (
										<Link key={index} to={`/portfolio/${component.name}`} className={styles.linkToStyle} onClick={handleClose}>{component.name}</Link>
									)
								})}
							</Modal.Body>
							<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>

			<div className={styles.content}>
				<Outlet />
			</div>
			<div className={styles.footer}>
				<p>&copy;2022 | Portfolio | Door Dimitri Avtenyev in opdracht van <a href="https://www.ap.be">AP Hogeschool</a> </p>
			</div>
		</div>
	);
}

export default Root;