import { createApp } from 'vue'
//导入Pinia的createPinia方法,用于创建Pinia实例(状态管理库)
import { createPinia } from 'pinia'
//从 pinia-plugin-persistedstate 模块中导入 piniaPluginPersistedstate
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
//整体导入 ElementPlus 组件库
import ElementPlus from 'element-plus' //导入 ElementPlus 组件库的所有模块和功能 
import 'element-plus/dist/index.css' //导入 ElementPlus 组件库所需的全局 CSS 样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //导入 ElementPlus 组件库中的所有图标
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' //导入 ElementPlus 组件库的中文语言包
// const pinia= createPinia()
// //将插件添加到 pinia 实例上
// pinia.use(piniaPluginPersistedstate)
// //将插件添加到 pinia 实例上
// // createApp(App).mount('#app')
// const app=createApp(App)
// app.use(pinia)
// app.mount('#app')
//use(router) 将Vue Router实例注册到Vue应用中
// createApp(App).use(router).mount('#app')

const app = createApp(App)//定义一个常量app
app.use(router)
 //app.use(ElementPlus) //将 ElementPlus 插件注册到 Vue 应用中s
 app.use(ElementPlus, {
    locale: zhCn // 设置 ElementPlus 组件库的区域语言为中文简体
})
//注册 ElementPlus 组件库中的所有图标到全局 Vue 应用中
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
//全局前置守卫
router.beforeEach((to, from, next) => {
    console.log("to:", to) //即将进入的路由的信息
    console.log("from:", from) //当前即将离开的路由信息

    next()


    // if(to.name == "history"){
    //     next(false) //拦截
    // }else{
    //     next() //继续
    // }

})
app.mount('#app')