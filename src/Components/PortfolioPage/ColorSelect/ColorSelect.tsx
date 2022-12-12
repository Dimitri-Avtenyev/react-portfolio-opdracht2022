import { useState } from "react";
import styles from "./ColorSelect.module.css";

const ColorSelect = () => {
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [colors, setColors] = useState<string[]>([]);

    const onChange : React.ChangeEventHandler<HTMLSelectElement>  = e => {
        let selectedOptions:string[] = [];

        for (let option of Array.from(e.target.selectedOptions)) {
            selectedOptions.push(option.value);
        }
        setSelectedColors(selectedOptions);

        //or 
        //setSelectedColors([...Array.from(e.target.selectedOptions)].map((option) => option.value));
    }

    return (
        <div>
            <select className={styles.selectBox} size={8} value={selectedColors} onChange={onChange} multiple>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="orange">orange</option>
                <option value="purple">purple</option>
                <option value="black">black</option>
                <option value="white">white</option>
            </select>
            <button className={styles.button} onClick={() => {setColors([...selectedColors])}}>Show colors</button>
            
            <div className={styles.colorContainer}>
                {colors.map((color, index:number) => (
                     <div key={index} style={{backgroundColor: color, height: 100, flex: 1}}></div>
                ))}
               
            </div>
        </div>
    )
}

export default ColorSelect;