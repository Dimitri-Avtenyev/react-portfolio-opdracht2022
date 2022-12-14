import { NavLink, Outlet } from "react-router-dom";
import styles from "./Root.module.css"
import lightsOff from "./Icons/lightOff.svg";
import lightsOn from "./Icons/lightOn.svg";
import { useContext, useEffect, useState } from "react";
import Search from "./Search/Search";
import { switchTheme, ThemeContext } from "Components/App/Context/ThemeContext";

const Root = () => {
	const {theme, setTheme} = useContext(ThemeContext);
	
	const changeTheme = (theme:string) => {
		setTheme(theme);
		localStorage.setItem("theme", theme);
	}
	useEffect(() => {
		let themeLocal = localStorage.getItem("theme");
		if (themeLocal) {
			setTheme(themeLocal);
		} 
	},[]);

	return (
		<div className={styles.container}>
			<div style={switchTheme(theme)} className={styles.navigation}>
				<div>
					<NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="/">Home</NavLink>
					<NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="portfolio">Portfolio</NavLink>
					<NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="contact">Contact</NavLink>
				</div>
				<div className={styles.searchAndTheme}>
					<div>
					{theme === "light" ?
						<button className={styles.lightsOff} onClick={() => changeTheme("dark")}><img src={lightsOff} alt="searchIcon" /></button> :
						<button className={styles.lightsOn} onClick={() => changeTheme("light")}><img src={lightsOn} alt="searchIcon" /></button>
					}
					</div>
					<Search/>
				</div>
			</div>
			<div className={styles.content}>
				<Outlet/>
			</div>
			<div style={switchTheme(theme)} className={styles.footer}>
				<p>&copy;2022 | Portfolio | Dimitri Avtenyev</p>
				<p>in opdracht van <a href="https://www.ap.be" target="_blank">AP Hogeschool</a> </p>
			</div>
		</div>
	);
}

export default Root;