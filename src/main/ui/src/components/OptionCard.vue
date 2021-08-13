<template>
    <div class="OptionCard">
        <h1>{{ optionTitle }}</h1>
        <h2>{{ optionSubtitle }}</h2>

        <div class="ButtonSection">
            <!-- <Button buttonName="Proceed" @click="gotoLink(optionLink)" /> -->
            <button type="submit" @click="gotoLink(redirectRoute)">Proceed</button>
        </div>
    </div>
</template>

<script>
//import Button from './Button'

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
        }, 
        redirectRoute: {
            type: String,
            default: "/"
        }
    },
    /* components: {
        Button
    }, */
    methods: {
        gotoLink(route) {
            this.$router.push(route);
        }
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
    margin: 15px 20px;
    background: white; 
    align-items: center;
}
 
h1 {
    margin-top: 30px; 
    font-size: 25px;
}

h2 {
    font-size: 16px; 
}

.ButtonSection {
    margin: 25px; 
}

</style>