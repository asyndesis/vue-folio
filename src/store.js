import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    activeFolioId: false,
    folioOpen: false,
    folioFocused: false,
    portfolio:[
      {
        id: 1,
        title:'Fridge Poet',
        preview:'thumb-fridge-poet.png',
        images:['full-fridge-poet-1.png','full-fridge-poet-2.png','full-fridge-poet-3.png'],
        description:'A multiplayer magnetic poetry game written in React and Socket.io.',
        url:'https://fridge-poet.herokuapp.com'
      },
      {
        id: 2,
        title:'Savviform JS',
        preview:'thumb-savviform.png',
        images:[ 'full-savviform-1.png','full-savviform-2.png'],
        description:'A dynamic formbuilder jQuery plugin.',
        url:'http://trevorbonomi.com/savviform/render.html'
      },
      {
        id: 3,
        title:'Caregogi',
        preview:'thumb-caregogi.png',
        images:[ 'full-caregogi-1.jpg','full-caregogi-2.jpg','full-caregogi-3.jpg'],
        description:'A website that matches Caregivers with Careseekers.',
        url:'http://www.caregogi.com'
      },
      {
        id: 4,
        title:'Interworx',
        preview:'thumb-interworx.png',
        images:[],
        description:'Redesign and rebranding of website and web hosting control panel.',
        url:'http://www.interworx.com'
      },
      {
        id: 5,
        title:'Vector National Accounts',
        preview:'thumb-national-accounts.png',
        images:[],
        description:'Redesign and rebranding of website and web hosting control panel.',
      },
    ]
  },
  mutations: {
    //var index = state.portfolio.find(item => item.id === payload);
    UPDATE_ACTIVE_FOLIO_ID: (state, payload) => {
      state.activeFolioId = payload;
    },
    UPDATE_FOLIO_OPEN: (state, payload) => {
      state.folioOpen = payload;
    },
    UPDATE_FOLIO_FOCUSED: (state, payload) => {
      state.folioFocused = payload;
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
        images:['placeholder.jpg'],
        description:'',
        url:''
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
    updateFocusedFolioId: (context,payload) => {
      context.commit("UPDATE_FOLIO_FOCUSED", payload)
    }
  }
})
