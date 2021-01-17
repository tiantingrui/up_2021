<template>
    <div>
        <div v-for="(item) in componentList" :key="item.key">
            <component :is="item.type" />
        </div>
    </div>
</template>

<script>
import A from './A'
import B from './B'
import C from './C'
export default {
    component: {
        A, B, C
    },
    data() {
        return {
            componentList: [
                {
                    type: 'A',
                    key: 1
                },
                {
                    type: 'B',
                    key: 2
                },
                {
                    type: 'C',
                    key: 3
                }

            ]
        }
    }
}
</script>