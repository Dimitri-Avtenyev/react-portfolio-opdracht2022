import React, { useState } from "react";
import styles from "./ShoppingList.module.css";

interface ShoppingItemList {
    name:       string,
    quantity:   number
}
const ShoppingList = () => {
    const [shoppingList, setShoppingList] = useState<ShoppingItemList[]>([]);
    const [name, setName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorsMessage, setErrorMessage] = useState<string>("");

    const addShoppingItem = () => {
        if(quantity < 1) {
            setErrorMessage("Quantity should be above 0.");
            setSuccessMessage("");
        } else if (name === "") {
            setErrorMessage("Name cannot be empty.");
            setSuccessMessage("");
        } else {
            setShoppingList([...shoppingList, {name: name, quantity: quantity}]);
            setSuccessMessage("Item has been succesfully added.");
            setErrorMessage("");
        }
    
    }
    const removeShoppingItem = (index:number) => {
        let shoppingListCopy = shoppingList.filter((item, indexItem) => indexItem !== index);
        setShoppingList(shoppingListCopy);
        setSuccessMessage("Item has been removed.");
        setErrorMessage("");
    }
    return (
        <div>
            {errorsMessage && <div className={styles.error}>{errorsMessage}</div>}
            {successMessage && <div className={styles.success}>{successMessage}</div>}
            <div className={styles.addList}>
                <label>Name:</label>
                <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
                <label>Quantity: </label>
                <input type="number" placeholder="Quantity" value={quantity} onChange={(event) => setQuantity(parseInt(event.target.value))}/>
            </div>
            <button onClick={addShoppingItem}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shoppingList.map((item:ShoppingItemList, index:number) => 

                            <React.Fragment key={index}>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td><button onClick={() => removeShoppingItem(index)}>Remove</button></td>  
                                </tr>
                            </React.Fragment>
                        )
                    }
                </tbody>
            </table>
        </div>
    )

}

export default ShoppingList;