<template>
  <base-layout
    :page-title="memoryData ? memoryData.title : 'Loading....'"
    page-default-back="/memories"
  >
    <h2>The details page</h2>
    <p v-if="memoryData">{{ memoryData.id }}</p>
  </base-layout>
</template>
<script>
export default {
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
