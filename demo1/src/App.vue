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

<!-- <script setup>

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
  <h3>图标</h3>
  <el-icon>
    <Plus />
  </el-icon>
  <el-icon>
    <Edit />
  </el-icon>
  <el-icon>
    <Delete />
  </el-icon>
  <el-icon class="is-loading">
    <Loading />
  </el-icon>

  <hr>
  <h3>属性</h3>
  <el-icon size="30" color="red">
    <Search />
  </el-icon>

  <hr>
  <h3>按钮</h3>
  <el-button type="primary">
    <el-icon>
      <Search />
    </el-icon>
    <span> 搜索 </span>
  </el-button>

  <el-button type="primary">
    <el-icon>
      <Search />
    </el-icon>
  </el-button>

  <el-button type="primary" circle>
    <el-icon>
      <Search />
    </el-icon>
  </el-button>

  <hr>
  <h3>按钮组</h3>
  <el-button-group>
    <el-button type="primary">
      <el-icon>
        <Plus />
      </el-icon>
    </el-button>

    <el-button type="primary">
      <el-icon>
        <Edit />
      </el-icon>
    </el-button>

    <el-button type="primary">
      <el-icon>
        <Delete />
      </el-icon>
    </el-button>
  </el-button-group>
</template>
<style scoped></style> -->


<!-- <script setup>
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
// 消息
const openMsg = () => {
  ElMessage({
    type: 'success', // success | warning | info | error
    message: 'dengruicode.com',//显示内容
    showClose: true//是否显示关闭按钮
  })
}

// 确认框
const openConfirm = () => {
  ElMessageBox.confirm('确认删除?', '标题', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  }).then(() => {
    console.log('确认')
  }).catch(() => {
    console.log('取消')
  })
}

// 通知
const openNotify = () => {
  ElNotification({
    title: '标题',
    message: '邓瑞编程',
    duration: 1500 // 展示时间 [单位:毫秒]
  })
}

// 通知2
const openNotify2 = () => {
  ElNotification({
    type: 'success', // success | warning | info | error
    title: '标题',
    message: 'dengruicode.com',
    duration: 1500,
    position: 'bottom-right'//位置
  })
}
</script>
<template>
  <el-button @click="openMsg">消息</el-button>
  <el-button @click="openConfirm">确认框</el-button>
  <el-button @click="openNotify">通知</el-button>
  <el-button @click="openNotify2">通知2</el-button>
</template>
<style scoped></style> -->


<!-- <script setup>
        import { reactive, ref } from 'vue'

        //默认选中的菜单索引
        //const selectedIndex = ref("2-2")
        const selectedIndex = ref("3")

        //选中菜单触发的回调
        const selected = (index, indexPath) => {
            console.log("index", index, "indexPath", indexPath)
        }

        //默认展开的菜单索引
        const defaultOpeneds = ref(["1","3"])

        //用户执行的命令
        const userCommand = (command) => { //点击菜单触发的回调
            console.log("command:", command)
        }
    </script>

    <template> 

       <h3>水平导航</h3>--> <!-- horizontal 水平导航 @select="selected"绑定的自定义事件 -->
<!--  <el-menu mode="horizontal" :default-active="selectedIndex" @select="selected">
            <el-menu-item index="1">邓瑞编程</el-menu-item>
            <el-sub-menu index="2">
                <template #title>我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
        </el-menu>


        <h3>水平导航-自定义样式</h3>
        <el-menu mode="horizontal" :default-active="selectedIndex" @select="selected" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b" style="height: 40px; width: 600px;">
            <el-menu-item index="1">邓瑞编程</el-menu-item>
            <el-sub-menu index="2">
                <template #title>我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
        </el-menu>

        <h3>垂直导航</h3><br>
        <el-menu :default-active="selectedIndex" @select="selected" style="width: 200px;">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon><Search /></el-icon>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon><Edit /></el-icon>
                <template #title>导航二</template>
            </el-menu-item>
            <el-menu-item index="3">
                <el-icon><Delete /></el-icon>
                <template #title>导航三</template>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon><Setting /></el-icon>
                <template #title>导航四</template>
            </el-menu-item>
        </el-menu>

        <h3>垂直导航-默认展开和自定义样式</h3>
        <el-menu :default-active="selectedIndex" @select="selected" :default-openeds="defaultOpeneds"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="width: 200px;">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon><Search /></el-icon>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon><Edit /></el-icon>
                <template #title>导航二</template>
            </el-menu-item>
            <el-sub-menu index="3">
                <template #title>
                    <el-icon><Search /></el-icon>
                    <span>导航三</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="4">
                <el-icon><Setting /></el-icon>
                <template #title>导航四</template>
            </el-menu-item>
        </el-menu>

        <!--<h3>面包屑</h3>--><!-- separator是分隔符 -->
