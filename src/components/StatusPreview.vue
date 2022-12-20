<template>
  <v-list-item tag="li">
    <v-row align="center">
      <v-col cols="2">
        <v-avatar 
          color="secondary" 
          size="x-large">
          <v-icon 
            icon="mdi-image-off" 
            size="x-large"
            color="white" />
        </v-avatar>
      </v-col>
      <v-col cols="6" class="mainInfo">
        <h4>{{ contactName }}</h4>
        <span class="subHeader">{{ lastStatus }}</span>
      </v-col>
      <v-col 
        v-show="isMyStatus"
        cols="4" 
        class="myButton">
        <v-btn 
          elevation="0"
          icon="mdi-dots-horizontal">
        </v-btn>
      </v-col>
    </v-row>
  </v-list-item>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  contactName: {
    type: String,
    default: "Meu status"
  },
  lastStatus: {
    type: String,
    default: "16:20"
  }
});

const isMyStatus = computed(() => {
  return props.contactName === "Meu status";
});
</script>

<style scoped>
.mainInfo {
  display: flex;
  flex-direction: column;
}

.additionalInfo { padding-right: 8vw; }

.mainInfo, .additionalInfo { font-size: 0.8rem; }

.myButton {
  display: flex;
  justify-content: flex-end;
}
</style>
