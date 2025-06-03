import { createApp } from 'vue'
//导入Pinia的createPinia方法,用于创建Pinia实例(状态管理库)
import { createPinia} from 'pinia'
//从 pinia-plugin-persistedstate 模块中导入 piniaPluginPersistedstate
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
// const pinia= createPinia()
// //将插件添加到 pinia 实例上
// pinia.use(piniaPluginPersistedstate)
// //将插件添加到 pinia 实例上
// // createApp(App).mount('#app')
// const app=createApp(App)
// app.use(pinia)
// app.mount('#app')
//use(router) 将Vue Router实例注册到Vue应用中
createApp(App).use(router).mount('#app')
