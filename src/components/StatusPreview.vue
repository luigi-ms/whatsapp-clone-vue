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
        <h4>{{ contactName }}</h4>
        <span>{{ lastStatus }}</span>
      </v-col>
    </v-row>
  </v-list-item>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  contactName: {
    type: String,
    default: "Meu Status"
  },
  lastStatus: {
    type: String,
    default: "16:20"
  }
});
</script>

<style scoped>
.mainInfo {
  display: flex;
  flex-direction: column;
}

.additionalInfo { padding-right: 8vw; }

.mainInfo, .additionalInfo { font-size: 0.8rem; }

.mainInfo h4 { font-size: 0.9rem; }
</style>
