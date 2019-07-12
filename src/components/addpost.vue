<template>
	<div id = 'new_post'>
		<h1>{{ msg() }}</h1>
        <h3 >Title:</h3>
		<input class = 'form_add_title' type = "text" placeholder='Enter a title' 
        v-model = 'form.title' :class="[(form.title).length == 0 ? 'red' : 'green']">
		<br>
        <h3>Description:</h3>
		<textarea class = 'form_add_desc' type = "text" placeholder='Enter a description' 
        v-model = 'form.description' :class="[(form.description).length == 0 ? 'red' : 'green']">
        </textarea>
		<br>
        <br>
		<router-link :to = "{name: 'allposts'}" ><button class = 'button_new_post' @click='addPost()'
        v-bind:disabled = '(form.title).length ==0 && (form.description).length == 0'
        type = 'submit'>Submit</button></router-link>
	
		<button class = 'button_new_post'><router-link :to = "{name: 'allposts'}" >HOME</router-link></button>
        <br><br>
	</div>
</template>

<script>
import store from '../store/index';

export default{
    name: "addpost",
    data() {
        return {
            message: 'Your new To-Do:',
            form: {
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
			let form = {
				title: this.form.title ,
				description: this.form.description,
				done: this.form.done
			};
            store.dispatch('search', form);
		}
    }
};
</script>