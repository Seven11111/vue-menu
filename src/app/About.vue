<template>
  <div class="page-container">
    <div class="page-header">
      <h1>📖 关于项目</h1>
      <div class="route-info">
        <span class="label">页面名称:</span>
        <span class="value">{{ route.name }}</span>
      </div>
      <div class="route-info">
        <span class="label">路由路径:</span>
        <span class="value">{{ route.path }}</span>
      </div>
    </div>
    
    <div class="page-content">
      <div class="project-intro">
        <h2>🎯 项目简介</h2>
        <p>Vue3 动态菜单系统是一个基于 Vue 3 + Vue Router 4 的现代化菜单解决方案，提供了智能的菜单激活状态管理、多级嵌套支持和响应式设计。</p>
      </div>
      
      <div class="features-section">
        <h2>✨ 核心功能</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>智能激活状态</h3>
            <p>自动检测当前路由所属的父级菜单，点击子菜单项后，最顶层的父菜单项会显示激活状态（下划线）</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌳</div>
            <h3>多级嵌套支持</h3>
            <p>支持无限层级的嵌套菜单，每级都能正确显示激活状态，形成完整的激活链路</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>响应式设计</h3>
            <p>完美适配桌面端和移动端，提供流畅的用户体验</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>高性能</h3>
            <p>基于 Vue 3 的 Composition API，提供优秀的性能和开发体验</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>美观界面</h3>
            <p>现代化的设计风格，支持平滑的动画效果和悬停交互</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔧</div>
            <h3>易于配置</h3>
            <p>基于路由配置自动生成菜单，无需额外的菜单配置文件</p>
          </div>
        </div>
      </div>
      
      <div class="tech-stack">
        <h2>🛠️ 技术栈</h2>
        <div class="tech-grid">
          <div class="tech-item">
            <div class="tech-icon">⚡</div>
            <div class="tech-info">
              <h4>Vue 3</h4>
              <p>渐进式 JavaScript 框架</p>
            </div>
          </div>
          <div class="tech-item">
            <div class="tech-icon">🧭</div>
            <div class="tech-info">
              <h4>Vue Router 4</h4>
              <p>官方路由管理器</p>
            </div>
          </div>
          <div class="tech-item">
            <div class="tech-icon">⚡</div>
            <div class="tech-info">
              <h4>Vite</h4>
              <p>下一代前端构建工具</p>
            </div>
          </div>
          <div class="tech-item">
            <div class="tech-icon">🎨</div>
            <div class="tech-info">
              <h4>CSS3</h4>
              <p>现代 CSS 特性</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="usage-section">
        <h2>📖 使用方法</h2>
        <div class="usage-content">
          <div class="usage-step">
            <h3>1. 路由配置</h3>
            <p>在 Vue Router 中配置嵌套路由，菜单会自动根据路由结构生成：</p>
            <pre><code>const routes = [
  {
    path: '/demo',
    name: '演示',
    children: [
      {
        path: 'demo1',
        name: '演示1',
        component: Demo1
      }
    ]
  }
]</code></pre>
          </div>
          
          <div class="usage-step">
            <h3>2. 组件使用</h3>
            <p>在 App.vue 中引入菜单组件：</p>
            <pre><code>&lt;script setup&gt;
import AdvancedMenu from "@/components/AdvancedMenu.vue";
&lt;/script&gt;

&lt;template&gt;
  &lt;AdvancedMenu /&gt;
  &lt;router-view /&gt;
&lt;/template&gt;</code></pre>
          </div>
          
          <div class="usage-step">
            <h3>3. 自动激活</h3>
            <p>访问子页面时，父级菜单会自动显示激活状态，无需额外配置。</p>
          </div>
        </div>
      </div>
      
      <div class="demo-section">
        <h2>🎮 在线演示</h2>
        <div class="demo-links">
          <a href="/" class="demo-link">
            <span class="demo-icon">🏠</span>
            <div class="demo-info">
              <h4>首页</h4>
              <p>查看项目概览</p>
            </div>
          </a>
          <a href="/demo/demo1" class="demo-link">
            <span class="demo-icon">🎯</span>
            <div class="demo-info">
              <h4>演示1</h4>
              <p>一级子菜单激活效果</p>
            </div>
          </a>
          <a href="/demo/demo-sub/demo2" class="demo-link">
            <span class="demo-icon">🔧</span>
            <div class="demo-info">
              <h4>演示2</h4>
              <p>二级子菜单激活效果</p>
            </div>
          </a>
          <a href="/demo/demo-sub/demo-sub2/demo3" class="demo-link">
            <span class="demo-icon">🚀</span>
            <div class="demo-info">
              <h4>演示3</h4>
              <p>三级子菜单激活效果</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

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
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.2);
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
  gap: 3rem;
}

.project-intro, .features-section, .tech-stack, .usage-section, .demo-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #e1e8ed;
}

.project-intro h2, .features-section h2, .tech-stack h2, .usage-section h2, .demo-section h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.project-intro p {
  color: #666;
  line-height: 1.6;
  font-size: 1.1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e1e8ed;
  text-align: center;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e1e8ed;
}

.tech-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.tech-info h4 {
  color: #2c3e50;
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
}

.tech-info p {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
}

.usage-content {
  display: grid;
  gap: 2rem;
}

.usage-step h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.usage-step p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
}

pre {
  background: #2c3e50;
  color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.4;
}

.demo-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.demo-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e1e8ed;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
}

.demo-link:hover {
  background: #e8f5e8;
  border-color: #42b883;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.2);
}

.demo-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.demo-info h4 {
  color: #2c3e50;
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
}

.demo-info p {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .page-container {
    padding: 1rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .features-grid, .tech-grid, .demo-links {
    grid-template-columns: 1fr;
  }
  
  pre {
    font-size: 0.8rem;
    padding: 1rem;
  }
}
</style> 