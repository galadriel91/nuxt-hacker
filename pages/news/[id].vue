<template>
    <div>
        <ListTitle/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListTitle from '@/components/list/ListTitle.vue'
export default defineComponent({
    components:{
        ListTitle
    },
    setup () {
        // https://nuxt.com/docs/guide/directory-structure/pages#router-options
        // 참고
        definePageMeta({
            header: true,
            title:'News'
        })

        return {}
    }
})
</script>

<style scoped>

</style>