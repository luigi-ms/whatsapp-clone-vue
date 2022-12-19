<template>
  <v-list tag="ul">
    <call-resume 
      v-for="(call, i) in calls"
      :key="i"
      :contactName=call.contact
      :time=call.time
      :callType=call.type
      :wasReceived=call.received
      :hasHappened=call.happened
    />
    <v-list-item tag="li">
      <v-divider></v-divider>
    </v-list-item>
  </v-list>
</template>

<script setup>
import CallResume from '../components/CallResume.vue';
import { ref } from 'vue';

const calls = ref([
  {
    contact: "Beltrano",
    time: "02 de fevereiro 15:30",
    type: "phone",
    received: false,
    happened: true
  },
  {
    contact: "Fulano",
    time: "25 de janeiro 19:20",
    type: "phone",
    received: true,
    happened: false
  },
  {
    contact: "Sicrano",
    time: "31 de dezembro 00:10",
    type: "video",
    received: true,
    happened: true
  },
]);
</script>

<style scoped>
li { margin-bottom: 1vh; }
</style>
