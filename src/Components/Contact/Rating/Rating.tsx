import { useContext, useState } from "react";
import styles from "./Rating.module.css";
import smileyHappy from './Icons/smileyHappy.svg';
import smileyDissapointed from './Icons/smileyDissapointed.svg';
import smileySad from './Icons/smileySad.svg';
import smileyShocked from "./Icons/smileyShocked.svg";
import smileyVeryHappy from "./Icons/smileyVeryHappy.svg";
import smileyItriedSoHard from "./Icons/smileyItriedSoHard.svg"
import { ThemeContext } from "Components/App/Context/ThemeContext";

const Rating = () => {
    const [rating, setRating] = useState<string>("Rate my work");
    const {theme, setTheme} = useContext(ThemeContext);

    const changeSmiley = () => {
        let ratingNumber:number = parseInt(rating);
  
        switch(true) {
            case (ratingNumber < 9):
                return  <img src={smileySad} alt="sad smiley"/>;
            case (ratingNumber < 10):
                return <img src={smileyShocked } alt="schocked smiley"/>;
            case (ratingNumber < 12):
                return <img src={smileyDissapointed} alt="dissapointed smiley"/>;
            case (ratingNumber <14):
                return <img src={smileyItriedSoHard} alt="'I tried so hard' smiley"/>;
            case (ratingNumber < 16):
                return <img src={smileyHappy} alt="happy smiley"/>;
            case (ratingNumber >= 16):
                return <img src={smileyVeryHappy} alt="very happy smiley"/>;
        }
    }
    const themeChangeInvert = (theme:string) => {
        if (theme === "dark") {
            return {
                filter:"invert(100%)"
                }
        }
    }
    
    return (
        <div className={styles.rating}>
            <p>{rating} /20 <span style={themeChangeInvert(theme)}>{changeSmiley()}</span></p>
            
            <input type="range" min="0" max="20" step="1" value={rating}
                onChange={(e) => {setRating(e.target.value)}} name="rating"
            />
            
    </div>
    );
}

export default Rating;