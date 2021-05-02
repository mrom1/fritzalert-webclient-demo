export const state = () => ({
    currentBandwidthUsage: {
        downstream: [],
        upstream: [],
    },
    currentBandwithUsageDownstream: [],
    currentBandwithUsageDownstreamLabels: [],
})

export const mutations = {
    STORE_DOWNSTREAM(state, currentBandwithUsageDownstream) {
        state.currentBandwithUsageDownstream = currentBandwithUsageDownstream;
    },
    STORE_DOWNSTREAM_LABELS(state, currentBandwithUsageDownstreamLabels) {
        state.currentBandwithUsageDownstream = currentBandwithUsageDownstreamLabels;
    }
}

export const actions = {
    startPollingDownstream({ commit }) {
        this.polling = setInterval(() => {
            let randomArray = Array.from({ length: 11 }, () => Math.floor(Math.random() * 40));
            console.log(randomArray);
            commit('STORE_DOWNSTREAM', randomArray);
            commit('STORE_DOWNSTREAM_LABELS', randomArray);
        }, 5000)
    },

    storeDownstreamUsage({ commit }, currentBandwithUsageDownstream) {
        commit('STORE_DOWNSTREAM', currentBandwithUsageDownstream);
    },

    storeDownstreamUsageLabels({ commit }, currentBandwithUsageDownstreamLabels) {
        commit('STORE_DOWNSTREAM_LABELS', currentBandwithUsageDownstreamLabels);
    },

    stopPollingDownstream() {
        clearInterval(this.polling);
    }
}

export const getters = {
    getDownstreamUsage(state) {
        return state.currentBandwithUsageDownstream;
    },

    getDownstreamUsageLabels(state) {
        return state.currentBandwithUsageDownstreamLabels;
    }
}
