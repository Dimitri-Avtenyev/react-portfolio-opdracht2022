import { NavLink, Outlet } from "react-router-dom";
import styles from "./Root.module.css"

const Root = () => {
	return (
		<div className={styles.container}>
			<div className= {styles.navigation}>
				<NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/">Home</NavLink>
				<NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}to="pokemon">Pokemon</NavLink>
			</div>
			<div className={styles.content}>
                <Outlet/>
            </div>
		</div>
	);
}

export default Root;