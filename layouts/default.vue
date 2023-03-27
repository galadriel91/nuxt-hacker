<template>
    <div>
        <div class="pageWrap">
            <NuxtPage/>
        </div>
        <HackerFooter/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HackerFooter from '@/components/common/HackerFooter.vue';

export default defineComponent({
    components: { 
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