<template>
    <div class="TecquettaHome">
        <Header />

        Welcome to Tecquetta! Your app for e-signatures!<br/>
        This web application uses DocuSign API. 

        <Button buttonName="Button" />

        <!-- <RandomComponent text="Tecquetta" customColor="beige"/> -->

    </div> 
</template>

<script>
import Header from '@/components/Header'
import Button from '@/components/Button'
//import RandomComponent from '@/components/RandomComponent'

export default {
    name: 'Home',
    components: {
        Header, Button, //RandomComponent
    }
}

</script>

<style scoped>

.TecquettaHome {
    text-align: center;
}

</style>