import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { accountService } from '@/_services/account.service';

const Login = () => {
    // const [login, setLogin] = useState('');
    // const [password, setPassword] = useState('');

    let navigate = useNavigate();


    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }

    const [credentials, setCredentials] = useState({
        email : 'admin@admin.com',
        password : '111111111'
    });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
        accountService.Login(credentials)
            .then(res => { 
                accountService.saveToken(res.data.access_token);
                navigate('/admin', { replace: true });
            })
            .catch(err => { console.log(err)})
    }
    return (
        <div className="login-box">
        <h2>Login  </h2>
    <form onSubmit={onSubmit}>
        <div className="user-box group">
            <input type="text" name="email" value={credentials.email} onChange={onChange} required/>
            <label htmlFor='login'>Username</label>
        </div>
        <div className="user-box group">
            <input type="password" name="password" value={credentials.password} onChange={onChange} required=""/>
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