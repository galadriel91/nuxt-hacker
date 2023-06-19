<template>
    <div class="pageWrap">
        <NuxtPage/>
    </div>
    <HackerLoading/>
    <HackerFooter/>
</template>

<script setup lang="ts">
import HackerFooter from '../components/common/HackerFooter.vue';
import HackerLoading from '../components/common/HackerLoading.vue';
</script>

<style lang="scss">
@import '@/assets/scss/index.scss'
</style>