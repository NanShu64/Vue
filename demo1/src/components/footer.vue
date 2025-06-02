<script setup>
const props=defineProps({
    user:Number,
    url:{
        type:String,
        required:false,//true表示必传属性,若未传则会提示警告信息
        default:"bilibili.com"//未传默认值
    }
    })
    console.log(props)
    // const user=defineEmits({

    // })
</script>
<template>
<h3>Footer</h3>
{{ props.user }}
</template>


<style scoped>

</style>