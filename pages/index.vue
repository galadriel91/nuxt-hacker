<template>
    <MainHero/>
    <MainSection/>
</template>

<script setup lang="ts">
import '@/components/main/MainHero.vue'
import '@/components/main/MainSection.vue'

useHead({
    title: 'Main | Hacker News',
})
</script>
