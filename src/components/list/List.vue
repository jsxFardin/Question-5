<template>
  <div>
      <div v-for="(task, index) in todos" :key="'task-'+index" class="alert alert-primary m-2" 
            role="alert">
        <div class="row" >
            <div class="col-9">{{task.title }}</div>
            <div class="col-1"><button class="btn btn-sm btn-block btn-danger" @click.prevent="removeTodo(index)"> &times; </button></div>
            <div class="col-1"><button class="btn btn-sm btn-block btn-light" @click.prevent="completeTodo(index)">{{ task.completed ? '&#9989;' : ' &#x274F;'}}</button></div>
        </div>
    </div>
  </div>
</template>

<script>
import {TodoMixin} from '../mixin/TodoMixin.js';

export default {
    name:"ListComponent",
    mixins: [TodoMixin],
    methods: {
        removeTodo(index){
            this.$store.dispatch('removeTodo', index);
        },
        completeTodo(index){
            this.$store.dispatch('completeTodo', index);
        },
    }
    
}
</script>