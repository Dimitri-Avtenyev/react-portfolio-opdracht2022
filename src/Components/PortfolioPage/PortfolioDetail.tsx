
import { useParams } from 'react-router-dom';
import { JsxElement } from 'typescript';
import Interval from './Interval/Interval';

const PortfolioDetail = () => {
    let {component} = useParams();
    let componentShowcase:React.ReactNode = <></>;

    let foundComponent;
    switch(component) {
        case ("interval"):
            componentShowcase = <Interval/>
            break;
        
    }
    // if (component === "interval") {
    //     componentShowcase = <Interval/>;
    // }
     return (
        <div>
            {componentShowcase}
        </div>
    );
}

export default PortfolioDetail;