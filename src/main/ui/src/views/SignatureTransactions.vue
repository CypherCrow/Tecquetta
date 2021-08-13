<template> 
    <div class="SignatureTransactions">
        <Header /> 

        <div class="ListSection">

            <div id="section" class="MedicalDeliveryStatusSection"> 
                <header>Signature Transactions</header>
                <TransactionList /> 
            </div> 
        </div>
    </div> 
</template> 

<script>
import Header from '@/components/Header'
import TransactionList from '@/components/TransactionList'

export default {
    name: 'SignatureTransactions',
    components: {
        Header, TransactionList
    }
}

</script>

<style scoped> 

#section {
    border: 1px solid;
    border-radius: 5px;
    margin: 10px;
    padding: 5px;  
    text-align: center; 
}

.ListSection {
    display: inline-block; 
}

header {
    margin: 10px 0;
    font-weight: bold; 
}

</style> 