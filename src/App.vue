<template>
  <v-app>
    <v-app-bar
      app
      color="brown lighten-1"
      dark
      elevate-on-scroll
    >
      <v-toolbar-title>WhatsApp</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs
          grow
          background-color="brown lighten-1"
          dark
        >
          <v-tab v-for="(link, index) in headerLinks" :key="index">
            <router-link :to=link.url>
              {{ link.text }}
            </router-link>
          </v-tab>
        </v-tabs> 
      </template>
    </v-app-bar>
    
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
const headerLinks = ref([
  { url: '/', text: 'Conversas' },
  { url: '/status', text: 'Status' },
  { url: '/calls', text: 'Chamadas' }
]);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
