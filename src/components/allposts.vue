<template>
  <div>
    <div id='header'><br>
    <h1 class = 'message'>{{ msg() }}</h1>
    <button class='button_new_post'>
      <router-link :to = "{name: 'AddPost'}">+ Add New Post</router-link>
    </button>
    </div>
    <br><br>

    <div class= 'box_all' v-for='(todo, index) in results' v-bind:key='index'>
      <table>
        <td class = 'button_done'> 
          <button class="btn" @click='todo.done = !todo.done'
            :class="[todo.done ? 'red_b' : 'green_b']">
            {{ (todo.done) ? 'Undone' : 'Done' }}
          </button>
        </td>
        <td class = 'table_body'>
          <h3>{{ todo.title }}</h3>
          <p>{{ todo.description }}</p>
        </td>
        <td class = 'button_delete'>
          <button class = 'btn' @click='deletePost(index)'>Delete</button>
          <br><br>
          <button class = 'btn'><router-link :to = "{name: 'editpost', params:{id:index}}">Edit</router-link></button>
        </td>
      </table>
    </div>
  </div>
</template>

<script>
import store from '../store/index'
//import { mapGetters } from 'vuex'

export default {
  name: "allposts",
  data() {
    return {
      message: 'Your To-Do List:'
    }
  },
  computed:{
    // ...mapGetters({
    //     results: 
    //'getResults'
    // }),
    results(){
      // console.log(this.$store.getters.results)
       return (store.getters.results)
    }
  },
  methods:{
    msg(){
      return this.message
    },
    deletePost(index) {
      // this.$store.
      store.dispatch('delete', index); 
      window.location.reload();    
    }
  }
}
</script>

<style scoped>
 h1, h2 {
   font-weight: normal;
 }
 ul {
   list-style-type: none;
   padding: 0;
 }
 li {
   display: inline-block;
   margin: 0 10px;
 }
 a {
   color: #42b983;
 }
</style>