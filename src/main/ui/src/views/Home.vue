<template>
    <div class="TecquettaHome">
        <Header />

        Welcome to Tecquetta! Your app for e-signatures!<br/>
        This web application uses DocuSign API. 

        <Button /> <!-- buttonName="Tecquetta Button" -->

    </div> 
</template>

<script>
import Header from '@/components/Header'
import Button from '@/components/Button'

export default {
    name: 'Home',
    components: {
        Header, Button
    }
}

</script>

<style scoped>

.TecquettaHome {
    text-align: center;
}

</style>