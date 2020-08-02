import React from 'react';
import './Login.css';

function Login() {
    return (
        <div class="login-form">
            <h3>Zaloguj się do SocialApp</h3>
            <form>
                <input class="form-element" type="text" placeholder="Login" />
                <input class="form-element" type="text" placeholder="Hasło" />
                <button class="form-element" type="submit">Zaloguj się</button>
                <p>Nie pamiętasz hasła? Zarejestruj się aby skorzystać z SocialApp</p>
            </form>
        </div>
    )
}


export default Login;