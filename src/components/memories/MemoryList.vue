<template>
  <ion-list>
    <memory-list-item
      v-for="memory in memories"
      :key="memory.id"
      :memory="memory"
    ></memory-list-item>
  </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue'
import MemoryListItem from './MemoryListItem'

export default {
  props: {
    memories: {
      type: Array,
      required: true
    }
  },
  components: {
    IonList,
    MemoryListItem
  }
}
</script>

<style></style>