<!--<el-breadcrumb separator="/">
            <el-breadcrumb-item><a href="#">首页</a></el-breadcrumb-item>
            <el-breadcrumb-item>邓瑞编程</el-breadcrumb-item>
            <el-breadcrumb-item>dengruicode.com</el-breadcrumb-item>
        </el-breadcrumb>

        <h3>下拉菜单</h3><br> --> <!-- @command="userCommand"绑定的自定义事件  -->
<!-- <el-dropdown @command="userCommand">
            <span>
                个人中心<el-icon><User /></el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="order">订单</el-dropdown-item>
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>

    </template>

    <style scoped>

    </style> -->

<!-- <script setup>

import { ref, reactive } from 'vue'

//默认选中的标签名称
const selectedName = ref("2")

//选中标签触发的回调
const tabClick = (tab, event) => {
    console.log("tab", tab.props, "event", event)
}

const tab = reactive({
    arr: [
        { name: "1", title: '邓瑞', content: '内容1' },
        { name: "2", title: '邓瑞编程', content: '内容2' },
        { name: "3", title: 'dengruicode.com', content: '内容3' },
    ]
})

//添加
const tabAdd = () => {
    let index = tab.arr.length
    index++

    tab.arr.push({
        name: index,
        title: '新选项卡' + index,
        content: '内容' + index
    })
}

//移除
const tabRemove = (name) => {
    console.log("name:", name)

    const index = tab.arr.findIndex((value) => {
        return value.name === name
    })

    tab.arr.splice(index, 1) //移除元素
}

</script>

<template>

<h3>标签页</h3>
<el-tabs v-model="selectedName" @tab-click="tabClick">
    <el-tab-pane label="邓瑞" name="1">内容1</el-tab-pane>
    <el-tab-pane label="邓瑞编程" name="2">内容2</el-tab-pane>
    <el-tab-pane label="dengruicode.com" name="3">内容3</el-tab-pane>
</el-tabs>

<h3>卡片风格</h3>
<el-tabs v-model="selectedName" @tab-click="tabClick" type="card">
    <el-tab-pane label="邓瑞" name="a">内容1</el-tab-pane>
    <el-tab-pane label="邓瑞编程" name="b">内容2</el-tab-pane>
    <el-tab-pane label="dengruicode.com" name="b">内容3</el-tab-pane>
</el-tabs>

<h3>带有边框的卡片风格</h3>
<el-tabs v-model="selectedName" @tab-click="tabClick" type="border-card">
    <el-tab-pane label="邓瑞" name="A">内容1</el-tab-pane>
    <el-tab-pane label="邓瑞编程" name="B">内容2</el-tab-pane>
    <el-tab-pane label="dengruicode.com" name="C">内容3</el-tab-pane>
</el-tabs>

<h3>动态添加</h3>
<el-button @click="tabAdd">添加</el-button> -->
<!-- closable 每一个标签都可关闭 -->
<!-- <el-tabs v-model="selectedName" @tab-remove="tabRemove" closable type="card">
    <el-tab-pane v-for="(value, key) in tab.arr" :key="value.name" :label="value.title" :name="value.name">
        {{ value.content }}
    </el-tab-pane>
</el-tabs>

