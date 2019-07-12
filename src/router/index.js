import Vue from 'vue'
import Router from 'vue-router'
import allposts from '@/components/allposts'
import AddPost from '@/components/addpost'
import EditPost from '@/components/edit'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'allposts',
      component: allposts
    },
    {
    	path: '/:id',
    	name: 'editpost',
    	component: EditPost
    },
    {
    	path: '/new',
    	name: 'AddPost',
    	component: AddPost
    },
    {
    	path: '*',
    	name: 'error',
    	component: Error
    },
  ]
})
