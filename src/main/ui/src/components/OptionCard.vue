<template>
    <div class="OptionCard">
        <h1>{{ optionTitle }}</h1>
        <h2>{{ optionSubtitle }}</h2>

        <Button buttonName="Proceed"/>
    </div>
</template>

<script>
import Button from './Button'

export default {
    name: 'OptionCard',
    props: {
        optionTitle: {
            type: String, 
            default: "OptionTitle"
        },
        optionSubtitle: {
            type: String, 
            default: "Short description of option here"
        }
    },
    components: {
        Button
    }
}
</script>

<style scoped>

.OptionCard {
    border-radius: 5px;
    padding: 5px; 
    width: 400px; 
    max-width: 400px;
    height: 250px;
    max-height: 250px; 
    margin: 5px;
}
 
h1 {
    font-size: 30px;
}

h2 {
    font-size: 20px; 
}

</style>