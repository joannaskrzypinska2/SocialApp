import React, { useState } from 'react';

const SignUp = (props) => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  //   const [userEmail, setUserEmail] = useState('');
  //   const [UserPassword, setUserPassword] = useState('');
  //   const [userPasswordConf, setUserPasswordConf] = useState('');

  const onChange = (userProp, value) => {
    setUser({ ...user, [userProp]: value }); //using the current state => ...user, and the new data
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let errorMessages = {};
    if (!user.username || user.username.length < 4 || user.username.indexOf(' ') > -1) {
      errorMessages.username = 'Username wrong';
    }
    if (!user.email || user.email.indexOf(' ') > -1) {
      errorMessages.email = 'Email wrong';
    }
    if (!user.password || user.password.length < 6) {
      errorMessages.password = 'Password wrong';
    }
    if (user.passwordConf !== user.password) {
      errorMessages.passwordConf = 'Password not matching';
    }
    setErrors(errorMessages);
    if (!Object.keys(errorMessages).length) {
      props.signUp(e, user.username, user.email, user.password, user.passwordConf);
    }
  };

  return (
    <div className="signup-form">
      <h3>Zarejestruj się do SocialApp</h3>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => {
            onChange('username', e.target.value);
          }}
          className="form-element"
          type="text"
          placeholder="Nazwa użytkownika"
        />
        {errors.username && <p className="error">{errors.username}</p>}
        <input
          onChange={(e) => {
            onChange('email', e.target.value);
          }}
          className="form-element"
          type="email"
          placeholder="Adres email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          onChange={(e) => {
            onChange('password', e.target.value);
          }}
          className="form-element"
          type="password"
          placeholder="Hasło"
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <input
          onChange={(e) => {
            onChange('passwordConf', e.target.value);
          }}
          className="form-element"
          type="password"
          placeholder="Potwierdź hasło"
        />
        {errors.passwordConf && <p className="error">{errors.passwordConf}</p>}
        <button className="form-element" type="submit">
          Zarejestruj się
        </button>
      </form>
    </div>
  );
};

export default SignUp;
