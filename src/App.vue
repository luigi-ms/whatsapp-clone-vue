<template>
  <v-app>  
    <v-main>
      <router-view/>

    </v-main>

    <div id="floatingBtn">
      <v-btn
        position='fixed'
        icon="mdi-message-text"
        color="brown lighten-1">
      </v-btn>
    </div>
    
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

#floatingBtn {
  padding: 2vw;
  display: flex; 
  justify-content: flex-end;
}

a { text-decoration: none; }
</style>
