import React from 'react';

const Login = () => {
    return (
        <div className="login-box">
        <h2>Login</h2>
    <form>
        <div className="user-box group">
            <input type="text" name="login"  required/>
            <label htmlFor='login'>Username</label>
        </div>
        <div className="user-box group">
            <input type="password" name="password" required=""/>
            <label htmlFor='password'>Password</label>
        </div>
        <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        Submit
        </a>
    </form>
</div>
    );
};

export default Login;