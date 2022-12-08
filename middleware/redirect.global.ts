export default defineNuxtRouteMiddleware((to) => {
    if(to.name === 'index'){
        return navigateTo('/news')
    }
    
    console.log(to)
})