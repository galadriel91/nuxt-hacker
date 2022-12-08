// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css' }
            ],
            title: 'Hacker News',
        }
    }
})
