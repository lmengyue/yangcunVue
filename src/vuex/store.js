import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
	login: 'no'
}
const mutations={
	loginChange(status){
		state.login = status;
	}
}
const actions={
	loginStatus({commit}){
		commit('loginChange')
	}
}
export default new Vuex.Store({
	state,
	mutations,
	actions
})

