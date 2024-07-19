import React, { useState } from 'react';

export const Login = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <div className="login-wrapper">
        <div className="log-wapper">
          <img src="img/leaf.jpg" alt="leaf" className="logo" />
        </div>
        <form className="J_form form" autoComplete="off">
          <h1 className="form-title">登录</h1>
          <p>
            <input
              id="J_username"
              type="input"
              name="userName"
              defaultValue="test@163.com"
              required="required"
              autoComplete="off"
              placeholder="用户名"
            />
          </p>
          <p>
            <input
              id="J_password"
              type="password"
              name="passWord"
              defaultValue={123456}
              required="required"
              autoComplete="off"
              placeholder="密码"
            />
          </p>
          <p className="remember-box">
            <label className="remember-label" htmlFor="J_save">
              <input
                className="remember"
                id="J_save"
                type="checkbox"
                name="remember"
              />{" "}
              记住密码
            </label>
          </p>
          <p>
            <input id="J_login" type="submit" name="submit" defaultValue="登陆" />
          </p>
        </form>
        <footer className="loginhelp clearfix">
          <a href="/updatepassword">忘记密码？</a>
          <a href="/register">注册账号</a>
        </footer>
      </div>
    </div>
  );
};
