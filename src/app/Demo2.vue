<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="page-container">
    <div class="page-header">
      <h1>🔧 演示2页面</h1>
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
        <p>这是演示2页面，属于二级子菜单。当访问此页面时，顶层的"演示"菜单项和二级的"演示子菜单1"都会显示激活状态。</p>
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
          <div class="tree-item sub-item sub-sub-item current">
            <span class="tree-icon">📄</span>
            <span class="tree-text">演示2 (当前页面)</span>
          </div>
        </div>
      </div>
      
      <div class="activation-demo">
        <h3>🎯 激活状态演示</h3>
        <div class="demo-cards">
          <div class="demo-card">
            <h4>一级菜单</h4>
            <p>演示菜单项显示绿色下划线，表示当前在演示的子页面中</p>
            <div class="status-indicator active">已激活</div>
          </div>
          <div class="demo-card">
            <h4>二级菜单</h4>
            <p>演示子菜单1显示激活状态，因为当前页面属于该子菜单</p>
            <div class="status-indicator active">已激活</div>
          </div>
          <div class="demo-card">
            <h4>当前页面</h4>
            <p>演示2页面是当前访问的页面</p>
            <div class="status-indicator current">当前页面</div>
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
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(255, 107, 107, 0.2);
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

.demo-section, .menu-hierarchy, .activation-demo {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #e1e8ed;
}

.demo-section h2, .menu-hierarchy h3, .activation-demo h3 {
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
  color: #ff6b6b;
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

.demo-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.demo-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e1e8ed;
}

.demo-card h4 {
  color: #2c3e50;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}

.demo-card p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.status-indicator {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
}

.status-indicator.active {
  background: #42b883;
  color: white;
}

.status-indicator.current {
  background: #ff6b6b;
  color: white;
}

@media (max-width: 768px) {
  .page-container {
    padding: 1rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .demo-cards {
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
