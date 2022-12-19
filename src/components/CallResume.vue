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
        <span>
          <v-icon 
            :icon="receivedIcon"
            :color="callHappenedColor" />
          {{ time }}
        </span>
      </v-col>
      <v-col cols="4" class="additionalInfo">
        <v-row justify="end">
          <v-icon
            size="large"
            :icon="callTypeIcon" 
            color="grey" />
        </v-row>
      </v-col>
    </v-row>
  </v-list-item>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  contactName: String,
  time: String,
  callType: String,
  wasReceived: Boolean,
  hasHappened: Boolean
});

const callTypeIcon = computed(() => {
  return (props.callType === "phone")
    ? "mdi-phone"
    : "mdi-video";
});

const receivedIcon = computed(() => {
  return (props.wasReceived) 
    ? "mdi-arrow-bottom-left"
    : "mdi-arrow-top-right";
});

const callHappenedColor = computed(() => {
  return (props.hasHappened)
    ? "green"
    : "red";
});
</script>

<style scoped>
.mainInfo {
  display: flex;
  flex-direction: column;
}

.additionalInfo { padding-right: 8vw; }

.mainInfo, .additionalInfo { font-size: 0.8rem; }

.mainInfo h3 { font-size: 0.9rem; }
</style>
