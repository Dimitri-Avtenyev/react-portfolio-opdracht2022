import { useState } from "react";
import styles from "./Rating.module.css";
import smileyHappy from './Icons/smileyHappy.svg';
import smileyDissapointed from './Icons/smileyDissapointed.svg';
import smileySad from './Icons/smileySad.svg';
import smileyShocked from "./Icons/smileyShocked.svg";
import smileyVeryHappy from "./Icons/smileyVeryHappy.svg";
import smileyItriedSoHard from "./Icons/smileyItriedSoHard.svg"
const Rating = () => {
    const [rating, setRating] = useState<string>("Rate my work");

    const changeSmiley = () => {
        if (parseInt(rating) < 9 ) {
            return  <img src={smileySad} alt="sad smiley"/>
        } else if (parseInt(rating) < 10) {
            return <img src={smileyShocked } alt="schocked smiley"/>
        } else if (parseInt(rating) < 12) {
            return <img src={smileyDissapointed} alt="dissapointed smiley"/>
        } else if (parseInt(rating) < 14) {
            return <img src={smileyItriedSoHard} alt="'I tried so hard' smiley"/>
        } else if (parseInt(rating) < 16) {
            return <img src={smileyHappy} alt="happy smiley"/>
        } else if (parseInt(rating) >= 16) {
            return <img src={smileyVeryHappy} alt="very happy smiley"/>
        }
    }
    
    return (
        <div className={styles.rating}>
            <p>{rating} /20 <span>{changeSmiley()}</span></p>
            
            <input type="range" min="0" max="20" step="1" value={rating}
                onChange={(e) => {setRating(e.target.value)}} name="rating"
            />
            
    </div>
    );
}

export default Rating;