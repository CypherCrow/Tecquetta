<template>
    <div class="CreateDocument"> 

        <Header />

        <div class="CreateDocumentHeader"> 
            <h1><strong>This is where you can create a document and publish it.</strong></h1>
            <p>Just in case an image doesn't show up, imagine a sheet of paper, with PDF editor controls from Adobe PDF.</p>
            <p>Of course, for this application, these controls will have their own style in the future.</p>
        </div>

        <div class="CreateDocumentSection"> 
            <p><img src="/assets/GenericForm-AdobePDF.PNG"></p>
        </div>
    </div>
</template> 

<script>
import Header from '@/components/Header'

export default {
    name: "CreateDocument",
    components: {
        Header
    }, 
}
</script>

<style scoped>

.CreateDocumentHeader {
    margin-top: 10px; 
}

</style>