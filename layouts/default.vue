<template>
    <div>
        <HackerHeader v-if="isNav"/>
        <div class="pageWrap">
            <NuxtPage/>
        </div>
        <HackerFooter/>
    </div>
</template>

<script lang="ts">
import { defineComponent , computed } from 'vue'
import HackerHeader from '@/components/common/HackerHeader.vue';
import HackerFooter from '@/components/common/HackerFooter.vue';

export default defineComponent({
    components: { 
        HackerHeader,
        HackerFooter 
    },
    setup() {
        const route = useRoute()
        console.log(route.meta)
        const isNav = computed(() => {
            return route.meta.header;
        });
        return {
            isNav
        };
    },
})
</script>

<style lang="scss">
    @import '@/assets/scss/index.scss';
</style>