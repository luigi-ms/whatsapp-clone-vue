<template>
  <v-app>  
    <v-main>
      <router-view/>
    </v-main>

    <v-footer padless>
      <v-col>
        <p>{{ today.getFullYear() }} - Luigi Moraes</p>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const today = ref(new Date());
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Poppins&display=swap');

#app {
  font-family: 'Poppins', Arial, sans-serif;
  color: #2c3e50;
}

a { text-decoration: none; }
</style>
