<template>
    <footer
        class="footer"
        :class="{ job: isJob, detail: isDetail, not: isNot }"
    >
        <div class="footerWrap">
            <div class="footerTop">
                <div class="footerLeft">
                    <h2>
                        <img
                            src="@/assets/image/HackerNews.svg"
                            alt="HackerNews 로고"
                        />
                    </h2>
                    <p>News platform for <br />modern IT</p>
                    <span>© Copyright Hacker News</span>
                </div>
                <div class="footerRight">
                    <ul>
                        <li>
                            <h3>Company</h3>
                            <a href="">YC Blog</a>
                            <a href="">Contact</a>
                            <a href="">Press</a>
                            <a href="">People</a>
                            <a href="">Careers</a>
                        </li>
                        <li>
                            <h3>Programs</h3>
                            <a href="">YC Program</a>
                            <a href="">Startup School</a>
                            <a href="">Work at a Startup</a>
                            <a href="">Continuity</a>
                        </li>
                        <li>
                            <h3>Resources</h3>
                            <a href="">Startup Directory</a>
                            <a href="">Startup Library</a>
                            <a href="">Covid</a>
                            <a href="">Investors</a>
                        </li>
                        <li>
                            <h3>ETC</h3>
                            <a href="">Guidelines</a>
                            <a href="">FAQ</a>
                            <a href="">Api</a>
                            <a href="">Security</a>
                            <a href="">Legal</a>
                            <a href="">Apply to YC</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footerBottom">
                <span>© Copyright Hacker News</span>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    setup() {
        const route = useRoute();
        const isJob = computed(() => {
            return route.name === 'jobs';
        });
        const isDetail = computed(() => {
            if (route.name === 'user' || route.name === 'post') {
                return true;
            } else {
                return false;
            }
        });
        const isNot = computed(() => {
            return route.meta.title === 'Error';
        });
        return {
            isJob,
            isDetail,
            isNot,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/HackerFooter';
</style>
