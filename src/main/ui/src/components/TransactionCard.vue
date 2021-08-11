<template>
    <div class="TransactionCard"> 

        <div class="TitleSection">
            <p>{{ title }}</p>
        </div> 

        <div class="SenderReceiverSection"> 
            <p>Sender: {{ sender }}</p>
            <p>Receiver: {{ receiver }}</p>
        </div> 
    </div>
</template>

<script>

export default {
    name: 'TransactionCard', 
    props: {
        title: String, 
        id: Number,
        sender: String, 
        receiver: String,
        shipmentDate: String,
        currentDate: String
    }
}

</script>

<style scoped> 

.TransactionCard {
    padding: 5px;
    margin: 5px;
    background: aqua; 
    border-radius: 5px; 
}

.TitleSection {
    text-align: center;
}

</style>