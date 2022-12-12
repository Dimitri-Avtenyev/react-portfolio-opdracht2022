import styles from "../Home/Home.module.css";
import Introduction from "./Introduction";

const Home = () => {
	return (
		<div className={styles.home}>
			<Introduction/>
		</div>
	);
}

export default Home;