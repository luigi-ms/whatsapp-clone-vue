<template>
  <v-list-item tag="li">
    <v-row align="center">
      <v-col cols="2">
        <v-avatar 
          color="secondary" 
          size="x-large">
          <v-icon 
            icon="mdi-account-circle" 
            size="x-large"
            color="white" />
        </v-avatar>
      </v-col>
      <v-col cols="6" class="mainInfo">
        <h3>{{ contactName }}</h3>
        <span class="subHeader">{{ lastMessage.text }}</span>
      </v-col>
      <v-col cols="4" class="additionalInfo">
        <v-row justify="end">
          <span>{{ lastMessage.time }}</span>
        </v-row>
        <v-row justify="end">
          <v-icon 
            icon="mdi-pin" 
            color="grey" />
        </v-row>
      </v-col>
    </v-row>
  </v-list-item>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  contactName: String,
  lastMessage: Object
});
</script>

<style scoped>
.mainInfo {
  display: flex;
  flex-direction: column;
}

.additionalInfo { padding-right: 8vw; }

.mainInfo, .additionalInfo { font-size: 0.8rem; }
</style>
