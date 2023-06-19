<template>
    <div
        @click="onClickUp"
        class="xi-angle-up-thin"
        :class="{ on: SCROLL }"
    ></div>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue';
import { ref, onMounted, computed, onBeforeUnmount } from 'vue';

const windowTop = ref(0);

const SCROLL: ComputedRef<boolean> = computed(() => {
    return windowTop.value >= 500;
});

const onClickUp = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
};

const onScroll = () => {
    windowTop.value = window.scrollY;
};
onMounted(() => {
    window.addEventListener('scroll', onScroll);
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/HackerUp.scss';
</style>
