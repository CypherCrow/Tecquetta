<template>
    <div class="TecquettaHome">
        <Header />

        <div class="WelcomingSection">
            <p>Welcome to Tecquetta!</p>
            <p>This application is developed for +Map International, using the DocuSign API.</p>
        </div> 

        <div class="OptionCardsSection" v-for="option in $store.state.options" :key="option.id">
            <OptionCard :optionTitle="option.title" :optionSubtitle="option.subtitle" />
        </div>

        <div id="#contents">
            <strong>A greeting:</strong><br/>
            <strong>{{ msg }}</strong>
        </div> 

    </div> 
</template>

<script>
import Header from '@/components/Header'
import OptionCard from '@/components/OptionCard'


export default {
    name: 'Home',
    components: {
        Header, OptionCard
    },
    data() {
        return {
            msg: ''
        }
    },
    mounted() {
        fetch("/hello")
            .then((response) => response.text())
            .then((data) => {
                this.msg = data; 
            })
    }
}

</script>

<style scoped>

.TecquettaHome {
    text-align: center;
    background-image: url("../assets/blogspot-image.jpg"); 
    background-repeat: no-repeat;
    background-size: cover;
}

.WelcomingSection {
    font-weight: bold; 
    font-size: 1.25em; 
    margin: 45px 0; 
    color: white; 
}

.OptionCardsSection {
    display: inline-block; 
}

#contents {
    color: white; 
}

</style>