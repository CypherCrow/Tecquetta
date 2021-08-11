<template> 
    <div class="RandomComponent"> 
        <p :style="{ color: customColor }">{{ text }}</p>
    </div> 
</template> 

<script> 

export default {
    name: "RandomComponent",
    props: {
        text: {
            type: String,
            default: 'Hello World!'
        },
        customColor: {
            type: String,
            default: 'blue'
        }
    }
}

</script> 

<style scoped> 



</style> 