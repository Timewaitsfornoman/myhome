import React, { useState } from 'react';

export const Register = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <div className="register-wrapper">
        <div className="log-wapper register-logo">
          <img src="img/leaf.jpg" alt="leaf" className="logo" />
        </div>
        <form
          action="user/login"
          className="J_form form register-form"
          autoComplete="off"
        >
          <h1 className="form-title">注册</h1>
          <p>
            <input
              id="J_username"
              type="input"
              name="username"
              required="required"
              autoComplete="off"
              placeholder="用户名"
            />
          </p>
          <p>
            <input
              id="J_password"
              type="password"
              name="password"
              required="required"
              autoComplete="off"
              placeholder="密码"
            />
          </p>
          <p>
            <input
              id="J_passwordonse"
              type="password"
              name="passworded"
              required="required"
              autoComplete="off"
              placeholder="再次输入密码"
            />
          </p>
          <p>
            <input id="J_regist" type="submit" name="submit" defaultValue="注册" />
          </p>
          <footer className="loginhelp">
            <a href="/updatepassword">忘记密码？</a>
            <a href="/login">已有账号，去登录</a>
          </footer>
        </form>
      </div>
    </div>
  );
};