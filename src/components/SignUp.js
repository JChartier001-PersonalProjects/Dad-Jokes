import React, {useState} from 'react'
import axios from "axios";

const SignUp = (props) => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    console.log(user)


const  handleChange = e => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    })
    console.log(e.target.name);
}

const handleSubmit =(e) => {
    e.preventDefault();
    axios
    .post('http://localhost:3300/api/auth/register', user)
    .then(response => {
        console.log("response",response)
        localStorage.setItem('token', response.data.token );
        props.history.push('/login');
    })
    .catch(error => {
        console.log(error);
    });
}

return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Username: <input type='text' name='username' placeholder='Username' value={user.username}  onChange={handleChange}/></label>
        <label>Password: <input type='password' name='password' placeholder='Password'  onChange={handleChange}/></label>        
        <button>Submit</button>
        </form>
    </div>
)



}

export default SignUp;