<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import MenuDropdown from './MenuDropdown.vue'

// 定义props
const props = defineProps({
  routes: {
    type: Array,
    required: true
  },
  level: {
    type: Number,
    default: 1
  },
  parentPath: {
    type: String,
    default: ''
  }
})

const route = useRoute()
const activeSubmenu = ref(null)

// 检查是否有子菜单
const hasChildren = (route) => {
  return route.children && route.children.length > 0
}

// 获取完整的路由路径
const getFullPath = (route) => {
  if (props.parentPath) {
    // 如果有父路径，拼接完整路径
    return `${props.parentPath}/${route.path}`
  }
  return route.path
}

// 检查当前路由是否匹配
const isCurrentRoute = (routePath) => {
  const fullPath = getFullPath(routePath)
  return route.path === fullPath
}

// 检查当前路由是否属于某个父菜单
const isCurrentRouteInParent = (parentRoute) => {
  if (!hasChildren(parentRoute)) return false
  
  const currentPath = route.path
  const parentFullPath = getFullPath(parentRoute)
  
  return currentPath.startsWith(parentFullPath)
}

// 处理鼠标进入子菜单
const handleMouseEnter = (route) => {
  if (hasChildren(route)) {
    activeSubmenu.value = route.name
  }
}

// 处理鼠标离开子菜单
const handleMouseLeave = (route) => {
  setTimeout(() => {
    if (activeSubmenu.value === route.name) {
      activeSubmenu.value = null
    }
  }, 200)
}
</script>
<template>
  <div
      class="dropdown-menu"
      :class="[`level-${level}`]"
  >
    <ul class="submenu-list">
      <li
          v-for="route in routes"
          :key="route.path"
          class="submenu-item"
          @mouseenter="handleMouseEnter(route)"
          @mouseleave="handleMouseLeave(route)"
      >
        <!-- 有子菜单的父菜单项 -->
        <div
            v-if="hasChildren(route)"
            class="submenu-link parent-submenu"
            :class="{ 
              'active': activeSubmenu === route.name || isCurrentRouteInParent(route)
            }"
        >
          <span class="submenu-text">{{ route.name }}</span>
          <span class="submenu-arrow">▶</span>
        </div>

        <!-- 没有子菜单的菜单项 -->
        <router-link
            v-else
            :to="getFullPath(route)"
            class="submenu-link"
            :class="{ 'active': isCurrentRoute(route) }"
        >
          <span class="submenu-text">{{ route.name }}</span>
        </router-link>

        <!-- 递归渲染子菜单 -->
        <Transition name="submenu">
          <MenuDropdown
              v-if="hasChildren(route) && activeSubmenu === route.name"
              :routes="route.children"
              :level="level + 1"
              :parent-path="getFullPath(route)"
          />
        </Transition>
      </li>
    </ul>
  </div>
</template>



<style scoped>
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  z-index: 1000;
}

/* 二级及以上的子菜单 */
.dropdown-menu.level-2,
.dropdown-menu.level-3,
.dropdown-menu.level-4 {
  top: 0;
  left: 100%;
  margin-left: 1px;
}

.submenu-list {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}

.submenu-item {
  position: relative;
}

.submenu-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  color: #2c3e50;
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.submenu-link:hover {
  background-color: #f8f9fa;
  color: #42b883;
}

.submenu-link.active {
  background-color: #42b883;
  color: white;
}

.parent-submenu {
  cursor: default;
}

.parent-submenu:hover {
  background-color: #f8f9fa;
  color: #42b883;
}

.submenu-text {
  margin-right: 8px;
}

.submenu-arrow {
  font-size: 10px;
  color: #7f8c8d;
  transition: transform 0.2s ease;
  opacity: 0.6;
}

.parent-submenu.active .submenu-arrow {
  transform: rotate(90deg);
  color: #42b883;
}

/* 子菜单动画 */
.submenu-enter-active,
.submenu-leave-active {
  transition: all 0.2s ease;
}

.submenu-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.submenu-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .dropdown-menu {
    position: static;
    box-shadow: none;
    border: none;
    border-top: 1px solid #e1e8ed;
    border-radius: 0;
    margin: 0;
    background: #f8f9fa;
  }

  .dropdown-menu.level-2,
  .dropdown-menu.level-3,
  .dropdown-menu.level-4 {
    position: static;
    box-shadow: none;
    border: none;
    border-top: 1px solid #e1e8ed;
    border-radius: 0;
    margin-left: 20px;
    background: #f1f3f4;
  }

  .submenu-link:hover {
    transform: none;
  }

  .submenu-enter-from,
  .submenu-leave-to {
    transform: none;
  }
}
</style>
