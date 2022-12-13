import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Root.module.css"
import lightsOff from "./Icons/lightOff.svg";
import lightsOn from "./Icons/lightOn.svg";
import { useState } from "react";
import Search from "./Search/Search";

const Root = () => {
	// let { components } = useContext(ComponentsContext);
	const [theme, setTheme] = useState<string>("dark");
	// const [search, setSearch] = useState<string>("");

	// state + handle Modal
	// const [show, setShow] = useState(false);
	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);
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
					<div>
					{theme === "light" ?
						<button className={styles.lightsOff} onClick={() => setTheme("dark")}><img src={lightsOff} alt="searchIcon" /></button> :
						<button className={styles.lightsOn} onClick={() => setTheme("light")}><img src={lightsOn} alt="searchIcon" /></button>
					}
					</div>
					<Search/>
				</div>
			</div>

			<div className={styles.content}>
				<Outlet/>
			</div>
			<div className={styles.footer}>
				<p>&copy;2022 | Portfolio | Door Dimitri Avtenyev in opdracht van <a href="https://www.ap.be">AP Hogeschool</a> </p>
			</div>
		</div>
	);
}

export default Root;