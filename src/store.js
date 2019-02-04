import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    activeFolioId: false,
    folioOpen: false,
    folioFocused: false,
    detailsOpen: false,
    portfolio:[
      {
        id: 1,
        title:'Fridge Poet',
        preview:'thumb-fridge-poet.jpg',
        images:[
          {image:'full-fridge-poet-1.jpg',desc:'Simple login using localstorage API', align:'top'},
          {image:'full-fridge-poet-2.jpg',desc:'Rooms can be created with various options. The slug is generated based on the room name.', align:'top'},
          {image:'full-fridge-poet-3.jpg',desc:'Words are randomly spawned based on selected poetry kits. Moving a word will update the websocket server.'}
        ],
        description:'A multiplayer magnetic poetry game written in React and Socket.io.',
        url:'https://fridge-poet.herokuapp.com'
      },
      {
        id: 2,
        title:'Savviform JS',
        preview:'thumb-savviform.jpg',
        images:[
          {image:'full-savviform-1.jpg',desc:'View of form builder. Here is where a user can create a form.', align:'top'},
          {image:'full-savviform-2.jpg',desc:'View of the rendered form. A front end user can fill this form out and it will save their progress to localstorage.', align:'top'},
        ],
        description:'A dynamic formbuilder jQuery plugin.',
        url:'http://trevorbonomi.com/savviform/render.html'
      },
      {
        id: 3,
        title:'Caregogi',
        preview:'thumb-caregogi.jpg',
        images:[
          {image:'full-caregogi-4.jpg',desc:'View of the careseeker dashboard.', align:'top'},
          {image:'full-caregogi-1.jpg',desc:'A careseeker can send schedule requests by booking caregivers to certain dates on this screen.'},
          {image:'full-caregogi-2.jpg',desc:'View of options when editing a shift.'},
          {image:'full-caregogi-3.jpg',desc:'The quick scheduler screen.'}
        ],
        description:'A website that matches Caregivers with Careseekers.',
        url:'http://www.caregogi.com'
      },
      {
        id: 4,
        title:'Interworx',
        preview:'thumb-interworx.jpg',
        images:[
          {image:'full-interworx-1.jpg',desc:'Homepage was redesigned and rebranded with purple as the new base color.', align:'top'},
          {image:'full-interworx-3.jpg',desc:'The feature page was built for customers to get a birds eye view.', align:'top'},
          {image:'full-interworx-2.jpg',desc:'The software itself now defaults to this purple theme out of the box.', align:'top'},
          {image:'full-interworx-5.jpg',desc:'View of Nodeworx on a phone or tablet.', align:'top', size:'contain'},
          {image:'full-interworx-4.jpg',desc:'CSS restyle of LATEX documentation.', align:'top'},
        ],
        description:'Redesign, rebuild and rebranding of website and design of web hosting control panel.',
        url:'http://www.interworx.com'
      },
      {
        id: 5,
        title:'Vector National Accounts',
        preview:'thumb-national-accounts.jpg',
        images:[
          {image:'full-na-1.jpg',desc:'The client dashboard was built so that widgets could be added, moved, edited or removed.', align:'top'},
          {image:'full-na-2.jpg',desc:'The call list interface was designed for clients to reset codes on the fly in bulk.', align:'top'},
          {image:'full-na-3.jpg',desc:'Various admin screens for controlling client widgets. (Note the cute little frozen icon)', align:'top'}
        ],
        description:'Design and code of security dashboard and various interfaces.',
      },
      {
        id: 6,
        title:'Medrespond',
        preview:'thumb-medrespond.jpg',
        images:[
          {image:'full-medrespond-1.jpg',desc:'Ask a question in the box and text analysis will provide the appropriate video response.', align:'top'},
          {image:'full-medrespond-2.jpg',desc:'Guided learning programs were used by thousands of applicants.', align:'top'},
          {image:'full-medrespond-3.jpg',desc:'The software supported various kinds of tests along the way inbetween and even below video segments.', align:'top'}
        ],
        description:'Design and code of interactive video experiences.',
      },
      {
        id: 7,
        title:'Deiwert Insurance Agency',
        preview:'thumb-deiwert.jpg',
        url:'http://www.deiwertagency.com',
        images:[
          {image:'full-deiwert-1.jpg',desc:'View of auto insurance page.', align:'top'},
          {image:'full-deiwert-2.jpg',desc:'Mobile website view.', align:'top', size:'contain'},
        ],
        description:'Design and code of Wordpress theme.',
      },
      {
        id: 8,
        title:'Case Sabatini',
        preview:'thumb-case.jpg',
        url:'http://www.casesabatini.com',
        images:[
          {image:'full-case-1.jpg',desc:'I jumped in and fixed their site after another developer was not meeting expectations. This site has stood the test of time. ', align:'top'},
          {image:'full-case-2.jpg',desc:'Clients still use their payment portal to this day.', align:'top'},
        ],
        description:'Design and code of Wordpress theme.',
      },
      {
        id: 9,
        title:'Pittsburgh Bonsai Society',
        preview:'thumb-bonsai.jpg',
        url:'http://www.pittsburghbonsai.org',
        images:[
          {image:'full-bonsai-1.jpg',desc:'A Wordpress site I did a while back. Still going strong.', align:'top'}
        ],
        description:'Design and code of Wordpress theme.',
      },
      {
        id: 10,
        title:'Fredos Deli',
        preview:'thumb-fredos.jpg',
        url:'http://www.fredosdeli.biz',
        images:[
          {image:'full-fredos-1.jpg',desc:'A flat HTML site I did back in the day.', align:'top'}
        ],
        description:'Design and code of site.',
      },
      {
        id: 11,
        title:'Katya McCoy Photography',
        preview:'thumb-katya.jpg',
        url:'http://www.katyamccoy.com/',
        images:[
          {image:'full-katya-1.jpg',desc:'A photowall Wordpress theme I did for a friend. The logo was also made into business cards.', align:'top'}
        ],
        description:'Design of logo and code of Wordpress theme.',
      },
      {
        id: 12,
        title:'PGT Trucking',
        preview:'thumb-pgt.jpg',
        url:'http://www.pgttrucking.com/',
        images:[
          {image:'full-pgt-1.jpg',desc:'A pretty fair sized site I built into the propriatery Savvior CMS.', align:'top'}
        ],
        description:'Code of CMS template and site build.',
      },
      {
        id: 13,
        title:'Microbac Labs',
        preview:'thumb-microbac.jpg',
        url:'http://www.microbac.com/',
        images:[
          {image:'full-microbac-1.jpg',desc:'A bunch of different widgets were created so that the client could add different elements in the Savvior CMS.', align:'top'},
          {image:'full-microbac-2.jpg',desc:'View of expanding side-by-side widgets.', align:'top'},
          {image:'full-microbac-3.jpg',desc:'View of safety page on mobile.', align:'top', size:'contain'}
        ],
        description:'Code of CMS template and site build.',
      },
      {
        id: 14,
        title:'Abacus Luxury Travel',
        preview:'thumb-abacus.jpg',
        url:'http://www.abacusluxurytravelservice.com/',
        images:[
          {image:'full-abacus-1.jpg',desc:'Another old wordpress build. Still used years later.', align:'top'}
        ],
        description:'Design and code of Wordpress theme.',
      },
      {
        id: 15,
        title:'Lynne Squilla',
        preview:'thumb-lynne.jpg',
        url:'http://www.lynnesquilla.com/',
        images:[
          {image:'full-lynne-1.jpg',desc:'A site I did for my aunt that probably could use updated videos.', align:'top'}
        ],
        description:'Design and code of Wordpress theme.',
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
    UPDATE_DETAILS_OPEN: (state, payload) => {
      state.detailsOpen = payload;
    },
    UPDATE_FOLIO_FOCUSED: (state, payload) => {
      state.folioFocused = payload;
    }
  },
  getters: {
    detailsOpen: state => state.detailsOpen,
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
        images:[
          {image:'placeholder.jpg',desc:'arf'},
        ],
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
    updateDetailsOpen: (context, payload) => {
      context.commit("UPDATE_DETAILS_OPEN", payload)
    },
    updateFocusedFolioId: (context,payload) => {
      context.commit("UPDATE_FOLIO_FOCUSED", payload)
    }
  }
})
