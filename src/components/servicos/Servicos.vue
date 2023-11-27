<template>
  <div>
    <h5>Serviços</h5>
   <hr>
   <div class="row">
    <div class="col mb-2" v-for="(s, i) in dados" :key="i">
      <router-link :to="{ name: 'servico', params: { id: s.id}}">
        <div class="card" style="width: 11rem;">
          <img :src="`/img/${s.icone}`" class="card-img-top">
          <div class="card-body text-center">
            
              <p class="card-text">{{ s.servico }}</p>
            </div>
          </div>
      </router-link>
    </div>
   </div>
  
   <router-view class="mt-3" />
   <router-view class="mt-3" name="opcoes"></router-view>
   <router-view class="mt-3" name="indicadores"></router-view>
  
  </div>
</template>
<script>
import ApiMixin from '@/mixins/ApiMixin'

export default {
  name: "Servicos",
  mixins: [ApiMixin],
  created() {
    this.getDadosApi('http://localhost:3000/servicos');
  }
}
</script>