import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, Route} from "react-router-dom";

import SavedList from "./SavedList";


const Jokes = () => {
    const [joke, setJoke] = useState([]);
    const [saved, setSaved] =useState([]);
   

    useEffect(() => {
        axios
        .get('http://localhost:3300/api/jokes', {
            headers: {
                Authorization: localStorage.getItem('token'),
            }
        })
        .then(response =>{
            console.log(response)
            setJoke(response.data);
        }, )
        .catch(error => {
            console.log(error)
        })
    }, [])

    const handleSubmit = (id, joke) => {
        // e.preventDefault();
        setSaved([...saved, {id, joke}]);

    }
    console.log(saved);

    return( 
        <div>
            <nav>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
                
            </nav>
            <h1>Dad Jokes</h1>
                <div className="jokeContainer">
                    { joke && joke.length !== 0 ? joke.map(joke => {
                        return(
                            <div className="joke" key={joke.id}>
                                <div>{joke.joke}</div>    
                                {/* <button onClick={(e) => handleSubmit(joke.id, joke.joke)}>Save Joke</button>                 */}
                            </div> 
                        )
                    }) : null}
                </div>
        </div>
    )
}

export default Jokes;