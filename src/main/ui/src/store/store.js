import { createStore } from 'vuex'

const store = createStore({
    state: {
        medicalSupplyDocuments: [
            {
                id: 1, 
                name: 'Medical Supplies - Pediatric Antibiotics Form',
                type: 'pdf',
                description: "A form for obtaining medical supplies for MAP International's Pediatric Antibiotics Program."
            },
            {
                id: 2,
                name: 'Medical Supplies - Mental Health Form',
                type: 'pdf',
                description: "A form for obtaining medical supplies for MAP International's Mental Health Program."
            }
        ], 

        surgicalSupplyDocuments: [
            {
                id: 1, 
                name: 'Surgical Supplies - Neglected Tropical Diseases Form',
                type: 'pdf',
                description: "A form for obtaining medical supplies for MAP International's Neglected Tropical Diseases Program"
            }
        ],

        options: [
            {
                id: 1,
                title: "Medical Supplies Acquisition",
                subtitle: "For obtaining medical supplies",
                redirectRoute: '/med-supplies'
            }, 
            {
                id: 2, 
                title: "Surgical Supplies Acquisition",
                subtitle: "For obtaining surgical supplies",
                redirectRoute: '/surg-supplies'
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