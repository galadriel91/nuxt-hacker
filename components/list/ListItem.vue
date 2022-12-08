<template>
    <ul>
        <li v-for="(item, index) in lists" :key="item.id">
            <div class="itemWrap">
                <span class="indexNumber">{{ index + 1 + INDEX }}</span>
                <div class="itemInfo">
                    <div class="itemInfoTitleWrap">
                        <p v-if="item.domain">
                            <a :href="item.url" target="_blank">{{
                                item.title
                            }}</a>
                        </p>
                        <p v-else>
                            <RouterLink :to="`/post/${item.id}`">{{
                                item.title
                            }}</RouterLink>
                        </p>
                    </div>
                    <div class="itemInfoContentWrap">
                        <div>
                            <span v-if="item.type === 'job'">by</span>
                            <span v-else>{{ item.points }} points by</span>
                            <RouterLink
                                :to="`/user/${item.user}`"
                                v-if="item.user"
                                >{{ item.user }}</RouterLink
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
import { useItems } from '@/stores/itemStore';
import { useCommon } from '@/stores/commonStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const items = useItems();
        const common = useCommon();
        const { currentPage } = storeToRefs(common);
        const { lists } = storeToRefs(items);
        const INDEX: ComputedRef<number> = computed(() => {
            return (currentPage.value - 1) * 30;
        });

        return {
            lists,
            INDEX,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/list/ListItem';
</style>
