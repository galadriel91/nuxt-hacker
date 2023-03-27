<template>
    <MainHero />
    <MainSection />
    <!-- <img
        class="loadingimg"
        src="@/assets/image/HackerNews1.svg"
        alt="로고 이미지"
    /> -->
</template>

<script lang="ts">
import MainSection from '@/components/main/MainSection.vue';
import MainHero from '@/components/main/MainHero.vue';
// import { useCommon } from '@/store/commonStore';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        MainSection,
        MainHero,
    },
    setup() {
        // const common = useCommon();
        // const { OFF_LOADING } = common;
        // const offLoading = () => {
        //     OFF_LOADING();
        // };
        // return {
        //     offLoading,
        // };
    },
});
</script>