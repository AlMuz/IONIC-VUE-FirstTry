<template>
  <base-layout page-title="All memories">
    <template #actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <memory-list :memories="memories"></memory-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from '@ionic/vue'
import MemoryList from '../components/memories/MemoryList'
import { add } from 'ionicons/icons'

export default {
  components: {
    IonButton,
    IonIcon,
    MemoryList
  },
  data() {
    return {
      add
    }
  },
  computed: {
    memories() {
      return this.$store.getters.memories
    }
  }
}
</script>

<style></style>
