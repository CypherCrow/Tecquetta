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
                subtitle: "For ordering medical supplies"
            }, 
            {
                id: 2, 
                title: "Surgical Supplies Acquisition",
                subtitle: "For ordering surgical supplies"
            }
        ],

        transactions: [
            {
                id: 1,
                title: 'Medical Delivery', 
                sender: 'Marcus Aurelius', 
                receiver: 'Elliot Alderson'
            }, 

            {
                id: 2,
                title: 'Camp Oversight',
                sender: 'Nazz von Bartonschmeer',
                receiver: 'Frodo Baggins'
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