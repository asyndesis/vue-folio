import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeFolioId: false,
    portfolio:[
      {
        id: 1,
        title:'Fridge Poet',
        preview:'placeholder.jpg',
        description:'A multiplayer magnetic poetry game written in React and Socket.io.'
      },
      {
        id: 1,
        title:'Savviform JS',
        preview:'placeholder.jpg',
        description:'A dynamic formbuilder jQuery plugin.'
      },
    ]
  },
  mutations: {
    //      var index = state.portfolio.find(item => item.id === payload);
    UPDATE_ACTIVE_FOLIO_ID: (state, payload) => {
      state.activeFolioId = payload;
    }
  },
  setters: {
    updateActiveFolioId(index) {
      this.state.activeFolio = index;
    }
  },
  getters: {
    portfolio: state => state.portfolio,
    activeFolioId: state => state.activeFolioId,
    getFolioById: (state) => (id) => {
      return state.portfolio.find(folio => folio.id == id)
    }
  },
  actions: {
    updateActiveFolioId: (context, payload) => {
      context.commit("UPDATE_ACTIVE_FOLIO_ID", payload)
    }
  }
})
