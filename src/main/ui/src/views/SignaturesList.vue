<template> 
    <div class="SignaturesList">
        <Header />

        <header>A repository for your signatures.</header>
    </div> 
</template>

<script>
import Header from '@/components/Header'

export default {
    name: "SignaturesList",
    components: {
        Header
    }
}
</script>

<style scoped>

header {
    font-weight: bold; 
}

</style>