</template>

<style scoped>

</style> -->



<!-- <script setup>
import { ref } from 'vue'
const name = ref('')
const password = ref('')
const content = ref('邓瑞编程')
const url = ref('dengruicode.com')
const url2 = ref('dengruicode')
const email = ref('123456')
//const selected = ref('')
const selected = ref('2') //选中的下拉框
</script>
<template>
  <div style="width: 300px;"> -->
<!-- clearable 可一键清空 -->
<!-- <h3>输入框</h3>
    <el-input v-model="name" clearable placeholder="请输入用户名" /> -->
<!-- show-password 可切换显示隐藏密码 -->
<!-- <h3>密码框</h3>
    <el-input v-model="password" show-password placeholder="请输入密码" />
    <h3>文本域</h3> -->
<!-- rows="2" 显示 2 行 -->
<!-- <el-input type="textarea" v-model="content" rows="2" />
    <h3> 输入内容长度限制 - 输入框</h3> -->
<!-- maxlength长度限制，show-word-limit看到限制  -->
<!-- <el-input v-model="name" maxlength="10" show-word-limit />
    <h3>输入内容长度限制 - 文本域</h3>
    <el-input type="textarea" v-model="content" maxlength="20" rows="3" show-word-limit />
    <h3>尺寸</h3>
    大 <el-input size="large" />
    默认 <el-input />
    小 <el-input size="small" />
    <h3>前置 #prepend</h3>
    <el-input v-model="url">
      <template #prepend>https://</template>
    </el-input>
    <h3>后置 #append</h3>
    <el-input v-model="email">
      <template #append>@qq.com</template>
    </el-input>
    <h3>前置后置</h3>
    <el-input v-model="url2">
      <template #prepend>https://</template>
      <template #append>.com</template>
    </el-input>
    <h3>前置后置扩展 - 搜索</h3>
    <el-input placeholder="请输入课程名称">
      <template #prepend>
        <el-select v-model="selected" placeholder="请选择" style="width: 100px;">
          <el-option label="前端" value="1" />
          <el-option label="后端" value="2" />
          <el-option label="服务端" value="3" />
        </el-select>
      </template>
      <template #append>
        <el-button>
          <el-icon>
            <Search />
          </el-icon>
        </el-button>
      </template>
    </el-input>
  </div>
</template>

<style scoped></style> -->
<!-- <script setup>
import { ref } from 'vue'

//单选框
const radio = ref("3")
const radio2 = ref("b")
const radio3 = ref("C")

const radioChange = (val) => {
    console.log("radioChange:", val)
}

const radioGroupChange = (val) => {
    console.log("radioGroupChange:", val)
}

//复选框
const checked = ref(["1", "2"])
const checked2 = ref([])

const checkboxGroupChange = (val) => {
    console.log("checkboxGroupChange", val)
}
</script>

<template>
<h3>单选框</h3>
<el-radio v-model="radio" value="1">前端</el-radio>
<el-radio v-model="radio" value="2">后端</el-radio>
<el-radio v-model="radio" value="3">服务端</el-radio>

<h3>单选框 - 事件绑定</h3>
<el-radio v-model="radio2" value="a" @change="radioChange">前端</el-radio>
<el-radio v-model="radio2" value="b" @change="radioChange">后端</el-radio>
<el-radio v-model="radio2" value="c" @change="radioChange">服务端</el-radio>

<h3>单选框组</h3>
<el-radio-group v-model="radio3" @change="radioGroupChange">
    <el-radio value="A">前端</el-radio>
    <el-radio value="B">后端</el-radio>
    <el-radio value="C">服务端</el-radio>
</el-radio-group>

<h3>复选框</h3>
<el-checkbox-group v-model="checked">
    <el-checkbox value="1">前端</el-checkbox>
    <el-checkbox value="2">后端</el-checkbox>
    <el-checkbox value="3">服务端</el-checkbox>
</el-checkbox-group>

