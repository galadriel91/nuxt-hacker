<template>
    <div>
        <ListTitle/>
        <ListItem/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListTitle from '@/components/list/ListTitle.vue'
import ListItem from '@/components/list/ListItem.vue'
import { useItems } from '@/store/itemStore';

export default defineComponent({
    components:{
        ListTitle,
        ListItem
    },
    async setup () {
        const item = useItems()
        const route = useRoute()
        const { FETCH_LIST } = item
        // https://nuxt.com/docs/guide/directory-structure/pages#router-options
        // 참고
        definePageMeta({
            header: true,
            title:'News',
            page:'news'
        })

        await FETCH_LIST({
            pageName:route.meta.page as string,
            pageNum: Number(route.params.id)
        })

        return {}
    }
})
</script>

<style scoped>

</style>