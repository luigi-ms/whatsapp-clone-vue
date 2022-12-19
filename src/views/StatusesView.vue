<template>
  <v-list tag="ul">
    <status-preview lastStatus="16:20" />
    <v-list-item tag="li">
      <h3>Atualizações recentes</h3>
    </v-list-item>
    <status-preview 
      v-for="(newStatus, i) in newStatuses"
      :key="i"
      :contactName=newStatus.name
      :lastStatus=newStatus.time />
    <v-list-item tag="li">
      <h3>Atualizações vistas</h3>
    </v-list-item>
    <status-preview
      v-for="(seen, i) in seenStatus"
      :key="i"
      :contactName=seen.name
      :lastStatus=seen.time />
    <v-list-item id="silencedStatus" tag="li">
      <h3>Atualizações silenciadas</h3>
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(silenced, index) in silencedStatus"
          :key="index"
          title=" ">
          <v-expansion-panel-text>
            <status-preview
            :contactName=silenced.name
            :lastStatus=silenced.time />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-list-item>
    <v-list-item tag="li">
      <v-divider></v-divider>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { ref } from 'vue';
import StatusPreview from '../components/StatusPreview.vue';

const seenStatus = ref([
  { name: 'Fulano', time: '12:00' },
  { name: 'Sicrano', time: '11:00' },
]);

const newStatuses = ref([
  { name: 'Beltrano', time: '09:00' },
]);

const silencedStatus = ref([
  { name: 'Luigi', time: '13:00' },
]);
</script>

<style scoped>
li { padding: 0; }

h3 { 
  font-size: 0.8rem; 
  color: #546E7A;
}

#silencedStatus {
  display: flex;
  justify-content: space-between;
}

#silencedStatus > h3 { 
display: inline; 
border: 1px solid black;
}
</style>
