# Vue 动态菜单系统

基于 Vue Router 配置的智能菜单系统，支持无限层级嵌套菜单，具有现代化的UI设计和流畅的动画效果。

## 功能特性

✅ **自动生成菜单** - 根据路由配置自动生成菜单结构  
✅ **无限层级嵌套** - 支持任意层级的菜单嵌套  
✅ **智能交互** - 有子菜单的父菜单不可点击，只能点击子菜单  
✅ **悬停显示** - 鼠标悬停显示子菜单，类似Vue.js官方文档  
✅ **水平布局** - 菜单项水平排列，节省空间  
✅ **流畅动画** - 使用Vue 3 Transition组件实现流畅动画  
✅ **响应式设计** - 支持移动端适配  
✅ **现代化UI** - 渐变背景、阴影效果、毛玻璃效果

## 快速开始

### 1. 启动

```bash
npm install # 安装依赖
npm run dev # 启动项目
```

### 2. 配置路由

在 `src/router/index.js` 中配置你的路由：

```javascript
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: '首页',
        component: Home,
    },
    {
        path: '/demo',
        name: '演示',
        component: Layout,
        children: [
            {
                path: 'demo1',
                name: '演示1',
                component: Demo1
            },
            {
                path: 'demo-sub',
                name: '演示子菜单1',
                component: Layout,
                children: [
                    {
                        path: 'demo2',
                        name: '演示2',
                        component: Demo2
                    },
                    {
                        path: 'demo-sub2',
                        name: '演示子菜单2',
                        component: Layout,
                        children: [
                            {
                                path: 'demo3',
                                name: '演示3',
                                component: Demo3
                            }
                        ]
                    },
                ]
            },
        ]
    },
    {
        path: '/about',
        name: '关于',
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
```

### 3. 使用菜单组件

在 `App.vue` 中使用菜单组件：

```vue
<template>
  <div id="app">
    <AdvancedMenu />
    <router-view />
  </div>
</template>

<script setup>
import AdvancedMenu from './components/AdvancedMenu.vue'
</script>
```

## 组件说明

### AdvancedMenu.vue

主要的菜单组件，负责：
- 读取路由配置
- 渲染顶级菜单项
- 处理鼠标悬停事件
- 管理菜单状态

### MenuDropdown.vue

递归子菜单组件，负责：
- 渲染子菜单项
- 支持无限层级嵌套
- 处理子菜单的悬停事件
- 提供动画效果

## 菜单规则

1. **无子菜单的路由** - 直接显示为可点击的菜单项
2. **有子菜单的路由** - 显示为不可点击的父菜单，鼠标悬停显示子菜单
3. **子菜单嵌套** - 支持任意层级的嵌套，每个层级都有相应的视觉指示

## 自定义样式

### 修改菜单颜色

在 `AdvancedMenu.vue` 中修改：

```css
.advanced-menu {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 修改子菜单样式

在 `MenuDropdown.vue` 中修改：

```css
.dropdown-menu {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}
```

### 修改动画效果

调整 Transition 组件的动画：

```css
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 响应式设计

菜单系统自动适配移动端：

- 桌面端：水平布局，悬停显示子菜单
- 移动端：垂直布局，点击展开子菜单

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 性能优化

- 使用 Vue 3 的 Composition API
- 懒加载子菜单组件
- 优化的动画性能
- 最小化重渲染

## 示例项目

访问 `/about` 路由查看完整的演示页面，包含：
- 功能特性展示
- 使用方法说明
- 代码示例
- 当前路由信息

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个菜单系统。

## 许可证

MIT License 
