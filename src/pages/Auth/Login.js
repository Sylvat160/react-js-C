import React from 'react';
import { useState } from 'react';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(login , password);
    }
    return (
        <div className="login-box">
        <h2>Login  </h2>
    <form onSubmit={onSubmit}>
        <div className="user-box group">
            <input type="text" name="login" value={login} onChange={e=>setLogin(e.target.value)}  required/>
            <label htmlFor='login'>Username</label>
        </div>
        <div className="user-box group">
            <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} required=""/>
            <label htmlFor='password'>Password</label>
        </div>
        <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button className='btn-form' type="submit">Submit</button>
        </a>
    </form>
</div>
    );
};

export default Login;