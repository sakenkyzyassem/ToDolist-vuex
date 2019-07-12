import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
      results: [
        {
            'title': 'Hello',
            'description': 'Here are your notes',
            'done': false
        }
      ]
    },
    getters:{
      results(state){
        return state.results
      }
    },
    mutations:{
        set(state,{result}){
            state.results.push(result)
        },
        upd(state,{total}){
            state.results.splice(total.id,1)
            state.results.push(total.results)
        },
        del(state,{id}){
            state.results.splice(id,1)

        },
    },
    actions:{
        search({commit},query){
            var result  = query;
            commit('set',{result:result})    
        },
        update({commit},query){
            var total  = query;
            commit('upd',{total:total})    
        },
        delete({commit},query){
            var index  = query;
            commit('del',{id:index})
            
        },
    }
  })
  
  export default store