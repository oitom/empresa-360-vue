<template>
  <div>
  <h3>Detalhes da Lead: {{ this.$route.params.id }}</h3>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">
        <input type="text" class="form-control-plaintext" readonly :value="dados.id">
      </div>
    </div>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">NOME</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" :value="dados.nome">
      </div>
    </div>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">TELEFONE</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" :value="dados.telefone">
      </div>
    </div>

    <div class="col-auto d-flex justify-content-between">
      <button class="btn btn-warning" type="button" @click="$router.push({ name: 'leads' })">Voltar</button>
      <button class="btn btn-primary" type="button">Atualizar</button>
    </div>    
  </div>
</template>
<script>
import ApiMixin from '@/mixins/ApiMixin'

export default {
  name: "Lead",
  mixins: [ApiMixin],
  created() {
    this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`)
  }
}
</script>
