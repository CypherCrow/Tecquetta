<template>
    <div class="TecquettaHome">
        <Header />

        Welcome to Tecquetta! Your app for e-signatures!<br/>
        This web application uses DocuSign API. 
    </div> 
</template>

<script>
import Header from '@/components/Header'

export default {
    name: "Home",
    components: {
        Header,
    }
}

</script>

<style scoped>

.TecquettaHome {
    text-align: center;
}

</style>