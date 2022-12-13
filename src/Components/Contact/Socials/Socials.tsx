import styles from './Socials.module.css';

const Socials = () => {
    return (
        <div className={styles.socials}>
            <ul>
                <li><a href="https://github.com/Dimitri-Avtenyev" target="blank"><img src="./githubLogo.png" width="30px" alt="github-logo" /></a></li>
                <li><a href="https://www.linkedin.com/in/dimitri-avtenyev/v" target="blank"><img src="./linkedinLogo.png" width="30px" alt="linkedin-logo" /></a></li>
            </ul>
        </div>
    );
}

export default Socials;