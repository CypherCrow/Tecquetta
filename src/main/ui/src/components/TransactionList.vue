<template>
    <div class="TransactionList">
        <div class="List" v-for="transaction in $store.state.transactions" :key="transaction.id">
            <TransactionCard 
                :title=transaction.title
                :sender=transaction.sender
                :receiver=transaction.receiver
                />
        </div>
    </div>
</template>

<script>
import TransactionCard from '@/components/TransactionCard'

export default {
    name: 'TransactionList',
    components: {
        TransactionCard
    },
    data(){
        return {
            dataComponent: TransactionCard
        }
    }, 
    computed: {
        transactions: {
            get(){
                return this.$store.state.transactions;
            }
        }
    }
}

</script>

<style scoped> 

</style> 
