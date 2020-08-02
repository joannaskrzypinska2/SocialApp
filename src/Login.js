import React, {useState} from 'react';
import './Login.css';

function Login(props) {

    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <div class="login-form">
            <h3>Zaloguj się do SocialApp</h3>
            <form onSubmit={(e) =>props.logInMethod(e, userLogin, userPassword)}>
                <input onChange={(e) =>{setUserLogin(e.target.value)}} class="form-element" type="text" placeholder="Login" />
                <input onChange={(e) =>{setUserPassword(e.target.value)}} class="form-element" type="text" placeholder="Hasło" />
                <button class="form-element" type="submit">Zaloguj się</button>
                <p>Nie pamiętasz hasła? Zarejestruj się aby skorzystać z SocialApp</p>
            </form>
        </div>
    )
}


export default Login;