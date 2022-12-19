<template>
  <v-list tag="ul" density="compact">
    <message-box 
      v-for="(msg, i) in messages"
      :key="i"
      :contactName=msg.contact
      :lastMessage=msg.lastMessage />
    <v-list-item tag="li">
      <v-divider></v-divider>
    </v-list-item>
  </v-list>
</template>

<script setup>
import MessageBox from '../components/MessageBox.vue';
import { ref } from 'vue';

const messages = ref([
  { 
    contact: "Fulano", 
    lastMessage: {
      text: "Hello World",
      time: "16:20"
    },
  },
  { 
    contact: "Sicrano", 
    lastMessage: {
      text: "Whassup",
      time: "12:30"
    },
  },
  { 
    contact: "Beltrano", 
    lastMessage: {
      text: "Coé",
      time: "03:02"
    },
  }
]);
</script>

<style scoped>
li { margin-bottom: 1vh; }
</style>
