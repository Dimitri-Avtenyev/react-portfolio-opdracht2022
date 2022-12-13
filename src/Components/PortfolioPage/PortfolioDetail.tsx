
import { ComponentsContext } from 'Components/App/ComponentsContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

const PortfolioDetail = () => {
    let {component} = useParams();
    const { components } = useContext(ComponentsContext);

    let componentShowcase:React.ReactNode = <></>;

    let foundComponent = components.find(x => x.name === component);
    if (foundComponent != null) {
        componentShowcase = foundComponent.type;
    }
    
    return (
        <div>
            {componentShowcase}
        </div>
    );
}

export default PortfolioDetail;