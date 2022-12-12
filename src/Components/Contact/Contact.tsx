import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './Contact.module.css';
import { useEffect, useState } from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [confirmationText, setConfirmationText] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [rating, setRating] = useState<string>("no rating yet");
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

    const sendMail =  async () => {

        emailjs.sendForm("service_5ksrtaa","template_lg68yk7", "#formContact", "LWQd_EkVwMWBSOJNQ")
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });
    }   

    const checkInputEmpty = ():boolean => {
        if(name.length>0 && email.length > 0 && message.length > 0) {
            return false;
        }
        return true;
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        sendMail();
        setConfirmationText(`Thank you for your message, ${name}!`);
        setFormSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
    };
    return (
        <div className={styles.ContactContainer}>
            <div className={styles.form}>
                <div>
                    <h1>Let's get in touch!</h1>
                </div>
                <Form id="formContact" className={styles.form} onSubmit={handleSubmit}>
                    <FloatingLabel controlId="floatingInput" label="Email address">
                        <Form.Control type="email" placeholder="name@example.com"  name="email"
                        onChange={(e) => {setEmail(e.target.value)}} value={email}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Name">
                        <Form.Control type="text" placeholder="Name" name="name"
                        onChange={(e) => {setName(e.target.value)}} value={name}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextArea" label="Leave a message!">
                        <Form.Control as="textarea" placeholder="Leave a comment here" name="message"
                        onChange={(e) => {setMessage(e.target.value)}} value={message}
                        />
                    </FloatingLabel>
                    <p>Leave a rating:)!</p>
                    {rating}
                    <input type="range" min="0" max="20" step="1"  onChange={(e) => {setRating(e.target.value)}} name="rating"/>
                    <Button variant="primary" type="submit" disabled={checkInputEmpty()}>
                        Submit
                    </Button>
                </Form>
                <div>
                    <p>{formSubmitted ? confirmationText : ""}</p>
                </div>
            </div>
            <div className={styles.socials}>
                <ul>
                    <li><a href="https://github.com/Dimitri-Avtenyev" target="blank"><img src="./githubLogo.png" width="30px" alt="github-logo"/></a></li>
                    <li><a href="https://www.linkedin.com/in/dimitri-avtenyev/v" target="blank"><img src="./linkedinLogo.png" width="30px" alt="linkedin-logo"/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;