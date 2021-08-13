<template>
    <div class="TransactionCard"> 

        <div class="TitleSection">
            <p>{{ title }}</p>
        </div> 

        <div class="SenderReceiverSection"> 
            <p>Recipient: {{ recipient }}</p>
            <p>Date: {{ date }}</p>
        </div> 
    </div>
</template>

<script>

export default {
    name: 'TransactionCard', 
    props: {
        title: String, 
        id: Number,
        recipient: String,
        date: String
    }
}

</script>

<style scoped> 

.TransactionCard {
    padding: 5px;
    margin: 5px;
    background: aqua; 
    border-radius: 5px;
    width: 700px; 
    max-width: 900px;
    display: inline-block; 
}

.TitleSection {
    text-align: center;
}

.TransactionCard:hover {
    background: rgb(2, 171, 184);
    color: white; 
    font-weight: bold;    
}

</style>