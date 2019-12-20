import React, {useEffect, useState} from "react";
import axios from "axios";

const User = () => {
    const [joke, setJoke] = useState();
    console.log(joke);


    useEffect(() => {
        axios
        .get('http://localhost:3300/api/jokes', {
            headers: {
                Authorization: localStorage.getItem('token')
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

    return(
        joke && joke.length !== 0 ? joke.map(joke => {
            return(
                <div>
                    <div>{joke.joke}</div>
                    
                </div> 
            )
        }) : 
        null
    )
}

export default User;