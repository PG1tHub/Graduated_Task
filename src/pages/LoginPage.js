import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png';
import './LoginPage.css';
import Cookies from 'js-cookie';

function LoginPage({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // if(username === 'testuser' && password === 'testpass') {
    //   alert ('로그인 성공');
    //   setIsLoggedIn(true);
    //   navigate('/');
    // } else {
    //   alert ('아이디나 비밀번호를 확인하세요.');
    // }
    try {
      const response = await fetch('http://43.202.46.29:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      
      if (response.ok) {
        // JWT 쿠키 설정
        Cookies.set('authToken', data.accessToken, { secure: true, sameSite: 'Strict' });

        setIsLoggedIn(true);
        navigate('/');
      } else {
        console.error('Login failed:', data.message);
        alert('로그인 실패. 사용자 정보를 확인하세요.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="Login">
      <header className="Login-header">
        <Link to="/">
          <img src={Logo} alt="로고" className="logo" />
        </Link>
      </header>

      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>로그인</button>
      </div>
      <Link to="/signup">회원이 아니신가요?</Link>
    </div>
  );
}

export default LoginPage;
