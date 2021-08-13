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

        options: [
            {
                id: 1,
                title: "Medical Supplies Acquisition",
                subtitle: "For obtaining medical supplies"
            }, 
            {
                id: 2, 
                title: "Surgical Supplies Acquisition",
                subtitle: "For obtaining surgical supplies"
            }
        ],

        transactions: [
            {
                id: 1,
                title: 'Medical Supplies', 
                recipient: 'Elliot Alderson',
                date: "8/12/2021"
            }, 

            {
                id: 2,
                title: 'Surgical Supplies',
                recipient: 'Nazz von Bartonschmeer',
                date: "8/10/2021"
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