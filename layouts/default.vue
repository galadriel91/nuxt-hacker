<template>
    <div>
        <HackerHeader/>
        <div class="pageWrap">
            <NuxtPage/>
        </div>
        <HackerFooter/>
        <HackerLoading/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HackerHeader from '~~/components/common/HackerHeader.vue';
import HackerLoading from '~~/components/common/HackerLoading.vue';
import HackerFooter from '~~/components/common/HackerFooter.vue';

export default defineComponent({
    components:{
        HackerFooter,
        HackerLoading,
        HackerHeader
},
    setup () {

        return {}
    }
})
</script>

<style lang="scss">
    @import '@/assets/scss/index.scss';
</style>