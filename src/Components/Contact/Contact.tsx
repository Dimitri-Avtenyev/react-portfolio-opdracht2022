import styles from './Contact.module.css';
import Socials from './Socials/Socials';
import ContactForm from './ContactForm';
import { useContext } from 'react';
import { switchTheme, ThemeContext } from 'Components/App/Context/ThemeContext';

const Contact = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div style={switchTheme(theme)} className={styles.ContactContainer}>
            <div><ContactForm/></div>
            <div><Socials/></div>
        </div>
    )
}

export default Contact;