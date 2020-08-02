import React from 'react';

function Signup(props) {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [setUserPassword, setUserEmail] = useState('');
    const [userPasswordConf, setUserPasswordConf] = useState('');

    return (
            <div class="signup-form">
            <h3>Zarejestruj się do SocialApp</h3>
            <form onSubmit={(e) =>props.signInMethod(e, userName, userEmail, userPassword, userPasswordConf)}>
                <input onChange={(e) =>{setUserName(e.target.value)}} class="form-element" type="text" placeholder="Nazwa użytkownika" />
                <input onChange={(e) =>{setUserEmail(e.target.value)}} class="form-element" type="text" placeholder="Adres email" />
                <input onChange={(e) =>{setUserPassword(e.target.value)}} class="form-element" type="text" placeholder="Hasło" />
                <input onChange={(e) =>{setUserPasswordConf(e.target.value)}} class="form-element" type="text" placeholder="Potwierdź hasło" />
                <button class="form-element" type="submit">Zarejestruj się</button>
            </form>
        </div>
    )
}


export default SignUp;