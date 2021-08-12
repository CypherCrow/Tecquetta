<template>
    <div class="Button" :style="{ fontSize: textSize + 'px' }">
        <button>{{ buttonName }}</button> 
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        buttonName: {
            type: String, 
            default: 'Tecquetta Button'
        },
        textSize: {
            type: Number,
            default: 50
        }
    }
}
</script>

<style scoped>

button {
    border: none; 
    background: aqua;
    border-radius: 5px; 
    margin: 10px; 
    padding: 10px; 
}

button:hover {
    background: rgb(2, 171, 184);
    color: white; 
    font-weight: bold;
}

</style>