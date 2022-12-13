import styles from './Contact.module.css';
import Socials from './Socials/Socials';
import ContactForm from './ContactForm';

const Contact = () => {
 
    return (
        <div className={styles.ContactContainer}>
            <div><ContactForm/></div>
            <div><Socials/></div>
        </div>
    )
}

export default Contact;