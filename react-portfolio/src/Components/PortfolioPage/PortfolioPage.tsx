import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import CurrentTime from './Component-1/CurrentTime';

const PortfolioPage = () => {
    return (
        <div>
     <Accordion>
       <Accordion.Item eventKey='0'>
         <Accordion.Header>Component #1</Accordion.Header>
           <Accordion.Body>
             <CurrentTime/>
           </Accordion.Body>
       </Accordion.Item>
       <Accordion.Item eventKey='1'>
       <Accordion.Header>Component #2</Accordion.Header>
           <Accordion.Body>
         
           </Accordion.Body>
       </Accordion.Item>
     </Accordion>
     </div>
    );
}

export default PortfolioPage;