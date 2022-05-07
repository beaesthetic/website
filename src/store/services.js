import { firestore } from '../plugins/firebase';
import { collection, getDocs } from "firebase/firestore"; 

export default {
    namespaced: true,
    state: {
        services: [],
    },
    getters: {
        services: state => state.services,
    },
    actions: {
        async fetchServices({ commit }) {
            let serviceDocs = await getDocs(collection(firestore, 'website-services'));
            let services = [];
            for (let doc of serviceDocs.docs) {
                services.push(doc.data());
            }
            commit('setServices', services);
        },
    },
    mutations: {
        setServices(state, services) {
            state.services = services;
        }
    }
}