import Home from "@/app/Home.vue"
import {createRouter, createWebHistory} from "vue-router";
import Layout from "@/app/Layout.vue";
import Demo1 from "@/app/Demo1.vue";
import Demo2 from "@/app/Demo2.vue";
import Demo3 from "@/app/Demo3.vue";
import About from "@/app/About.vue";


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
