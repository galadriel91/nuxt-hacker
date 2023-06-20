<template>
    <header :class="{ notMain: isNav }">
        <div class="headerWrap" :class="{ notMain: isNav }">
            <h1>
                <NuxtLink to="/">
                    <img
                        v-if="!isNav"
                        src="@/assets/images/HackerNews.svg"
                        alt="Hacker 로고 이미지"
                    />
                    <img
                        v-else
                        src="@/assets/images/HackerNews1.svg"
                        alt="Hacker 로고 이미지"
                    />
                </NuxtLink>
            </h1>
            <nav :class="{ open: isCheck }">
                <ul>
                    <li @click="onClickOffBar">
                        <NuxtLink
                            :class="{ active: whatName === 'news' }"
                            :to="{name:'news-id', params:{id:1}}"
                            ><span>News</span></NuxtLink
                        >
                    </li>
                    <li @click="onClickOffBar">
                        <NuxtLink
                            :class="{ active: whatName === 'ask' }"
                            :to="{name:'news-id', params:{id:1}}"
                            ><span>Ask</span></NuxtLink
                        >
                    </li>
                    <li @click="onClickOffBar">
                        <NuxtLink
                            :class="{ active: whatName === 'jobs' }"
                            :to="{name:'news-id', params:{id:1}}"
                            ><span>Jobs</span></NuxtLink
                        >
                    </li>
                    <li @click="onClickOffBar">
                        <NuxtLink
                            :class="{ active: whatName === 'show' }"
                            :to="{name:'news-id', params:{id:1}}"
                            ><span>Show</span></NuxtLink
                        >
                    </li>
                    <li>
                        <a
                            class="login"
                            href="https://news.ycombinator.com/login?goto=news"
                            target="_blank"
                            >Login</a
                        >
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

<script lang="ts" setup>
import { ref, computed } from 'vue';
// import { useCommon } from '@/store/commonStore';
// import { storeToRefs } from 'pinia';
const route = useRoute();
// const common = useCommon();
// const { currentPage } = storeToRefs(common);

const isCheck = ref(false);

const onClickBars = () => {
    // document.body.classList.toggle('on');
    isCheck.value = !isCheck.value;
};
const onClickOffBar = () => {
    // document.body.classList.toggle('on');
    isCheck.value = false;
};

const isNav = computed(() => {
    return route.meta.header;
});

const whatName = computed(() => {
    return route.name;
});

onMounted(()=>{
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1260) {
            document.body.classList.remove('on');
            isCheck.value = false;
        }
    });
})

</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/HackerHeader';
</style>
