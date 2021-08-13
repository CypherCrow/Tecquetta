<template>
    <div class="FormCard">
        <div class="FormName">
            <p id="name"><router-link to="http://localhost:8080/api/embed-sign">{{ name }}</router-link></p>
        </div>

        <div class="FormDescription">
            <p id="description">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormCard",
    props: {
        name: {
            type: String, 
            default: "TecquettaForm"
        },
        description: {
            type: String, 
            default: "Description here."
        }
    }
}
</script>

<style scoped>

.FormCard {
    background: #f4f4f4;
    margin: 15px; 
    min-width: 300px; 
    min-height: 300px; 
    width: 200px; 
    height: 250px;
    max-width: 500px;
    max-height: 800px; 
    padding: 10px 20px;
    font-size: 14px;
    align-items: center;
    border-radius: 15px; 
}

a, a:hover, a:visited, a:active {
    text-decoration: none;
}

a:hover {
    color: yellow;
}

.FormCard:hover {
    background: rgb(2, 171, 184);
    color: white; 
    font-weight: bold;
}

</style>