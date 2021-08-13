<template>
    <div class="CreateDocument"> 

        <Header />
        
        <div class="CreateDocumentHeader"> 
            <strong>This is where you can create a document for signing.</strong>
        </div>
    </div>
</template> 

<script>
import Header from '@/components/Header'

export default {
    name: "CreateDocument",
    components: {
        Header
    }
}
</script>

<style scoped>

</style>