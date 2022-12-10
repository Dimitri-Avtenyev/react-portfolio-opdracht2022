import emailjs from "@emailjs/browser";

const templateParams = {
    name: 'Dimitri',
    notes: 'Check this out!'
};
export const sendTestMail = () => {
    emailjs.send("service_5ksrtaa","template_lg68yk7", templateParams, "LWQd_EkVwMWBSOJNQ")
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
	   console.log('FAILED...', err);
	});
}

const EmailHandler = () => {
    return (
        <div>

        </div>
    )

}

export default EmailHandler;