<template>
  <v-continer>
      <div class="text--primary"><h5>{{ title }}</h5></div>
      <div class="text--primary"><h5>{{ price }}</h5> </div>
      <div class="text--primary"><h5>{{ Description }}</h5></div>
  </v-continer>
</template>
<script>
export default {
  data() {
    return {  
      Description: this.$route.params.description,
      price: this.$route.params.price,
      title: this.$route.params.title,
    };
  },
};
</script>
<style></style>
