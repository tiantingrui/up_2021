<template>
    <a href="url">
        <slot :slotData="website">
            {{website.subTitle}}
        </slot>
    </a>
</template>
  
<script>
export default {
    props: ['url'],
    data() {
        return {
            website: {
                url: 'https://tiantingrui.com',
                title: 'terry',
                subTitle: 'ice_sweet'
            }
        }
    }
}
</script>