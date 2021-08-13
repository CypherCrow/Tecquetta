<template>
    <div class="CreateSite"> 

        <Header />

        <div class="CreateSiteHeader"> 
            <h1><strong>This page is for creating a site</strong></h1>
            <p>This will be placed at the front when the Tecquetta service is created, but for now, it's placed in this Tecquetta site for this demo.</p>
        </div> 
    </div> 
</template>

<script>
import Header from '@/components/Header'

export default {
    name: "CreateSite",
    components: {
        Header, 
    }
}
</script>

<style scoped>

.CreateSiteHeader {
    margin-top: 10px;
}

</style>