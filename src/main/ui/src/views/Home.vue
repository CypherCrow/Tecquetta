<template>
    <div class="TecquettaHome">
        <Header />

        <div class="WelcomingSection">
            <p>Welcome to Tecquetta!</p>
            <p>This application is developed for +Map International, using DocuSign API.</p>
        </div> 

        <div class="OptionCardsSection" v-for="option in $store.state.options" :key="option.id">
            <OptionCard :optionTitle="option.title" :optionSubtitle="option.subtitle" />
        </div>

        <div id="#contents">
            <strong>Name of Event:</strong>
            <span th:text="${eventName}"></span>
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
    }
}

</script>

<style scoped>

.TecquettaHome {
    text-align: center;
}

.WelcomingSection {
    font-weight: bold; 
    font-size: 1.25em; 
    margin: 45px 0; 
}

.OptionCardsSection {
    display: inline-block; 
}

</style>