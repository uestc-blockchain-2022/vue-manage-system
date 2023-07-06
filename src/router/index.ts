import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Home from '../views/home.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页',
                    permiss: '1',
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
            },
            {
                path: '/table',
                name: 'basetable',
                meta: {
                    title: '货权管理',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/table.vue'),
            },
            {
                path: '/charts',
                name: 'basecharts',
                meta: {
                    title: '图表',
                    permiss: '11',
                },
                component: () => import(/* webpackChunkName: "charts" */ '../views/charts.vue'),
            },
            {
                path: '/form',
                name: 'baseform',
                meta: {
                    title: '表单',
                    permiss: '5',
                },
                component: () => import(/* webpackChunkName: "form" */ '../views/form.vue'),
            },
            {
                path: '/tabs',
                name: 'tabs',
                meta: {
                    title: 'tab标签',
                    permiss: '3',
                },
                component: () => import(/* webpackChunkName: "tabs" */ '../views/tabs.vue'),
            },
            {
                path: '/scan',
                name: 'scan',
                meta: {
                    title: '区块浏览器',
                    permiss: '3',
                },
                component: () => import(/* webpackChunkName: "tabs" */ '../views/scan.vue'),
            },
            {
                path: '/donate',
                name: 'donate',
                meta: {
                    title: '鼓励作者',
                    permiss: '14',
                },
                component: () => import(/* webpackChunkName: "donate" */ '../views/donate.vue'),
            },
            {
                path: '/permission',
                name: 'permission',
                meta: {
                    title: '权限管理',
                    permiss: '13',
                },
                component: () => import(/* webpackChunkName: "permission" */ '../views/permission.vue'),
            },
            {
                path: '/upload',
                name: 'upload',
                meta: {
                    title: '上传插件',
                    permiss: '6',
                },
                component: () => import(/* webpackChunkName: "upload" */ '../views/upload.vue'),
            },
            {
                path: '/icon',
                name: 'icon',
                meta: {
                    title: '自定义图标',
                    permiss: '10',
                },
                component: () => import(/* webpackChunkName: "icon" */ '../views/icon.vue'),
            },
            {
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心',
                },
                component: () => import(/* webpackChunkName: "user" */ '../views/user.vue'),
            },
            {
                path: '/editor',
                name: 'editor',
                meta: {
                    title: '富文本编辑器',
                    permiss: '8',
                },
                component: () => import(/* webpackChunkName: "editor" */ '../views/editor.vue'),
            },
            {
                path: '/markdown',
                name: 'markdown',
                meta: {
                    title: 'markdown编辑器',
                    permiss: '9',
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/markdown.vue'),
            },
            {
                path: '/export',
                name: 'export',
                meta: {
                    title: '资产交易',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "export" */ '../views/export.vue'),
            },
            {
                path: '/detail',
                name: 'detail',
                meta: {
                    title: '货权详情',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "detail" */ '../views/detail.vue'),
            },
            {
                path: '/loans',
                name: 'loans',
                meta: {
                    title: '贷款管理',
                    permiss: '15',
                },
                component: () => import(/* webpackChunkName: "import" */ '../views/loans.vue'),
            },
            {
                path: '/loansReview',
                name: 'loansReview',
                meta: {
                    title: '贷款审核',
                    permiss: '15',
                },
                component: () => import(/* webpackChunkName: "import" */ '../views/loansReview.vue'),
            },
            {
                path: '/loanDetail',
                name: 'loanDetail',
                meta: {
                    title: '贷款单详情',
                    permiss: '15',
                },
                component: () => import(/* webpackChunkName: "import" */ '../views/loanDetail.vue'),
            },
            {
                path: '/processing',
                name: 'processing',
                meta: {
                    title: '加工平台',
                    permiss: '16',
                },
                component: () => import(/* webpackChunkName: "import" */ '../views/processing.vue'),
            },
            {
                path: '/processingDetail',
                name: 'processingDetail',
                meta: {
                    title: '加工详单',
                    permiss: '16',
                },
                component: () => import(/* webpackChunkName: "import" */ '../views/processingDetail.vue'),
            },
            {
                path: '/express',
                name: 'express',
                meta: {
                    title: '物流管理',
                    permiss: '16',

                },
                component: () => import('../views/express.vue'),
            },
            {
                path: '/expressDetail',
                name: 'expressDetail',
                meta: {
                    title: '物流详情',
                    permiss: '16',

                },
                component: () => import('../views/expressDetail.vue'),
            },
            {
                path: '/expressDetail',
                name: 'expressDetail',
                meta: {
                    title: '物流详情',
                    permiss: '16',

                },
                component: () => import('../views/expressDetail.vue'),
            },
            {
                path: '/insurance',
                name: 'insurance',
                meta: {
                    title: '保险管理',
                    permiss: '16',

                },
                component: () => import('../views/insurance.vue'),
            },
            {
                path: '/insuranceDetail',
                name: 'insuranceDetail',
                meta: {
                    title: '保险详情',
                    permiss: '16',

                },
                component: () => import('../views/insuranceDetail.vue'),
            },
            // {
            //     path: '/import',
            //     name: 'import',
            //     meta: {
            //         title: '货权详情',
            //         permiss: '2',
            //     },
            //     component: () => import(/* webpackChunkName: "import" */ '../views/import.vue'),
            // },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限',
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    const permiss = usePermissStore();
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
        // 如果没有权限，则进入403
        next('/403');
    } else {
        next();
    }
});

export default router;
