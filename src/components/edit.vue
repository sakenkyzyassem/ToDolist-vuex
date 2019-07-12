<template>
    <div >
        <h1> {{msg()}}</h1>
        <h3 class ="edit_text">Title:</h3>
		<input class = 'form_add_title' type = "text" 
        v-model = 'total.title' :class="[(total.title).length == 0 ? 'red' : 'green']">
		<br>
        <h3 class ="edit_text">Description:</h3>
		<textarea class = 'form_add_desc' type = "text"
        v-model = 'total.description' :class="[(total.description).length == 0 ? 'red' : 'green']">
        </textarea>
		<br>
        <br>
		<router-link :to = "{name: 'allposts'}" ><button class = 'button_new_post' @click='addPost()'
        v-bind:disabled = '(total.title).length ==0 && (total.description).length == 0'>Submit</button></router-link>
	
		<button class = 'button_new_post'><router-link :to = "{name: 'allposts'}" >BACK TO HOME</router-link></button>
        <br><br>
    </div>
</template>

<script>
import store from '../store/index'
import router from '../router/index';

export default {
    name: 'edit',
    data() {
        return {
            message: 'Your post to edit: ',
            index: 0,
            total:{
               title: '',
               description: '',
               done: false
            }
        }  
    },
    methods: {
        msg(){
            return this.message
        },
        addPost(){
            let results = {
                title: this.total.title ,
                description: this.total.description,
                done: this.total.done
            }
            let total = {
                id: this.index,
                results: results 
            }
            store.dispatch('update', total);		
        }
    },
    mounted() {
      this.index = this.$route.params.id;
      this.total = store.getters.results[this.index];
    },
    navigate() {
      router.go(-1);
    }
};
</script>