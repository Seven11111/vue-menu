<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="page-container">
    <div class="page-header">
      <h1>🚀 演示3页面</h1>
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
    </div>
    
    <div class="page-content">
      <div class="demo-section">
        <h2>📋 页面信息</h2>
        <p>这是演示3页面，属于三级子菜单。当访问此页面时，所有父级菜单项都会显示激活状态，形成完整的激活链路。</p>
      </div>
      
      <div class="menu-hierarchy">
        <h3>🌳 菜单层级结构</h3>
        <div class="hierarchy-tree">
          <div class="tree-item active">
            <span class="tree-icon">📁</span>
            <span class="tree-text">演示 (已激活)</span>
          </div>
          <div class="tree-item sub-item active">
            <span class="tree-icon">📁</span>
            <span class="tree-text">演示子菜单1 (已激活)</span>
          </div>
          <div class="tree-item sub-item active">
            <span class="tree-icon">📁</span>
            <span class="tree-text">演示子菜单2 (已激活)</span>
          </div>
          <div class="tree-item sub-item sub-sub-item current">
            <span class="tree-icon">📄</span>
            <span class="tree-text">演示3 (当前页面)</span>
          </div>
        </div>
      </div>
      
      <div class="activation-chain">
        <h3>🔗 激活链路演示</h3>
        <div class="chain-container">
          <div class="chain-item active">
            <div class="chain-icon">📁</div>
            <div class="chain-content">
              <h4>演示</h4>
              <p>一级菜单 - 已激活</p>
            </div>
            <div class="chain-arrow">→</div>
          </div>
          <div class="chain-item active">
            <div class="chain-icon">📁</div>
            <div class="chain-content">
              <h4>演示子菜单1</h4>
              <p>二级菜单 - 已激活</p>
            </div>
            <div class="chain-arrow">→</div>
          </div>
          <div class="chain-item active">
            <div class="chain-icon">📁</div>
            <div class="chain-content">
              <h4>演示子菜单2</h4>
              <p>三级菜单 - 已激活</p>
            </div>
            <div class="chain-arrow">→</div>
          </div>
          <div class="chain-item current">
            <div class="chain-icon">📄</div>
            <div class="chain-content">
              <h4>演示3</h4>
              <p>当前页面</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="feature-highlight">
        <h3>✨ 功能亮点</h3>
        <div class="feature-grid">
          <div class="feature-item">
            <div class="feature-icon">🎯</div>
            <h4>智能激活</h4>
            <p>自动检测当前路由所属的父级菜单，并显示激活状态</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🌳</div>
            <h4>多级支持</h4>
            <p>支持无限层级的嵌套菜单，每级都能正确显示激活状态</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">⚡</div>
            <h4>实时更新</h4>
            <p>路由变化时立即更新菜单激活状态，无需手动刷新</p>
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
  background: linear-gradient(135deg, #9c88ff 0%, #6c5ce7 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(156, 136, 255, 0.2);
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

.demo-section, .menu-hierarchy, .activation-chain, .feature-highlight {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #e1e8ed;
}

.demo-section h2, .menu-hierarchy h3, .activation-chain h3, .feature-highlight h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.6rem;
}

.demo-section p {
  color: #666;
  line-height: 1.6;
  font-size: 1.1rem;
}

.hierarchy-tree {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e1e8ed;
}

.tree-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  color: #666;
  font-size: 1rem;
}

.tree-item.active {
  color: #42b883;
  font-weight: 600;
}

.tree-item.current {
  color: #9c88ff;
  font-weight: 700;
}

.tree-item.sub-item {
  margin-left: 2rem;
}

.tree-item.sub-sub-item {
  margin-left: 4rem;
}

.tree-icon {
  margin-right: 0.75rem;
  font-size: 1.2rem;
}

.chain-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
}

.chain-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e1e8ed;
  min-width: 200px;
  flex-shrink: 0;
}

.chain-item.active {
  background: #e8f5e8;
  border-color: #42b883;
}

.chain-item.current {
  background: #f0e8ff;
  border-color: #9c88ff;
}

.chain-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.chain-content h4 {
  color: #2c3e50;
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
}

.chain-content p {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
}

.chain-arrow {
  color: #42b883;
  font-size: 1.5rem;
  font-weight: 700;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.feature-item {
  text-align: center;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e1e8ed;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-item h4 {
  color: #2c3e50;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}

.feature-item p {
  color: #666;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .page-container {
    padding: 1rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .chain-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .chain-item {
    width: 100%;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .tree-item.sub-item {
    margin-left: 1rem;
  }
  
  .tree-item.sub-sub-item {
    margin-left: 2rem;
  }
}
</style>
