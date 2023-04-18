import { useState } from 'react';

function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleClick = (event) => {
        // Add validation for username and password
        console.log(`Username is ${username}, password is ${password}`);
        // const token = await getWSToken(username, password);
        // const userid = await getUserID(token, username, password);
    }

    return (
        <div>
            <input type="text" name="username" value={username} onChange={handleChangeUsername}/>
            <input type="text" name="password" value={password} onChange={handleChangePassword}/>
            <button onClick={handleClick}>Login</button>
        </div>
    );
}

export default Login;