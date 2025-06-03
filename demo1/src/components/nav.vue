<script setup>
    //子组件
    import { inject } from 'vue'

    //子组件通过inject注入父组件提供的 数据
    const web = inject("provideWeb")
    console.log("provideWeb:",web)

    const url = inject("provideUrl")
    console.log("provideUrl:",url)

    //子组件通过inject注入父组件提供的 函数
    const funcUserAdd = inject("provideFuncUserAdd")
    console.log("provideFuncUserAdd:",funcUserAdd)
</script>

<template>
    <h3>nav.vue-Bottom组件</h3>

    <button @click="funcUserAdd">添加用户</button>
</template>

<style scoped>

</style>