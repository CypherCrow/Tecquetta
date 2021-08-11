<template> 
    <div class="MapView">
        <Header /> 

        <div class="MapAndListSection">
            <div id="section" class="MapSection"> 
                <header>Map</header>
                <p>Map Goes Here</p>
            </div>

            <div id="section" class="MedicalDeliveryStatusSection"> 
                <header>Delivery Status</header>
                <TransactionList /> 
            </div> 
        </div>
    </div> 
</template> 

<script>
import Header from '@/components/Header'
import TransactionList from '@/components/TransactionList'

export default {
    name: 'MapView',
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

.MapAndListSection {
    text-align: center;
}

.MapSection {
    float: center; 
}

.MedicalDeliveryStatusSection {
    float: center; 
}

</style> 