<h3>事件绑定</h3>
<el-checkbox-group v-model="checked2" @change="checkboxGroupChange">
    <el-checkbox value="1">前端</el-checkbox>
    <el-checkbox value="2">后端</el-checkbox>
    <el-checkbox value="3">服务端</el-checkbox>
</el-checkbox-group>
</template>

<style scoped>

</style> -->


<!-- <script setup>
import { ref,reactive } from 'vue'

const selected = ref('2')
const selected2 = ref('')
const selected3 = ref('C')
const selected4 = ref(['1','3'])

const data = reactive({
    options: [
        { value: 'A', label: '前端', },
        { value: 'B', label: '后端', },
        { value: 'C', label: '服务端', }
    ]
})

//回调
const selectChange = (val) => {
    console.log("selectChange:", val)
}
</script>

<template>
<div style="width: 300px;">
    <h3>下拉框</h3>
    <el-select v-model="selected" placeholder="请选择">
        <el-option value="1" label="前端" />
        <el-option value="2" label="后端" />
        <el-option value="3" label="服务端" />
    </el-select>

    <h3>下拉框 - 事件绑定</h3>
    <el-select v-model="selected2" @change="selectChange" placeholder="请选择">
        <el-option value="a" label="前端" />
        <el-option value="b" label="后端" />
        <el-option value="c" label="服务端" />
    </el-select>

    <h3>动态下拉框</h3>
    <el-select v-model="selected3" placeholder="请选择">
        <el-option v-for="item in data.options" 
        :value="item.value" 
        :label="item.label"
        :key="item.value" />
    </el-select>

    <h3>多选 - multiple</h3>
    <el-select v-model="selected4" multiple @change="selectChange" placeholder="请选择">
        <el-option value="1" label="前端" />
        <el-option value="2" label="后端" />
        <el-option value="3" label="服务端" />
    </el-select>
</div>
</template>

<style scoped>

</style> -->

<!-- <script setup>
import { ref } from 'vue'
const date = ref('')
const dateChange = (val) => {
    console.log("dateChange:", val)
}
</script>
<template>
<h3>日期</h3>
<el-date-picker v-model="date" type="date" placeholder="请选择" />
<h3>日期时间</h3>
<el-date-picker v-model="date" type="datetime" placeholder="请选择" />
<h3>事件绑定</h3>
<el-date-picker v-model="date" type="datetime" value-format="YYYY-MM-DD HH:mm:ss" @change="dateChange" />
</template>

<style scoped>

</style> -->

<!-- <script setup>
import { ref } from 'vue'

const data = ref({
  name: '',
  radio: '',
  checkbox: [],
  date: '',
  select: '',
  multipleSelect: [],
  textarea: ''
})

const add = () => {
  console.log(data.value)
}

const reset = () => {
  data.value = {
    name: '',
    radio: '',
    checkbox: [],
    date: '',
    select: '',
    multipleSelect: [],
    textarea: ''
  }
}
</script>

<template>
  <el-form label-width="80" style="width: 400px;">

    <el-form-item label="文本框">
      <el-input v-model="data.name" placeholder="请填写名称" />
    </el-form-item>

    <el-form-item label="单选框">
      <el-radio-group v-model="data.radio">
        <el-radio value="1">前端</el-radio>
        <el-radio value="2">后端</el-radio>
        <el-radio value="3">服务端</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="复选框">
      <el-checkbox-group v-model="data.checkbox">
        <el-checkbox value="a">前端</el-checkbox>
        <el-checkbox value="b">后端</el-checkbox>
        <el-checkbox value="c">服务端</el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="日期时间">
      <el-date-picker v-model="data.date" type="datetime" value-format="YYYY-MM-DD HH:mm:ss" />
    </el-form-item>

    <el-form-item label="下拉框">
      <el-select v-model="data.select" placeholder="请选择">
        <el-option value="A" label="前端" />
        <el-option value="B" label="后端" />
        <el-option value="C" label="服务端" />
      </el-select>
    </el-form-item>

    <el-form-item label="多选框">
      <el-select v-model="data.multipleSelect" multiple placeholder="请选择">
        <el-option value="AA" label="前端" />
        <el-option value="BB" label="后端" />
        <el-option value="CC" label="服务端" />
      </el-select>
    </el-form-item>

    <el-form-item label="文本域">
      <el-input type="textarea" v-model="data.textarea" rows="2" placeholder="请填写内容" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="add">添加</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped></style> -->

