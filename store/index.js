import { generateRandomInt } from '~/plugins/generateRandomInt'

export const state = () => ({
    currentDownloadstreamUsage: []
});

export const getters = {
    currentDownloadstreamUsage: state => state.currentDownloadstreamUsage
};

export const mutations = {
    changeCurrentDownloadstreamUsage(state, data) {
        state.currentDownloadstreamUsage = data;
    }
};

export const actions = {
    startPollingDownloadstreamUsage({ commit }) {
        this.polling = setInterval(() => {
            commit('changeCurrentDownloadstreamUsage', [
                currentDownloadstreamUsage[0],
                currentDownloadstreamUsage[1],
                currentDownloadstreamUsage[2],
                currentDownloadstreamUsage[3],
                currentDownloadstreamUsage[4],
                currentDownloadstreamUsage[5],
                currentDownloadstreamUsage[6],
                currentDownloadstreamUsage[7],
                currentDownloadstreamUsage[8],
                currentDownloadstreamUsage[9]
            ]);
        }, 3000)
    }
};
