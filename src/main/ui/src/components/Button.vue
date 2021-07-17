<template>
    <div class="Button">
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
    background: teal;
}

</style>