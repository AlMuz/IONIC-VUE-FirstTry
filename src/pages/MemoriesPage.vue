<template>
  <base-layout page-title="All memories">
    <memory-list :memories="memories"></memory-list>
  </base-layout>
</template>

<script>
import MemoryList from '../components/memories/MemoryList'

export default {
  components: {
    MemoryList
  },
  computed: {
    memories() {
      return this.$store.getters.memories
    }
  }
}
</script>

<style></style>
