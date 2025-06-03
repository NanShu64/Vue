import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

	const routes = [
	    {
	        path: "/", // http://localhost:5173
            // alias:"/home", //定义别名 http://localhost:5173/home
            alias:["/home","/index"],
             // component: () => import("../views/index.vue")
	        component: () => import("@/views/index.vue")
	    },
	    {
	        path: "/content", // http://localhost:5173/content
	        component: () => import("@/views/content.vue")
	    },
        {
	        path: "/user/:id/name/:name", // 使用路径传递参数 http://localhost:5173/user/007/name/邓瑞
	        component: () => import("@/views/user.vue")
	    },
	    {
	        //可选参数 name? 表示该参数不是必需的
	        path: "/userHistory/:id/name/:name?", // http://localhost:5173/userHistory/007/name
	        component: () => import("@/views/user.vue")
	    },
        {
	        path: "/vip", 
	        component: () => import("@/views/vip.vue"),
	        children: [ // 子路由
	            {
	                path: '', // 默认页 http://localhost:5173/vip
	                component: import("@/views/vip/default.vue")
	            },
	            {
	                path: 'order', // 会员订单 http://localhost:5173/vip/order
	                component: import("@/views/vip/order.vue")
	            },
	            {
	                path: 'info', // 会员资料 http://localhost:5173/vip/info
	                component: import("@/views/vip/info.vue")
	            }
	        ]
	    },
	]

	const router = createRouter({
	    //使用url的#符号之后的部分模拟url路径的变化,因为不会触发页面刷新,所以不需要服务端支持
	    //history: createWebHashHistory(), 
	    history: createWebHistory(),
	    routes
	})

	export default router