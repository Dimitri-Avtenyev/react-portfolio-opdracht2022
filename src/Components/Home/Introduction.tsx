import styles from "./Introduction.module.css";
import studentPic from "../Home/IMG_1581.jpeg";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useContext } from "react";
import { ThemeContext, switchTheme } from "Components/App/Context/ThemeContext";

const Introduction = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div style={switchTheme(theme)} className={styles.main}>
            <img className={styles.studentPic} src={studentPic} alt="foto student"/>
			<div className={styles.info}>
                <h1>
                    Dimitri Avtenyev<br/> Student <a href="https://www.ap.be" target={"_blank"}>AP Hogeschool</a>	
                </h1>
                <h2>
                    Portfolio voor Web Frameworks 
                </h2>
                <p>My name is Dimitri Avtenyev. 
                    I'm a software developer student with a strong analytical mindset and technical skills. I have an aptitude as a fast learner for picking-up new programming languages and frameworks. Problem-solving skills are in my nature.
                    I find ways to improve code quality, practices things at the forefront of what modern development looks like these days. As I am always looking for ways to improve my skills. 
                </p>
                <div className={styles.skillsSection}>
                    <h2>Skills*</h2>
                    <table className={styles.skillsTable}>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th>C#</th>
                                <td><ProgressBar animated now={95} /></td>
                            </tr>
                            <tr>
                                <th>Typescript</th>
                                <td><ProgressBar animated now={95} /></td>
                            </tr>
                            <tr>
                                <th>React.js</th>
                                <td><ProgressBar animated now={90} /></td>
                            </tr>
                            <tr>
                                <th>Node.js</th>
                                <td><ProgressBar animated now={95} /></td>
                            </tr>
                            <tr>
                                <th>Express.js</th>
                                <td><ProgressBar animated now={90} /></td>
                            </tr>
                            <tr>
                                <th>ASP.NET Core</th>
                                <td><ProgressBar animated now={80} /></td>
                            </tr>
                            <tr>
                                <th>Bash</th>
                                <td><ProgressBar animated now={70} /></td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                    <p>* Skills in progress and in reference to current studies, not (yet) professional env.</p>
                </div>
            </div>
        </div>
    );
}

export default Introduction;