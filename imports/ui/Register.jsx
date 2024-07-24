import {
  Meteor
} from 'meteor/meteor';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Register = () => {

  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [passWordNext, setPassWordNext] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    if(userName&&passWord&&passWordNext&&passWord == passWordNext) {
      const user = {
        username:userName,
        password:passWord
      };

      Meteor.call('userAccount.create', user, (error, result) => {
          if (error) {
              console.error(error);
          } else {
              if (result?.length) {
                 navigate("/login");;
              } else {
                  console.error('密码或用户名输入有误!');
              }
          }
      });
    }
  }

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
          onSubmit={handleSubmit}
        >
          <p className="form-title">注册</p>
          <p>
            <input
              id="J_username"
              type="input"
              name="username"
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
              name="password"
              required="required"
              autoComplete="off"
              placeholder="密码"
              onChange={e => setPassWord(e.target.value)}
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
              onChange={e => setPassWordNext(e.target.value)}
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