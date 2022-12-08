<template>
    <div>
        <HackerFooter/>
        <HackerLoading/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HackerFooter from '~~/components/common/HackerFooter.vue';
import HackerLoading from '~~/components/common/HackerLoading.vue';

export default defineComponent({
    components:{
        HackerFooter,
        HackerLoading
},
    setup () {

        return {}
    }
})
</script>

<style lang="scss">
    @import '@/assets/scss/index.scss';
</style>