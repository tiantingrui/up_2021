export default {
    data() {
        return {
            city: '北京'
        }
    },
    methods: {
        showName() {
            console.log(this.name)
        }
    },
    mounted() {
        console.log('mixin mounted', this.name)
    }
}