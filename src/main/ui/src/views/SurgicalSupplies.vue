<template>
    <div class="SurgicalSupplies"> 

        <Header /> 

        <!-- Have divs below have different background colors -->
        <div class="SurgicalSuppliesHeader"> 
            <h1>Surgical Supplies Acquisition</h1>
        </div> 

        <div class="SurgicalSuppliesDescription">
            <p>This page is dedicated to forms for obtaining surgical supplies</p>
            <p>If this is not the page for you, return to "Home"</p>
        </div>
        <hr/>
        <div class="SurgicaluppliesDocumentUpload">
            <p>To upload a document relative to this service, click the button below:</p>
            <Button buttonName="Upload Surgical Supply Form" />
            <p>Otherwise, click on the "Create Document" link on the header</p>
        </div>
        <hr/>
        <h2>Forms</h2>
        <div class="SurgicalSuppliesDocsBackground">
            <div class="SurgicalSuppliesDocuments" v-for="document in $store.state.surgicalSupplyDocuments" :key="document.id"> 
                <FormCard 
                    :name="document.name"
                    :description="document.description"
                    />

            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import FormCard from '@/components/FormCard'
import Button from '@/components/Button'

export default {
    name: "SurgicalSupplies", 
    components: {
        Header, FormCard, Button
    }
}
</script>

<style scoped>

.SurgicalSuppliesDocuments {
    display: inline-block;
    justify-content: center;
    margin-top: 10px;
}

.SurgicalSuppliesDocsBackground {
    background: lightgray; 
    width: 100%;
}

</style>