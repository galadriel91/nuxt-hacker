<template>
    <div class="heroContainer">
        <HackerHeader />
        <div class="heroContainerWrap">
            <div class="heroContainerWrapText">
                <h2>
                    Hacker News <br class="responsive" />
                    Provides<br class="nomal" />
                    Fastest IT Trend
                </h2>
                <p>
                    All-in-one place for the latest IT trends,<br
                        class="responsive"
                    />
                    Fastest,<br class="nomal" />
                    anytime, anywhere.
                </p>
                <a href="https://news.ycombinator.com/login?goto=news"
                    >Sign Up</a
                >
            </div>
        </div>
        <img
            class="loadingimg"
            src="@/assets/image/mainBg.jpg"
            alt="이미지"
        />
    </div>
</template>

<script lang="ts">
import HackerHeader from '@/components/common/HackerHeader.vue';
// import { useCommon } from '@/store/commonStore';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        HackerHeader,
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

<style lang="scss" scoped>
@import '@/assets/scss/components/main/MainHero';
</style>