<!-- <script setup>
import { ref } from 'vue'

const data = ref({
  name: '',
  radio: '',
  checkbox: [],
  date: '',
  select: '',
  multipleSelect: [],
  textarea: ''
})

const add = () => {
  console.log(data.value)
}

const reset = () => {
  data.value = {
    name: '',
    radio: '',
    checkbox: [],
    date: '',
    select: '',
    multipleSelect: [],
    textarea: ''
  }
}

//对话框
const dialog = ref(false)

const dialogClose = () => {
  console.log("关闭")
}
</script>

<template>
  <el-button @click="dialog = true">打开</el-button>-->

<!-- draggable 允许拖拽 -->
<!--  <el-dialog v-model="dialog" width="500" title="标题" draggable @close="dialogClose">
    <el-form label-width="80">
      <el-form-item label="文本框">
        <el-input v-model="data.name" placeholder="请填写名称" />
      </el-form-item>

      <el-form-item label="单选框">
        <el-radio-group v-model="data.radio">
          <el-radio value="1">前端</el-radio>
          <el-radio value="2">后端</el-radio>
          <el-radio value="3">服务端</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="复选框">
        <el-checkbox-group v-model="data.checkbox">
          <el-checkbox value="a">前端</el-checkbox>
          <el-checkbox value="b">后端</el-checkbox>
          <el-checkbox value="c">服务端</el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="日期时间">
        <el-date-picker v-model="data.date" type="datetime" value-format="YYYY-MM-DD HH:mm:ss" />
      </el-form-item>

      <el-form-item label="下拉框">
        <el-select v-model="data.select" placeholder="请选择">
          <el-option value="A" label="前端" />
          <el-option value="B" label="后端" />
          <el-option value="C" label="服务端" />
        </el-select>
      </el-form-item>

      <el-form-item label="多选框">
        <el-select v-model="data.multipleSelect" multiple placeholder="请选择">
          <el-option value="AA" label="前端" />
          <el-option value="BB" label="后端" />
          <el-option value="CC" label="服务端" />
        </el-select>
      </el-form-item>

      <el-form-item label="文本域">
        <el-input type="textarea" v-model="data.textarea" rows="2" placeholder="请填写内容" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="add">添加</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<style scoped></style> -->

<!-- <script setup>
const currentPage = (val) => {
    console.log("currentPage:",val)
}
</script>

<template>
<h3>page-size:每页显示记录数 total:总记录数</h3>
<el-pagination layout="prev, pager, next" :page-size="10" :total="50" />

<h3>background:显示背景</h3>
<el-pagination layout="prev, pager, next" :page-size="5" :total="50" background />

<h3>layout="total" 显示总数</h3>
<el-pagination layout="prev, pager, next, total" :page-size="5" :total="50" />

<h3>layout="jumper" 跳转</h3>
<el-pagination layout="prev, pager, next, jumper, total" :page-size="5" :total="50" />

<h3>事件绑定</h3>
<el-pagination layout="prev, pager, next" :page-size="5" :total="50" @current-change="currentPage" />
</template>

<style scoped>

</style> -->
<!-- 
<script setup>
import { ref } from 'vue'

const data = ref({
  arr: [
    { id: '1', name: '邓瑞', web: 'dengruicode.com', date: '2023-06-20' },
    { id: '2', name: 'David', web: 'www.dengruicode.com', date: '2023-06-21' },
    { id: '3', name: 'Luna', web: 'dengruicode.com', date: '2023-06-22' },
    { id: '4', name: 'Lisa', web: 'www.dengruicode.com', date: '2023-06-22' }
  ]
})

