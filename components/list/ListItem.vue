<template>
    <ul>
        <li v-for="item in lists" :key="item.id" :class="{ ask: isAsk }">
            <div class="itemWrap">
                <div class="itemInfo">
                    <div class="itemInfoTitleWrap">
                        <p v-if="item.domain">
                            <a :href="item.url" target="_blank">{{
                                item.title
                            }}</a>
                        </p>
                        <p v-else>
                            <NuxtLink :to="`/post/${item.id}`">{{
                                item.title
                            }}</NuxtLink>
                        </p>
                    </div>
                    <div class="itemInfoContentWrap" :class="{ ask: isAsk }">
                        <div>
                            <span v-if="item.type === 'job'">by</span>
                            <span v-else>{{ item.points }} points by</span>
                            <NuxtLink
                                :to="`/user/${item.user}`"
                                v-if="item.user"
                                >{{ item.user }}</NuxtLink
                            >
                            <a :href="item.url" target="_blank" v-else>{{
                                item.domain ? item.domain : 'Unknown'
                            }}</a>
                            <span>{{ item.time_ago }}</span>
                        </div>
                        <span
                            class="comments"
                            v-if="
                                item.url.includes('item') && item.comments_count
                            "
                            >{{ item.comments_count }} comments</span
                        >
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, computed, type ComputedRef } from 'vue';
import { useItems } from '@/store/itemStore';
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

export default defineComponent({
    setup() {
        const route = useRoute();
        const items = useItems();
        const common = useCommon();
        const { currentPage } = storeToRefs(common);
        const { lists } = storeToRefs(items);
        const INDEX: ComputedRef<number> = computed(() => {
            return (currentPage.value - 1) * 30;
        });
        const isAsk = computed(() => {
            return route.name === 'ask';
        });
        return {
            lists,
            INDEX,
            isAsk,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/list/ListItem';
</style>