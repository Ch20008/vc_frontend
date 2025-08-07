import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ onBack, onRegister, onForgotPassword }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleLogin = (e) => {
    e.preventDefault();
    setIsClicked(true);
    
    // 模拟登录验证
    if (!username || !password) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    // 这里可以添加实际的登录逻辑
    console.log('登录:', { username, password });
  };

  const handleScreenClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setClickPosition({ x, y });
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
  };

  return (
    <div className="login-page" onClick={handleScreenClick}>
      {/* 返回按钮 */}
      <button className="back-button" onClick={onBack}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>

      {/* 主要内容 */}
      <div className="login-content">
        {/* 标题区域 */}
        <div className="login-title">
          <div className="title-graphic">
            <svg viewBox="0 0 100 100" className="dragon-icon">
              <path d="M20,50 Q30,20 50,30 Q70,40 80,50 Q70,80 50,70 Q30,60 20,50 Z" 
                    fill="none" stroke="#8B4513" strokeWidth="2"/>
              <path d="M25,45 Q35,25 45,35 Q55,45 65,35 Q75,25 85,45" 
                    fill="none" stroke="#8B4513" strokeWidth="1.5"/>
              <path d="M30,40 Q40,20 50,30 Q60,40 70,30 Q80,20 90,40" 
                    fill="none" stroke="#8B4513" strokeWidth="1"/>
              <circle cx="35" cy="35" r="2" fill="#8B4513"/>
              <circle cx="65" cy="65" r="2" fill="#8B4513"/>
              <circle cx="45" cy="55" r="1.5" fill="#8B4513"/>
              <circle cx="75" cy="45" r="1.5" fill="#8B4513"/>
              {/* 添加更多细节来模拟龙形图案 */}
              <path d="M15,60 Q25,55 35,60 Q45,65 55,60 Q65,55 75,60 Q85,65 90,60" 
                    fill="none" stroke="#8B4513" strokeWidth="1"/>
              <path d="M10,40 Q20,35 30,40 Q40,45 50,40 Q60,35 70,40 Q80,45 85,40" 
                    fill="none" stroke="#8B4513" strokeWidth="1"/>
            </svg>
          </div>
          <h1 className="title-text">TITLE123</h1>
        </div>

        {/* 错误信息 */}
        {showError && (
          <div className="error-message">
            !未找到用户名或密码输入错误
          </div>
        )}

        {/* 登录表单 */}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">用户名:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="请输入用户名"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">密码:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入密码"
            />
          </div>

          <button type="submit" className="login-btn">
            登录
          </button>
        </form>

        {/* 底部链接 */}
        <div className="bottom-links">
          <button className="link-btn" onClick={onRegister}>
            注册
          </button>
          <span className="separator">|</span>
          <button className="link-btn" onClick={onForgotPassword}>
            忘记密码
          </button>
        </div>
      </div>

      {/* 点击效果 */}
      {isClicked && (
        <div 
          className="click-effect"
          style={{
            left: clickPosition.x,
            top: clickPosition.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="effect-circle"></div>
        </div>
      )}
    </div>
  );
}

export default LoginPage; 