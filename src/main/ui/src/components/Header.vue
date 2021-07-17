<template>
    <div class="Header">
        <header>Tecquetta</header>

        <div class="HeaderLinks"> 
            <nav> 
                <li><router-link to="/">Home</router-link></li>
                <li>Documents</li>
                <li>Signatures List</li>
            </nav>
        </div>
    </div> 
</template>

<script>

export default {
    name: 'Header'
}

</script>

<style scoped>

.Header {
    background-color: aqua;
    display: flex; 
    margin-bottom: 15px; 
}

header {
    margin: 10px 5px; 
}

.HeaderLinks {
    padding: 10px 5px;  
}

li {
    display: inline; 
    margin: 10px 5px; 
} 

a {
    text-decoration: none;
    padding: 5px; 
}

a:hover {
    background-color: teal;
}

</style>