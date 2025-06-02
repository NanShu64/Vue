<!-- <script setup>
import { reactive } from 'vue'
 const web = reactive({
                show: true
            })

            const toggle = () => {
                web.show = !web.show
            }
</script>
<template>
<h3>{{ web.show }}</h3>
    <p v-show="web.show">邓瑞编程 dengruicode.com</p>

    <button @click="toggle">点击切换显示状态</button>
</template>


<style scoped>

</style> -->


<!-- <script setup>
import { reactive } from 'vue';
  import Header from './components/header.vue';
  import Footer from './components/footer.vue';
  const propsWeb= reactive ({
    user:10,
    url:"www.bilibili,com"
  })


  // const propsWeb={
  //   user:10,
  //   url:"www.bilibili,com"
  // }

  const userAdd=()=>{
    propsWeb.user++
    console.log(propsWeb.user)
  }
</script>
<template>
  <Header propsname="bilibili" propsurl="bilibili.com" />
  bilibili
  <button @click="userAdd">添加用户</button>
  <Footer v-bind="propsWeb"/> -->
<!-- <Footer :="propsWeb" />
</template>


<style scoped></style> -->

<script setup>
  import { reactive,ref } from 'vue'

  //导入子组件
  import Header from "./components/header.vue"

  //响应式数据
  const web = reactive({
    name: "bilibili",
    url: 'bilibili.com'
  })

  const user = ref(0)

  //子传父
  const emitsWeb = (data) => {
    console.log("emitsWeb:",data)
    web.url = data.url
  }

  const emitsUser = (data) => {
    console.log("emitsUser:",data)
    user.value += data
  }
</script>

<template>
  <!-- 子传父 -->
  <Header @web="emitsWeb" @user="emitsUser" />

  {{ web.url }} - {{ user }}
</template>

<style scoped></style>