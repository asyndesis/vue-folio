import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeFolioId: false,
    folioOpen: false,
    portfolio:[
      {
        id: 1,
        title:'Fridge Poet',
        preview:'thumb-fridge.jpg',
        description:'A multiplayer magnetic poetry game written in React and Socket.io.'
      },
      {
        id: 2,
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
    },
    UPDATE_FOLIO_OPEN: (state, payload) => {
      state.folioOpen = payload;
    }
  },
  getters: {
    portfolio: state => state.portfolio,
    activeFolioId: state => state.activeFolioId,
    getFolioById: (state) => (id) => {
      let folio = state.portfolio.find(folio => folio.id == id);
      if (folio !== undefined){
        return folio;
      }
      return {
        id: false,
        title:'error',
        preview:'placeholder.jpg',
        description:'error'
      }
    }
  },
  actions: {
    updateActiveFolioId: (context, payload) => {
      context.commit("UPDATE_ACTIVE_FOLIO_ID", payload)
    },
    updateFolioOpen: (context, payload) => {
      context.commit("UPDATE_FOLIO_OPEN", payload)
    },
  }
})