//选中的复选框
let idArr = []
const selected = (data) => {
  //console.log("selected", data)

  idArr = [] //重置

  data.forEach((value) => {
    idArr.push(value.id)
  })

  console.log("idArr:", idArr)
}

//删除
const del = () => {
  console.log("del:", idArr)
}

//编辑
const edit = (index, row) => {
  console.log("index:", index, "row:", row)
}
</script>

<template>
  <h3>表格</h3>
  <el-table :data="data.arr" style="width: 800px;">
    <el-table-column prop="id" label="编号" width="80" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="web" label="网站" width="300" />
    <el-table-column prop="date" label="日期" />
  </el-table>

  <h3>带边框表格</h3>
  <el-table :data="data.arr" border style="width: 800px;">
    <el-table-column prop="id" label="编号" width="80" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="web" label="网站" width="300" />
    <el-table-column prop="date" label="日期" />
  </el-table>

  <h3>设置高度固定表头</h3>
  <el-table :data="data.arr" border height="120" style="width: 800px;">
    <el-table-column prop="id" label="编号" width="80" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="web" label="网站" width="300" />
    <el-table-column prop="date" label="日期" />
  </el-table>

  <h3>type="selection" 多选</h3>
  <el-table :data="data.arr" border style="width: 800px;">
    <el-table-column type="selection" width="55" />

    <el-table-column prop="id" label="编号" width="80" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="web" label="网站" width="300" />
    <el-table-column prop="date" label="日期" />
  </el-table>

  <h3>按钮</h3>
  <el-button type="primary" @click="del">删除</el-button>

  <el-table :data="data.arr" @selection-change="selected" border style="width: 900px;margin: 3px 0;">
    <el-table-column type="selection" width="55"></el-table-column>

    <el-table-column prop="id" label="编号" width="80" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="web" label="网站" width="300" />
    <el-table-column prop="date" label="日期" />

    <el-table-column label="操作" width="150">
      <template #default="scope">
        <el-button size="small" type="primary" @click="edit(scope.$index, scope.row)">
          编辑
        </el-button>
        <el-button size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination layout="prev, pager, next, jumper, total" :page-size="5" :total="50" />
</template>

<style scoped></style> -->


<script setup>
        // 消息
        const openMsg = () => {
            ElMessage({
                type: 'success', // success | warning | info | error
                message: 'dengruicode.com',
                showClose: true
            })
        }

        // 确认框
        const openConfirm = () => {
            ElMessageBox.confirm('确认删除?', '标题', {
                type: 'warning',
                confirmButtonText: '确认',
                cancelButtonText: '取消'
            }).then(() => {
                console.log('确认')
            }).catch(() => {
                console.log('取消')
            })
        }

        // 通知
        const openNotifiy = () => {
            ElNotification({
                title: '标题',
                message: '邓瑞编程',
                duration: 1500 // 展示时间 [单位:毫秒]
            })
        }

        // 通知2
        const openNotifiy2 = () => {
            ElNotification({
                type: 'success', // success | warning | info | error
                title: '标题',
                message: 'dengruicode.com',
                duration: 1500,
                position: 'bottom-right'
            })
        }

        const url = ref('dengruicode.com')
    </script>

    <template>
        <h3>按钮</h3>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>

        <h3>图标</h3>
        <!-- <el-icon><Plus /></el-icon> -->
        <el-icon><i-ep-Plus /></el-icon> <!-- i-ep- -->
        <el-icon><IEpEdit /></el-icon> <!-- IEp- -->
        <el-icon><IEpDelete /></el-icon>
        <el-icon class="is-loading"><IEpLoading /></el-icon>

        <h3>提示框</h3>
        <el-button @click="openMsg">消息</el-button>
        <el-button @click="openConfirm">确认框</el-button>
        <el-button @click="openNotifiy">通知</el-button>
        <el-button @click="openNotifiy2">通知2</el-button>

        <h3>输入框</h3>
        <el-input v-model="url" placeholder="请输入网址" />
    </template>

    <style scoped>
    
    </style>


