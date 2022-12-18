<template>
  <v-app>
    <v-app-bar
      app
      color="brown lighten-1"
      dark
      elevate-on-scroll>
      <v-toolbar-title>WhatsApp</v-toolbar-title>
 
      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn
            theme="dark"
            icon="mdi-dots-vertical"
            v-bind="props">
          </v-btn>
        </template>

        <v-list>
          <v-list-item 
            v-for="(mLink, index) in menuLinks"
            :key="index">
            <router-link :to=mLink.url>
              <span>{{ mLink.text }}</span>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
      
      <template v-slot:extension>
        <v-tabs
          grow
          background-color="brown lighten-1"
          dark>
          <v-tab 
            v-for="(hLink, index) in headerLinks" 
            :key="index">
            <router-link class="headers" :to=hLink.url>
              {{ hLink.text }}
            </router-link>
          </v-tab>
        </v-tabs> 
      </template>
    </v-app-bar>
    
    <v-main>
      <router-view/>
    </v-main>

    <v-footer id="floatingBtn">
      <v-btn fab icon>
        <router-link :to=currentRoute.url>
          <v-icon :icon=currentRoute.icon />
        </router-link>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const headerLinks = ref([
  { url: '/', text: 'Conversas' },
  { url: '/status', text: 'Status' },
  { url: '/calls', text: 'Chamadas' }
]);

const menuLinks = ref([
  { url: '/', text: 'Novo grupo' },
  { url: '/', text: 'Nova transmissão' },
  { url: '/', text: 'Mensagens favoritas' },
  { url: '/', text: 'Configurações' }
]);

const floatingLinks = ref([
  { 
    url: '/contacts', 
    name: 'messages', 
    icon: 'mdi-message-text' 
  },
  { url: '/', name: 'statuses', icon: 'mdi-camera' },
  { url: '/', name: 'calls', icon: 'mdi-message-text' }
]);

let currentRoute = ref({ 
  url: floatingLinks.value[0].url, 
  icon: floatingLinks.value[0].icon
});

let router = useRouter();

watch(() => router.name, rname => {
  floatingLinks.value.forEach(fl => {
    if(fl.name === rname){
      currentRoute.value = fl;
    }
  });
});
</script>

<style scoped>
a { color: black; }

a.headers { color: white; }

#floatingBtn {
  padding: 2vw;
  display: flex; 
  justify-content: flex-end;
}
</style>
