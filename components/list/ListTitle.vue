<template>
    <div class="titleWrap">
        <h2>{{ titleName }}</h2>
        <p>
            latest IT trends, news, tips, insights, and
            <br class="responsive" />
            resources, jobs, check it out here.
        </p>
        <span></span>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
    setup() {
        const route = useRoute();
        const titleName = computed(() => {
            return route.meta.title;
        });
        return {
            titleName,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/list/ListTitle';
</style>