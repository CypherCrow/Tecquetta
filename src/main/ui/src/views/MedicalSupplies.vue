<template>
    <div class="MedicalSupplies"> 

        <Header />

        <!-- Have divs below have different background colors -->
        <div class="MedicalSuppliesHeader"> 
            <h1>Medical Supplies Acquisition</h1>
        </div> 

        <div class="MedicalSuppliesDescription">
            <p>This page is dedicated to forms for obtaining medical supplies</p>
            <p>If this is not the page for you, return to "Home"</p>
        </div>
        <hr/>
        <div class="MedicalSuppliesDocumentUpload">
            <p>To upload a document relative to this service, click the button below:</p>
            <Button buttonName="Upload Medical Supply Form" />
            <p>Otherwise, click on the "Create Document" link on the header</p>
        </div>
        <hr/>
        <h2>Forms</h2>
        <div class="MedicalSuppliesFormsBackground">
            <div class="MedicalSuppliesDocuments" v-for="document in $store.state.medicalSupplyDocuments" :key="document.id"> 
                <FormCard 
                    :name="document.name"
                    :description="document.description" />
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Button from '@/components/Button'
import FormCard from '@/components/FormCard'

export default {
    name: "OptionPage", 
    components: {
        Header, FormCard, Button
    }
}
</script>

<style scoped>

.MedicalSuppliesFormsBackground{
    background: lightgrey; 
    width: 100%; 
}

.MedicalSuppliesDocuments {
    display: inline-block;
    justify-content: center; 
    margin-top: 10px; 
}

</style>