<template>
    <div>
        <p>{{name}} {{major}} {{city}} </p>
        <button @click="showName"> 显示姓名</button>
    </div>
</template>

<script>
import myMixin from './myMixin.js'
export default {
    mixin: [myMixin], // 可以添加多个，会自动合并起来
    data() {
        return {
            name: 'terry',
            major: 'web 前端'
        }
    },
    methods: {

    },
    mounted() {
        console.log('component mounted', this.name)
    }
} 
</script>