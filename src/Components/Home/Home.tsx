import studentPic from "../Home/IMG_1581.jpeg";
import styles from "../Home/Home.module.css";

const Home = () => {
	return (
		<div className={styles.home}>
			<img className={styles.studentPic} src={studentPic} alt="foto student"/>
			<div className={styles.info}>
				<p>
					Dimitri Avtenyev | Student <a href="https://www.ap.be" target={"_blank"}>AP Hogeschool</a>
				</p>
			</div>
			<div></div>
		</div>
	)
}

export default Home;