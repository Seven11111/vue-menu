<script setup>
// 获取路由配置
import {computed, ref} from "vue";
import {useRouter, useRoute} from "vue-router";
import MenuDropdown from "@/components/MenuDropdown.vue";

const router = useRouter()
const route = useRoute()
const activeDropdown = ref(null)

// 获取路由配置
const menuRoutes = computed(() => {
  return router.options.routes;
})

// 检查是否有子菜单
const hasChildren = (route) => {
  return route.children && route.children.length > 0
}

// 检查当前路由是否属于某个父菜单
const isCurrentRouteInParent = (parentRoute) => {
  if (!hasChildren(parentRoute)) return false
  
  // 检查当前路由路径是否以父路由路径开头
  const currentPath = route.path
  const parentPath = parentRoute.path
  
  // 如果父路径是根路径，需要特殊处理
  if (parentPath === '/') {
    return currentPath !== '/' && currentPath.startsWith('/')
  }
  
  return currentPath.startsWith(parentPath)
}

// 处理鼠标进入主菜单
const handleMouseEnter = (route) => {
  if (hasChildren(route)) {
    activeDropdown.value = route.name
  }
}

// 处理鼠标离开主菜单
const handleMouseLeave = (route) => {
  setTimeout(() => {
    if (activeDropdown.value === route.name) {
      activeDropdown.value = null
    }
  }, 200)
}

</script>

<template>
  <nav class="advanced-menu">
    <div class="menu-container">
      <ul class="menu-list">
        <li
            v-for="route in menuRoutes"
            :key="route.path"
            class="menu-item"
            @mouseenter="handleMouseEnter(route)"
            @mouseleave="handleMouseLeave(route)"
        >
          <!-- 有子菜单的父菜单项-->
          <div
              v-if="hasChildren(route)"
              class="menu-link parent-menu"
              :class="{
                'active': activeDropdown === route.name || isCurrentRouteInParent(route)
              }"
          >
            <span class="menu-text">{{ route.name }}</span>
            <span class="dropdown-arrow">▼</span>
          </div>

          <!-- 没有子菜单的菜单项-->
          <router-link
              v-else
              :to="route.path"
              class="menu-link"
              active-class="active"
          >
            <span class="menu-text">{{ route.name }}</span>
          </router-link>

          <!--  递归渲染子菜单-->
          <Transition name="dropdown">
            <MenuDropdown
                v-if="hasChildren(route) && activeDropdown === route.name"
                :routes="route.children"
                :level="1"
                :parent-path="route.path"
            />
          </Transition>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.advanced-menu {
  background: #ffffff;
  border-bottom: 1px solid #e1e8ed;
  padding: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.menu-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.menu-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}
.menu-item {
  position: relative;
  display: flex;
  align-items: center;
}
.menu-link {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;
  white-space: nowrap;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}
.menu-link:hover {
  color: #42b883;
  border-bottom-color: #42b883;
}
.menu-link.active {
  color: #42b883;
  border-bottom-color: #42b883;
}
.parent-menu {
  cursor: default;
}
.parent-menu:hover {
  color: #42b883;
  border-bottom-color: #42b883;
}
.menu-text {
  margin-right: 6px;
}

.dropdown-arrow {
  font-size: 10px;
  transition: transform 0.2s ease;
  opacity: 0.6;
}

.parent-menu.active .dropdown-arrow {
  transform: rotate(180deg);
}

/* 下拉菜单动画 */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .menu-container {
    padding: 0 10px;
  }

  .menu-list {
    flex-direction: column;
    align-items: stretch;
  }

  .menu-item {
    width: 100%;
  }

  .menu-link {
    padding: 14px 16px;
    justify-content: space-between;
    border-bottom: none;
    border-left: 2px solid transparent;
  }

  .menu-link:hover,
  .menu-link.active {
    border-bottom-color: transparent;
    border-left-color: #42b883;
  }
}
</style>
