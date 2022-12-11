import { NavLink, Outlet } from "react-router-dom";
import styles from "./Root.module.css"
import searchIcon from "./Icons/searchIcon.svg";
import lightsOff from "./Icons/icons8-light-off.png";
import lightsOn from "./Icons/icons8-light-on.png";

const Root = () => {
	return (
		<div className={styles.container}>
			<div className={styles.navigation}>
				<div>
				<NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/">Home</NavLink>
				<NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="portfolio">Portfolio</NavLink>
				<NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="contact">Contact</NavLink>
				</div> 
				<div className={styles.search}>
					{/* <button><img src={lightsOff} alt="searchIcon"/></button>
					<button><img src={lightsOn} alt="searchIcon"/></button> */}
					<button><img src={searchIcon} alt="searchIcon"/></button>
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