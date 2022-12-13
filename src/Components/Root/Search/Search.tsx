import { ComponentsContext } from "Components/App/Context/ComponentsContext";
import { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import searchIcon from "../Icons/searchIcon.svg";
import styles from './Search.module.css';

const Search = () => {
    const [search, setSearch] = useState<string>("");
    let { components } = useContext(ComponentsContext);
    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    return (
        <div className={styles.container}>
            <button className={styles.searchButton} onClick={() => handleShow()}><img src={searchIcon} alt="searchIcon" />Search...</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className={styles.ModalHeader}>
                    <Modal.Title >
                        <input className={styles.searchInput} type="text" placeholder="Search..." value={search} onChange={(e) =>{setSearch(e.target.value)}}></input>
                    </Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        {components.filter((component => component.name.toLowerCase().startsWith(search.toLowerCase()))).map((component, index) => {
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