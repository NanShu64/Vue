<!-- <script setup>
// const props = defineProps(["propsname","propsurl"])
// console.log(props)

//子组件

    /*
        defineEmits是Vue3的编译时宏函数,
        用于子组件向父组件发送自定义事件
    */
    //子传父
    //定义一个名为 emits 的对象, 用于存储自定义事件
    const emits=defineEmits(["getWeb","userAdd"]) 
    //发送名为 web 和 user 的自定义事件
    emits("getWeb",{name:"bilibili",url:"www.bilibili.com"})
    const add =() => {
    emits("userAdd",10)
}
</script>
<template>
    <h3>Header</h3>
    <button @click="add">添加用户</button>
</template>


<style scoped></style> -->
<!-- <script setup>
import { provide, inject } from 'vue'

//导入子组件
import Nav from "./nav.vue"

//子组件通过inject注入父组件提供的 响应式数据
// const web = inject("provideWeb")
const user = inject("provideUser")
console.log("provideUser:",user.value)

//provide用于父组件将 数据 提供给所有子组件
provide("provideUrl","dengruicode.com")
</script>
<template>
 <h3>header.vue-Middle组件</h3>-->
 <!-- 子组件 -->
  <!-- <Nav/>
</template>


<style scoped>

</style> -->

<script setup>
    
</script>

<template>
    <h3>header.vue - 子组件</h3>

    <!-- 匿名插槽 slot -->
    <slot/>
</template>

<style scoped>

</style>
