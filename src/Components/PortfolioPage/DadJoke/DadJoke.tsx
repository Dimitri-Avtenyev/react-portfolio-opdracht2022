import { useState, useEffect } from "react";

interface Joke {
    id:     string,
    joke:   string,
    status: number
}

const DadJoke = () => {
    const [joke, setJoke] = useState<string>("");
    const [favoriteJoke, setFavoriteJoke] = useState<string>(localStorage.getItem("favorite") ?? "");

    const fetchJoke = async () => {
        let response = await fetch("https://icanhazdadjoke.com", {
            headers: {"Accept":"application/json"}
        });
        let result:Joke = await response.json();
        setJoke(result.joke);

    }
    const loadLocal = () => {
        let joke = localStorage.getItem("favoriteJoke");
        if(joke) {
            setFavoriteJoke(joke);
        }
    }
    const setAsFavorite = () => {
        setFavoriteJoke(joke);
        localStorage.setItem("favoriteJoke", joke);
    }
    useEffect(() => {
        fetchJoke();
        loadLocal();
    },[])

    fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
});
    return (
        <div  style={{display: "block", padding: "2rem", border: "1px solid black", boxShadow:"1px 1px 1px 1px"}}>
            <div>
                <h1 style={{fontSize: "bold"}}>Random joke:</h1>
                <p>{joke}</p>
                <div style={{display: "flex", gap: "5px"}}>
                    <button style={{borderRadius: "10px"}} onClick={setAsFavorite}>Set as favorite</button>
                    <button style={{borderRadius: "10px"}} onClick={fetchJoke}>New joke</button>
                </div>
            </div>
            <div>
                <h1>Favorite joke:</h1>
                    {favoriteJoke}
                </div>
        </div>
     
    );
}

export default DadJoke;