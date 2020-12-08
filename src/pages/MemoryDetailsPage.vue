<template>
  <base-layout
    :page-title="memoryData ? memoryData.title : 'Loading....'"
    page-default-back="/memories"
  >
    <memory-overview
      :title="memoryData.title"
      :description="memoryData.description"
      :image="memoryData.image"
    ></memory-overview>
  </base-layout>
</template>
<script>
import MemoryOverview from '../components/memories/MemoryOverview'

export default {
  components: {
    MemoryOverview
  },
  data() {
    return {
      memoryId: this.$route.params.id
    }
  },
  computed: {
    memoryData() {
      return this.$store.getters.memory(this.memoryId)
    }
  }
}
</script>

<style></style>
