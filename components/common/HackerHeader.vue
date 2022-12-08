<template>
    <header>
        <div class="headerWrap">
            <h1>
                <NuxtLink to="/">
                    <img
                        src="@/assets/image/logo.svg"
                        alt="Hacker 로고 이미지"
                    />
                    <span>Hacker News</span>
                </NuxtLink>
            </h1>
            <nav :class="{ open: isCheck }">
                <ul>
                    <li @click="onClickOffBar">
                        <!-- <NuxtLink
                            :to="{ name: 'news', params: { id: currentPage } }"
                            ><span>NEWS</span></NuxtLink
                        > -->
                        <NuxtLink to="/news">
                            <span>NEWS</span>
                        </NuxtLink>
                    </li>
                    <li @click="onClickOffBar">
                        <NuxtLink to="/ask">
                            <span>ASK</span>
                        </NuxtLink>
                        <!-- <NuxtLink
                            :to="{ name: 'ask', params: { id: currentPage } }"
                            ><span>ASK</span></NuxtLink
                        > -->
                    </li>
                    <li @click="onClickOffBar">
                        <NuxtLink to="/jobs">
                            <span>JOBS</span>
                        </NuxtLink>
                        <!-- <NuxtLink
                            :to="{ name: 'jobs', params: { id: currentPage } }"
                            ><span>JOBS</span></NuxtLink
                        > -->
                    </li>
                    <li @click="onClickOffBar">
                        <NuxtLink to="/show">
                            <span>SHOW</span>
                        </NuxtLink>
                        <!-- <NuxtLink
                            :to="{ name: 'show', params: { id: currentPage } }"
                            ><span>SHOW</span></NuxtLink
                        > -->
                    </li>
                    <!-- <li>
                        <button :class="isDark" @click="onClickDark"></button>
                    </li> -->
                </ul>
            </nav>
            <button :class="isDark" @click="onClickDark" class="dark"></button>
            <button
                :class="{ 'xi-close': isCheck, 'xi-bars': !isCheck }"
                class="wholeMenu"
                @click="onClickBars"
            ></button>
        </div>
    </header>
</template>

<script lang="ts">
import { useCommon } from '@/stores/commonStore';
import { defineComponent, ref, computed } from 'vue';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const common = useCommon();
        const { currentPage } = storeToRefs(common);
        const isCheck = ref(false);
        const dark = ref(false);
        const onClickBars = () => {
            isCheck.value = !isCheck.value;
        };
        const onClickOffBar = () => {
            isCheck.value = false;
        };

        const onClickDark = () => {
            // dark.value = !dark.value;
            // localStorage.setItem('dark', JSON.stringify(dark.value));
            // document.body.classList.toggle('dark');
        };

        const isDark = computed(() => {
            // return dark.value ? 'xi-sun' : 'xi-moon';
        });

        const initDark = () => {
            // if (localStorage.dark) {
            //     dark.value = JSON.parse(localStorage.dark);
            //     if (dark.value == true) {
            //         document.body.classList.add('dark');
            //     }
            // }
        };

        initDark();

        return {
            isCheck,
            currentPage,
            onClickBars,
            onClickOffBar,
            onClickDark,
            isDark,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/HackerHeader';
</style>
