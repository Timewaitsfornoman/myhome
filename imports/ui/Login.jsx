import {
  Meteor
} from 'meteor/meteor';
import {
    Session
} from 'meteor/session';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const [userName, setUserName] = useState('test@163.com');
  const [passWord, setPassWord] = useState('123456');

  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    const user = {
      username:userName,
      password:passWord
    };

    Meteor.call('users.findUser', user, (error, result) => {
        if (error) {
            console.error(error);
        } else {
            if (result?.length) {
                Session.set('userId', result[0]._id);
               navigate("/");;
            } else {
                console.error('密码或用户名输入有误!');
            }
        }
    });
  }

  return (
    <div className="container">
      <div className="login-wrapper">
        <div className="log-wapper">
          <img src="img/leaf.jpg" alt="leaf" className="logo" />
        </div>
        <form className="J_form form" autoComplete="off" onSubmit={handleSubmit}>
          <p className="form-title">登录</p>
          <p>
            <input
              id="J_username"
              type="input"
              name="userName"
              defaultValue="test@163.com"
              required="required"
              autoComplete="off"
              placeholder="用户名"
              onChange={e => setUserName(e.target.value)}
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
              onChange={e => setPassWord(e.target.value)}
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
