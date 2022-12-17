import { ComponentsContext } from "Components/App/Context/ComponentsContext";
import { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import searchIcon from "../Icons/searchIcon.svg";
import styles from './Search.module.css';

const Search = () => {
    const [search, setSearch] = useState<string>("");
    const { components } = useContext(ComponentsContext);

    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    components.sort((a, b) => {
        const name_1:string = a.name;
        const name_2:string = b.name;

        if (name_1 === "Stocks") { // just to showcase extra made component on top
            return 0;
        }
        if (name_1 > name_2) {
            return 1;
        }
        return 0;
    });
    
    return (
        <div className={styles.container}>
            <button className={styles.searchButton} onClick={() => handleShow()}><img src={searchIcon} alt="searchIcon" /></button>
            <Modal 
                show={show} onHide={handleClose} size={"sm"}
                scrollable={true}
                >
                <Modal.Header className={styles.modalHeader}>
                    <Modal.Title>
                        <input className={styles.searchInput} type="text" placeholder="Search..." value={search} onChange={(e) =>{setSearch(e.target.value)}}></input>
                    </Modal.Title>
                </Modal.Header>
                    <Modal.Body className={styles.modalBody}>
                        {components.filter(
                            (component => component.name.toLowerCase()
                            .startsWith(search.toLowerCase())))
                            .map((component, index) => {

                            return (
                                <Link key={index} to={`/portfolio/${component.name}`} className={styles.linkToStyle} onClick={handleClose}>{component.name}</Link>
                            )
                        })}
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Search;