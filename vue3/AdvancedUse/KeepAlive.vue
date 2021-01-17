<template>
    <div>
        <button @click="changeState('A')">
            A
        </button>
        <button @click="changeState('B')">
            B
        </button>
        <button @click="changeState('C')">
            C
        </button>

        <!-- tab 切换 -->
        <keep-alive>
            <keep-a v-if="state === 'A'"></keep-a>
            <keep-b v-if="state === 'B'"></keep-b>
            <keep-c v-if="state === 'C'"></keep-c>
        </keep-alive>
    </div>
</template>

<script>
import KeepA from './KeepA.vue'
import KeepB from './KeepB.vue'
import KeepC from './KeepC.vue'

export default {
    components: {
        KeepA,
        KeepB,
        KeepC
    },
    data() {
        return {
            state: 'A'
        }
    },
    methods: {
        changeState(state) {
            this.state = state
        }
    }
}
</script>