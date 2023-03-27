<template>
    <div>
        <!-- <HackerHeader/> -->
        <div class="pageWrap">
            <NuxtPage/>
        </div>
        <HackerFooter/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HackerHeader from '@/components/common/HackerHeader.vue';
import HackerFooter from '@/components/common/HackerFooter.vue';

export default defineComponent({
    components: { 
        // HackerHeader,
        HackerFooter 
    },
    setup() {
        return {};
    },
})
</script>

<style lang="scss">
    @import '@/assets/scss/index.scss';
</style>