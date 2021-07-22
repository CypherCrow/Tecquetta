import { createStore } from 'vuex'

const store = createStore({
    state: {
        documents: [
            {
                id: 1, 
                documentName: 'TecquettaDocument1',
                documentType: 'pdf'
            }
        ], 

        envelopes: [
            {
                id: 1, 
                envelopeName: 'TecquettaEnvelope1', 
                envelopeType: 'carbon',
                documentId: 1 
            }
        ], 

        rooms: [
            {
                id: 1,
                roomName: 'TecquettaRoom1',
                owners: [
                    {
                        accountId: '1001'
                    },

                    {
                        accountId: '1002'
                    },

                    {
                        accountId: '1003'
                    }
                ]
            }
        ]
    },
    mutations: {
        addDocument(state, document){
            state.documents.push(document)
        },

        addEnvelope(state, envelope) {
            state.documents.push(envelope)
        },

        addRoom(state, room){
            state.rooms.push(room)
        }
    },
    actions: {

    },
    getters: {

    },
    modules: {

    }
})


export default store