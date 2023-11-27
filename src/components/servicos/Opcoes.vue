<template>
  <div class="card">
      <div class="card-header bg-primary text-white">
       Opções
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item" v-for="(o, i) in dados.opcoes" :key="i">
            {{ o.nome }}
          </li>
        </ul>
      </div>
      
    </div>
  </template>
  <script>
  import ApiMixin from '@/mixins/ApiMixin'
  
  export default {
    name: "Opcoes",
    mixins: [ApiMixin],
    created() {
      this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`)
    },
    beforeRouteUpdate(to, from, next) {
      if(to.params.id != undefined)
        this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
      next();
    },
  }
  </script>