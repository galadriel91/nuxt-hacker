<template>
    <div class="loadingContainer" v-if="loading">
        <div class="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';

const common = useCommon();
const { loading } = storeToRefs(common);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/HackerLoading';
</style>