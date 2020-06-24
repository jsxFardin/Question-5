<template>
    <form>
        <div class="form-group">
            <input type="search" name="search" class="form-control" placeholder="Search your task"/>
            <input type="checkbox" value="active"> <span>Active</span>
            <input type="checkbox" class="ml-3" value="disable"> <span>Disable</span>
            <input type="checkbox" class="ml-3" value="done"> <span>Done</span>
        </div>

        <div class="form-group">
            <label class="text-primary">Task Title</label>
            <input type="text" name="name" v-model="newTodo" class="form-control" placeholder="Enter your task details"/>
        </div>
        <div class="form-group">
            <label class="text-primary">Description</label>
            <textarea  name="description" class="form-control" placeholder="Enter your task description here.."></textarea>
        </div>
        <div class="text-right">
            <button class="btn btn-sm btn-primary" @click.prevent="addTodo">Add</button>
        </div>
    </form>
</template>


<script>
import {TodoMixin} from '../mixin/TodoMixin.js';

export default {
    name:'FormComponent',
    mixins: [TodoMixin],
    data(){
        return {
            newTodo : "",
        }
    },
    methods : {
        addTodo(){
            let task = {
                id : this.todos.length+1,
                title : this.newTodo,
                completed : false
            }
            this.$store.dispatch('addTodo', task);
            this.newTodo = '';
        }
    }
}
</script>