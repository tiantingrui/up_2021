<template>
    <div>
        <scoped-slot-demo :url="website.url">
            <template v-slot="slotProps">
                {{slotProps.slotData.title}}
            </template>
        </scoped-slot-demo>
        <named-slot>
            <!-- 缩写  <template #header> -->
            <template v-slot:header>
                <h1>将插入 header slot 中</h1>
            </template>
            <p> 将插入到 main slot 中， 即未命名的 slot </p>
            <template>
                <p>将插入到 footer slot 中</p>
            </template>
        </named-slot>

        <keep-alive>
            
        </keep-alive>
    </div>
</template>

<script>
import ScopedSlotDemo from 'ScopedSlotDemo.vue'
import NamedSlot from 'NamedSlot.vue'

export default {
    components: {
        ScopedSlotDemo,
        NamedSlot,
        DynamicComponent: () => import('./DynamicComponent.vue') // 异步组件
    },
    data() {
        return {
            website: {
                url: 'https://baidu.com',
                title: '百度',
                subTitle: '百度一下，你就知道'
            }
        }
    }    
}
</script>