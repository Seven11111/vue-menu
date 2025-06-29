<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="page-container">
    <div class="page-header">
      <h1>🎯 演示1页面</h1>
      <div class="route-info">
        <span class="label">页面名称:</span>
        <span class="value">{{ route.name }}</span>
      </div>
      <div class="route-info">
        <span class="label">路由路径:</span>
        <span class="value">{{ route.path }}</span>
      </div>
      <div class="route-info">
        <span class="label">完整路径:</span>
        <span class="value">{{ route.fullPath }}</span>
      </div>
      <div class="route-info">
        <span class="label">路由参数:</span>
        <span class="value">{{ JSON.stringify(route.params) }}</span>
      </div>
    </div>
    
    <div class="page-content">
      <div class="demo-section">
        <h2>📋 页面信息</h2>
        <p>这是演示1页面，属于一级子菜单。当访问此页面时，顶层的"演示"菜单项会显示激活状态。</p>
      </div>
      
      <div class="menu-demo">
        <h3>🎨 菜单激活效果演示</h3>
        <div class="demo-card">
          <h4>当前菜单状态</h4>
          <ul>
            <li>✅ 首页菜单 - 未激活</li>
            <li>🟢 演示菜单 - <strong>已激活</strong> (因为当前在演示子页面)</li>
            <li>✅ 关于菜单 - 未激活</li>
          </ul>
        </div>
      </div>
      
      <div class="navigation-tips">
        <h3>💡 导航提示</h3>
        <div class="tips-grid">
          <div class="tip-item">
            <span class="tip-icon">🔍</span>
            <div class="tip-content">
              <h4>观察菜单状态</h4>
              <p>注意顶部菜单栏中"演示"菜单项的下划线效果</p>
            </div>
          </div>
          <div class="tip-item">
            <span class="tip-icon">🖱️</span>
            <div class="tip-content">
              <h4>悬停效果</h4>
              <p>将鼠标悬停在菜单项上查看交互效果</p>
            </div>
          </div>
          <div class="tip-item">
            <span class="tip-icon">📱</span>
            <div class="tip-content">
              <h4>响应式设计</h4>
              <p>尝试调整浏览器窗口大小查看响应式效果</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  background: linear-gradient(135deg, #42b883 0%, #42d392 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(66, 184, 131, 0.2);
}

.page-header h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  font-weight: 700;
}

.route-info {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.label {
  font-weight: 600;
  margin-right: 0.5rem;
  min-width: 80px;
}

.value {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
}

.page-content {
  display: grid;
  gap: 2rem;
}

.demo-section, .menu-demo, .navigation-tips {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #e1e8ed;
}

.demo-section h2, .menu-demo h3, .navigation-tips h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.6rem;
}

.demo-section p {
  color: #666;
  line-height: 1.6;
  font-size: 1.1rem;
}

.demo-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #42b883;
}

.demo-card h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.demo-card ul {
  list-style: none;
  padding: 0;
}

.demo-card li {
  padding: 0.5rem 0;
  color: #666;
  font-size: 1rem;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e1e8ed;
}

.tip-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.tip-content h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.tip-content p {
  color: #666;
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .page-container {
    padding: 1rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .tips-grid {
    grid-template-columns: 1fr;
  }
}
</style>
