<template>
  <v-app>
    <v-app-bar
      app
      color="brown lighten-1"
      dark
      elevate-on-scroll>
      <v-btn 
        icon="mdi-arrow-left"
        to="/"
        size="large">
      </v-btn>
      <v-toolbar-title>Contatos</v-toolbar-title>
    </v-app-bar>
    
    <v-main>
      <v-list tag="ul">
        <v-list-item 
          class="extraBtn" 
          tag="li">
          <v-row align="center">
            <v-col cols="2">
              <v-avatar
                size="x-large"
                color="brown lighten-1">
                <v-icon 
                  rounded
                  size="large"
                  icon="mdi-account-multiple" />
              </v-avatar>
            </v-col>
            <v-col cols="10">
              <h3>Novo grupo</h3>
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item 
          class="extraBtn"
          tag="li">
          <v-row align="center">
            <v-col cols="2"> 
              <v-avatar
                size="x-large"
                color="brown lighten-2">
                <v-icon icon="mdi-account-plus" />
              </v-avatar>
            </v-col>
            <v-col cols="10">
              <h3>Novo contato</h3>
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item 
          color="blue-grey lighten-1"
          tag="li">
          <h3 id="contactsHeader">Contatos do WhatsApp</h3>
        </v-list-item>
        <contact-resume 
          v-for="(contact, i) in contacts"
          :key="i"
          :contactName="contact.name"
          :bio="contact.bio"
        />
      </v-list>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import ContactResume from '../components/ContactResume';

const contacts = ref([
  { name: 'Fulano', bio: "Just testing" },
  { name: 'Sicrano', bio: "anime phrase" },
  { name: 'Beltrano', bio: "Hi Im using WhatsApp" },
]);
</script>

<style scoped>
#contactsHeader { color: #546E7A; }
</style>
