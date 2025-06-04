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

<!-- <script setup> -->
<!-- import { reactive,ref } from 'vue'
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

  const emitsGetWeb=(data)=>{
console.log(data)
 web.url=data.url
  }

  const emitsUserAdd=(data)=>{
    console.log(data)
    user.value+=data
  } -->
<!-- </script> -->

<!-- <template> -->
<!-- 子传父 -->
<!-- <Header @getWeb="emitsGetweb" @userAdd="emitsUserAdd" /> -->
<!-- {{ web.url }} - {{ user }} -->
<!-- <Header @web="emitsWeb" @user="emitsUser" /> -->
<!-- </template>

<style scoped></style> -->

<!-- <script setup>
import { provide, ref } from 'vue'

//导入子组件
import Header from "./components/header.vue"

// const web = {
//      name: "bilibili",
//      url: 'bilibili.com'
//    }
//provide用于父组件将 数据 提供给所有子组件
/*
  若使用了provide和inject来进行数据传递,
  则一般不需要再使用defineProps
*/
// provide("provideWeb",web)
provide("provideWeb",{name:"bilibili",url:"www.bilibili.com"})

//传递响应式数据
const user = ref(0)
provide("provideUser",user)

//添加用户
const userAdd = () => {
  user.value++
}
//用于父组件将 函数 提供给所有子组件
provide("provideFuncUserAdd",userAdd)
</script> -->
<!-- <template>
  <h3>App.vue-Top组件</h3>

  {{ user }} -->

<!-- 子组件 -->
<!-- <Header />
</template> -->


<!-- <style scoped></style> -->



<!-- 插槽(slot)
是指可以在父组件内自定义模板片段,
在子组件中可以将定义的模板片段插入到子组件的特定位置 -->
<!-- / -->
<!-- 
<template>
  <h3>App.vue</h3>

  <Header /> -->
<!-- 匿名插槽 -->
<!-- <Header>
    <a href="http://dengruicode.com">邓瑞编程</a>
  </Header> -->

<!-- 具名插槽 -->
<!-- <Footer>
    <template v-slot:url>
      <a href="http://www.dengruicode.com">网址</a>
    </template>

    <!-- v-slot:user 简写 #user -->
<!-- <template #user>
      1000 -->


<!-- v-slot:user 简写 #user
      作用域插槽
      子组件将url和title数据传递给 name="user" 的插槽,
      父组件通过 #user="data" 来接收这些数据
      <template #user="data">
        1000 {{ data.url }} {{ data.title }}
      </template> -->
<!-- 解构 -->
<!-- <template #user="{url,title}">
        1000 {{ url }} {{ title }}
      </template> -->

<!-- </template> -->
<!-- </Footer>

</template>

<style scoped></style> -->

<!-- <script setup>
  import { onMounted, onUpdated, ref } from 'vue'

  //在组件成功挂载到DOM并完成首次渲染后调用
  onMounted(() => {
    console.log("onMounted")
  })

  //在组件更新之后调用
  onUpdated(() => {
    console.log("onUpdated:",user.value)
  })

  const user = ref(0)
  console.log("user:",user.value)
</script>

<template>
  <h3>App.vue</h3>

  {{ user }}

  <button @click="user++">添加用户</button>
</template>

<style scoped>

</style> -->

<!-- <script setup>
  import { reactive, toRef, toRefs } from 'vue'

  /*
  let {name,url} = reactive({
    name:"邓瑞编程",
    url:"dengruicode.com"
  })
  */
  let web = reactive({
    name:"邓瑞编程",
    url:"dengruicode.com"
  })

  //toRefs将一个响应式对象的所有属性转换为ref对象
  //let {name,url} = toRefs(web)

  //toRef将一个响应式对象的某个属性转换为ref变量
  let url = toRef(web, "url")

  const setUrl = () => {
    console.log(url)
    url.value = "www.dengruicode.com"
  }
</script>

<template>
  {{ url }}

  <button @click="setUrl">设置网址</button>
</template>

<style scoped>

</style> -->



<!-- <script setup>
    import { useWebStore } from './stores/web.js'

    const webStore = useWebStore()
    
    console.log("webStore.web:",webStore.web)
    console.log("webStore.users:",webStore.users)
</script>

<template>
    {{ webStore.web.url }}

    {{ webStore.users }}

    <button @click="webStore.userAdd" >添加用户</button>
</template>

<style scoped>

</style> -->

<!-- <script setup>

</script>

<template>
  <router-view />
</template>

<style scoped>

</style> -->

<script setup>

</script>

<template>
  <h3>按钮</h3>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>

  <hr>
  <h3>按钮属性</h3>
  <el-button plain>朴素按钮</el-button>
  <el-button round>圆角按钮</el-button>
  <el-button circle>圆</el-button>
  <el-button disabled>禁用按钮</el-button>
  <el-button loading>加载中</el-button>

  <hr>
  <h3>尺寸</h3>
  <el-button size="large">大型按钮</el-button>
  <el-button>默认按钮</el-button>
  <el-button size="small">小型按钮</el-button>
</template>

<style scoped></style>
