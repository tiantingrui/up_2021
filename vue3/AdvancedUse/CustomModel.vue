<template>
    <!-- 例如： vue 颜色选择  -->
    <input type="text" 
        :value="text1"
        @input="$emit('change', $event.target.value)"
    >
    <!-- 
        1. 上面的 input 使用了 :value 而不是 v-model
        2. 上面的change 和 model.event 要对应起来
        3. text1 属性要对应气力啊
     -->
</template>

<script>
export default {
    model: {
        prop: 'text1',  // 对应props text
        event: 'change'
    },
    props: {
        text1: {
            type: String,
            default: () => {
                return ''
            }
        }
    }
}
</script>