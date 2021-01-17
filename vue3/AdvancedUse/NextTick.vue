<template>
  <div>
    <ul ref="ul1">
      <li v-for="item in list" :key="item">
        {{ item }}
      </li>
    </ul>
    <button @click="additem">添加</button>
    <button @click="additemAsync">Async添加</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                'a', 'b', 'c'
            ]
        }
    },
    methods: {
        additem() {
            this.list.push(`${Date.now()}`)
            this.list.push(`${Date.now()}`)
            this.list.push(`${Date.now()}`)
            const ulElem = this.$refs.ul1

            console.log(ulElem.childNodes.length)
        },
        additemAsync() {
            this.list.push(`${Date.now()}`)
            this.list.push(`${Date.now()}`)
            this.list.push(`${Date.now()}`)
            // 1. Vue 异步渲染
            // 2. $nextTick 待 DOM 渲染完再回调
            // 3. 页面渲染时会将 data 的修改做整合，多次 data 修改只会渲染一次
            this.$nextTick(() => {
                const ulElem = this.$refs.ul1
                console.log(ulElem.childNodes.length)
            })
        }
    }
}
</script>