<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="page-container">
    <div class="page-header">
      <h1>🏠 首页</h1>
      <div class="route-info">
        <span class="label">页面名称:</span>
        <span class="value">{{ route.name }}</span>
      </div>
      <div class="route-info">
        <span class="label">路由路径:</span>
        <span class="value">{{ route.path }}</span>
      </div>
      <div class="route-info">
        <span class="label">路由参数:</span>
        <span class="value">{{ JSON.stringify(route.params) }}</span>
      </div>
    </div>
    
    <div class="page-content">
      <div class="welcome-section">
        <h2>欢迎使用 Vue3 动态菜单系统</h2>
        <p>这是一个基于 Vue3 + Vue Router 的动态菜单配置项目，支持多级嵌套菜单和智能激活状态。</p>
      </div>
      
      <div class="features-section">
        <h3>✨ 主要功能</h3>
        <ul>
          <li>🔄 动态菜单配置</li>
          <li>📱 响应式设计</li>
          <li>🎯 智能激活状态</li>
          <li>⚡ 平滑动画效果</li>
          <li>🌳 多级嵌套支持</li>
        </ul>
      </div>
      
      <div class="tech-stack">
        <h3>🛠️ 技术栈</h3>
        <div class="tech-items">
          <span class="tech-item">Vue 3</span>
          <span class="tech-item">Vue Router 4</span>
          <span class="tech-item">Vite</span>
          <span class="tech-item">CSS3</span>
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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

.welcome-section, .features-section, .tech-stack {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #e1e8ed;
}

.welcome-section h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.welcome-section p {
  color: #666;
  line-height: 1.6;
  font-size: 1.1rem;
}

.features-section h3, .tech-stack h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.features-section ul {
  list-style: none;
  padding: 0;
}

.features-section li {
  padding: 0.5rem 0;
  color: #666;
  font-size: 1.1rem;
}

.tech-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tech-item {
  background: #42b883;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .page-container {
    padding: 1rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .tech-items {
    flex-direction: column;
  }
}
</style>
