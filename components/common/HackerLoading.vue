<template>
    <div class="loadingContainer" v-if="loading">
        <div class="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script lang="ts">
import { useCommon } from '@/store/commonStore';
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
export default defineComponent({
    setup() {
        const common = useCommon();
        const { loading } = storeToRefs(common);
        return {
            loading,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/HackerLoading';
</style>