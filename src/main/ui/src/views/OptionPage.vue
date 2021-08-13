<template>
    <div class="OptionPage"> 

        <!-- Have divs below have different background colors -->
        <div class="OptionPageHeader"> 
            <header>{{ optionTitle }}</header>
        </div> 

        <div class="OptionPageDescription">
            <p>Lorem ipsum</p><br/>
            <p>Lorem ipsum</p><br/>
            <p>Lorem ipsum</p><br/>
        </div>

        <!-- include a section to upload a document --> 
        <div class="OptionDocuments"> 
            <p>Document 1</p>
            <p>Document 2</p>
            <p>Document 3</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "OptionPage", 
    props: {
        optionTitle: {
            type: String,
            default: "Option"
        }
    }
}
</script>

<style scoped>

.OptionDocuments {
    display: inline-block;
}

</style>