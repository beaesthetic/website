import { firestore } from '../plugins/firebase';
import { collection, getDocs } from "firebase/firestore"; 

export default {
    namespaced: true,
    state: {
        services: [],
        promo: [],
    },
    getters: {
        services: state => state.services,
        promo: state => state.promo
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
        async fetchPromo({ commit }) {
            let promoDocs = await getDocs(collection(firestore, 'website-promo'));
            let promo = [];
            for (let doc of promoDocs.docs) {
                let obj = doc.data();
                obj['id'] = doc.id;
                promo.push(obj);
            }
            commit('setPromo', promo);
        }
    },
    mutations: {
        setServices(state, services) {
            state.services = services;
        },
        setPromo(state, promo) {
            state.promo = promo;
        }
    }
}