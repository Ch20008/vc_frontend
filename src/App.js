import React, { useState } from 'react';
import './App.css';
import LoginPage from './LoginPage';
import Curtain from './Curtain';

function App() {
  const [currentPage, setCurrentPage] = useState('title'); // 'title' 或 'login'
  const [isClicked, setIsClicked] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showCurtain, setShowCurtain] = useState(false);
  const [pageChanged, setPageChanged] = useState(false);

  const handleScreenClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setClickPosition({ x, y });
    setIsClicked(true);
    
    // 先显示点击效果，然后显示幕布
    setTimeout(() => {
      setIsClicked(false);
      setShowCurtain(true);
    }, 600);
  };

  const handlePageChange = () => {
    setCurrentPage('login');
  };

  const handleCurtainComplete = () => {
    // 动画完成后隐藏幕布
    setShowCurtain(false);
  };

  const handleBackToTitle = () => {
    setCurrentPage('title');
  };

  const handleRegister = () => {
    console.log('跳转到注册页面');
    // 这里可以添加注册页面的逻辑
  };

  const handleForgotPassword = () => {
    console.log('跳转到忘记密码页面');
    // 这里可以添加忘记密码页面的逻辑
  };

  // 如果当前页面是登录页面，显示登录页面
  if (currentPage === 'login') {
    return (
      <>
        <LoginPage 
          onBack={handleBackToTitle}
          onRegister={handleRegister}
          onForgotPassword={handleForgotPassword}
        />
        {showCurtain && (
          <Curtain 
            isOpen={showCurtain} 
            onPageChange={handlePageChange}
            onAnimationComplete={handleCurtainComplete}
          />
        )}
      </>
    );
  }

  // 标题页面
  return (
    <>
      <div className="App" onClick={handleScreenClick}>
        {/* 主要内容区域 */}
        <div className="main-content">
          {/* 标题 */}
          <div className="title-container">
            <h1 className="game-title">
              <span className="title-text">TITLE</span>
            </h1>
          </div>

          {/* 第一条分割线 */}
          <div className="divider"></div>

          {/* 点击提示 */}
          <div className="click-hint">
            <p>点击屏幕进入游戏</p>
          </div>

          {/* 第二条分割线 */}
          <div className="divider"></div>

          {/* 版权信息 */}
          <div className="copyright-info">
            <p>本公司积极响《网络游戏行业防沉迷自律公约》</p>
            <p>著作权人:XXX 出版单位:XXXXXXXXXXXXX</p>
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

      {/* 幕布特效 */}
      {showCurtain && (
        <Curtain 
          isOpen={showCurtain} 
          onPageChange={handlePageChange}
          onAnimationComplete={handleCurtainComplete}
        />
      )}
    </>
  );
}

export default App; 