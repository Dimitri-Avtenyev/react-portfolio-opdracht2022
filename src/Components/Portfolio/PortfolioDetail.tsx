import { ComponentsContext } from 'Components/App/Context/ComponentsContext';
import PageNotFound from 'Components/PageNotFound/PageNotFound';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styles from './PortfolioPageDetail.module.css';

const PortfolioDetail = () => {
    let {component} = useParams();
    const { components } = useContext(ComponentsContext);
    let componentShowcase:React.ReactNode = <></>;
    let componentShowcaseName:string = "";

    let foundComponent = components.find(x => x.name === component);
    if (foundComponent != null) {
        componentShowcase = foundComponent.type;
        componentShowcaseName = foundComponent.name;
    } else {
        componentShowcase = 
            <div>
                <p>Input params:<strong> {component}</strong></p>
                <p>There's no such component. A spelling error?</p>
            </div>
    }
    
    return (
        <div className={styles.container}>
            <h1>{componentShowcaseName}</h1>
            <div>{componentShowcase}</div>
        </div>
    );
}

export default PortfolioDetail;