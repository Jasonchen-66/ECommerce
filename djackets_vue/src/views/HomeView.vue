<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
    <div class="hero-body has-text-centered">
      <p class="title mb-6">
        Welcome to Djacket
      </p>
      <p class="subtitle">
        The best jacket store online
      </p>
    </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered"> Latest products</h2>
      </div>
      
    <product-box
    v-for="product in latestProduct"
    v-bind:key="product.id"
    v-bind:product="product"/>

  </div>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

import ProductBox from '@/components/ProductBox.vue';

export default {
  name: 'HomeView',
  data(){
    return{
      latestProduct:[]
    }
  },
  components: {
    ProductBox
  },
  mounted() {
    this.getLatestProduct()

    document.title = 'Home | Djackets'
  },
  methods:{
    async getLatestProduct(){
      this.$store.commit('setIsLoading',true);

      await axios
      .get('/api/v1/latest-products/')
      .then(response =>{
        this.latestProduct = response.data;
      })
      .catch(error=>{
        console.log(error);
      })

      this.$store.commit('setIsLoading',false);
    }
  }
}
</script>

