<template>
    <header :class="{ notMain: isNav }">
        <div class="headerWrap" :class="{ notMain: isNav }">
            <h1>
                <NuxtLink to="/">
                    <img
                        v-if="!isNav"
                        src="@/assets/image/HackerNews.svg"
                        alt="Hacker 로고 이미지"
                    />
                    <img
                        v-else
                        src="@/assets/image/HackerNews1.svg"
                        alt="Hacker 로고 이미지"
                    />
                </NuxtLink>
            </h1>
            <nav :class="{ open: isCheck }">
                <ul>
                    <li @click="onClickOffBar">
                        <NuxtLink
                            :class="{ active: whatName === 'news' }"
                            to="/news"
                            ><span>News</span></NuxtLink
                        >
                    </li>
                    <li @click="onClickOffBar">
                        <NuxtLink
                            :class="{ active: whatName === 'ask' }"
                            to="/ask"
                            ><span>Ask</span></NuxtLink
                        >
                    </li>
                    <li @click="onClickOffBar">
                        <NuxtLink
                            :class="{ active: whatName === 'jobs' }"
                            to="/jobs"
                            ><span>Jobs</span></NuxtLink
                        >
                    </li>
                    <li @click="onClickOffBar">
                        <NuxtLink
                            :class="{ active: whatName === 'show' }"
                            to="/show"
                            ><span>Show</span></NuxtLink
                        >
                    </li>
                    <li>
                        <button class="login">Login</button>
                    </li>
                </ul>
            </nav>
            <button
                :class="{ 'xi-close': isCheck, 'xi-bars': !isCheck }"
                class="wholeMenu"
                @click="onClickBars"
            ></button>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';
// import { useCommon } from '@/store/commonStore';
import { useRoute } from 'vue-router';
// import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const route = useRoute();
        // const common = useCommon();
        // const { currentPage } = storeToRefs(common);

        const isCheck = ref(false);

        const onClickBars = () => {
            isCheck.value = !isCheck.value;
        };
        const onClickOffBar = () => {
            isCheck.value = false;
        };

        const isNav = computed(() => {
            return route.meta.header;
        });

        const whatName = computed(() => {
            return route.name;
        });

        watch(whatName, () => {
            console.log(whatName.value);
        });

        return {
            isCheck,
            // currentPage,
            onClickBars,
            onClickOffBar,
            whatName,
            isNav,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/HackerHeader';
</style>
