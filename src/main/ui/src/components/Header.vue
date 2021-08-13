<template>
    <div class="Header">
        <header><strong>Tecquetta</strong></header>

        <div class="HeaderLinks"> 
            <nav> 
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/create-doc">Create Document</router-link></li>
                <li><router-link to="/sig-txns">Signature Transactions</router-link></li>
                <li><router-link to="/create-site">Create Website</router-link></li>
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
    height: 50px;
    max-height: 50px;
    margin-bottom: 20px;  
    padding: 10px 23px;
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

a, a:visited, a:active {
    color: inherit; 
    text-decoration: none;
    padding: 10px; 
}

a:hover {
    text-decoration: none;
    background: rgb(2, 171, 184);
    color: white; 
    font-weight: bold; 
    border-radius: 5px; 
}

</style>