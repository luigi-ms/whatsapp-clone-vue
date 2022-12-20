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
      <v-col cols="6">
        <h3>{{ contactName }}</h3>
        <span class="subHeader">{{ bio }}</span>
      </v-col>
    </v-row>
  </v-list-item>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  contactName: String,
  bio: String
});
</script>
