import type { ListItems, UserItems, PostsItem } from './types';
import { fetchListItem, fetchUserItem, fetchPostItem } from '@/api';
import { defineStore } from 'pinia';

export const useItems = defineStore('items', {
    state: () => ({
        lists: [] as ListItems[],
        user: {} as UserItems,
        posts: {} as PostsItem,
    }),
    actions: {
        // async FETCH_LIST(payload: { pageName: string; pageNum: number }) {
        //     const { data } = await fetchListItem(payload);
        //     this.lists = data;
        //     return data;
        // },
        async FETCH_LIST(payload: { pageName: string; pageNum: number }) {
            const { data } = await fetchListItem(payload);
            this.lists = data;
            return data;
        },
        async FETCH_PARAMS(payload: {
            pageName: string;
            pageParams: string;
        }): Promise<UserItems | PostsItem> {
            if (payload.pageName === 'user') {
                const { data } = await fetchUserItem(payload.pageParams);
                this.user = data;
                return data;
            } else {
                const { data } = await fetchPostItem(payload.pageParams);
                this.posts = data;
                return data;
            }
        },
    },
});
