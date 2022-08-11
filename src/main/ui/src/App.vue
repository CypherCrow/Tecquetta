<template>
  <div id="app"> 
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
