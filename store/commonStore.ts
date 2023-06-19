import { defineStore } from 'pinia';

export const useCommon = defineStore('common', {
    state: () => ({
        loading: false,
        currentPage: 1,
    }),
    actions: {
        SET_CURRENTPAGE(pageNum: number) {
            this.currentPage = pageNum;
        },
        ON_LOADING() {
            this.loading = true;
        },
        OFF_LOADING() {
            this.loading = false;
        },
    },
});
