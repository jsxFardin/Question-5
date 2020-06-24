<template>
        <div class="container">
        <div class="row">
            <div class="col-12" style="width:100px">
                <div class="m-5">
                <div class="card bg-light">
                  <div class="card-header">
                      <div class="card-title text-primary text-center">
                          <img src="@/assets/wedevs-logo-colored.svg"/>
                          <div>Wedevs ToDo App</div>
                      </div>
                  </div>
                  <div class="card-body">
                      <form-component/>
                  </div>
                  <div class="card-footer">
                      <list-component/>
                  </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormComponent from '../form/Form.vue'
import ListComponent from '../list/List.vue'
export default {
    name:"Card",
    components:{
        FormComponent,
        ListComponent
    }
}
</script>