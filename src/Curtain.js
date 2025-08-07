import React, { useState, useEffect } from 'react';
import './Curtain.css';

function Curtain({ isOpen, onPageChange, onAnimationComplete }) {
  const [stage, setStage] = useState('hidden'); // hidden, fading, visible, opening

  useEffect(() => {
    if (isOpen) {
      // 第一步：开始渐黑
      setStage('fading');
      
      // 第二步：完全变黑后立即切换页面
      const visibleTimer = setTimeout(() => {
        setStage('visible');
        // 在这里触发页面切换
        if (onPageChange) {
          onPageChange();
        }
      }, 800);

      // 第三步：延迟后开始拉开
      const openingTimer = setTimeout(() => {
        setStage('opening');
      }, 1300);

      // 第四步：拉开动画完成后隐藏幕布
      const completeTimer = setTimeout(() => {
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }, 2800);

      return () => {
        clearTimeout(visibleTimer);
        clearTimeout(openingTimer);
        clearTimeout(completeTimer);
      };
    } else {
      setStage('hidden');
    }
  }, [isOpen, onPageChange, onAnimationComplete]);

  if (stage === 'hidden') return null;

  return (
    <div className={`curtain curtain-${stage}`}>
      <div className="curtain-overlay"></div>
      <div className="curtain-panel left"></div>
      <div className="curtain-panel right"></div>
    </div>
  );
}

export default Curtain; 