<template>
  <panel title="Lyrics">
    <textarea label="Tabs" readonly v-model="song.lyrics"></textarea>
  </panel>
</template>

<script>
import Panel from "@/components/Panel";

export default {
  props: ["song"],
  components: {
    Panel
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  overflow: auto;
  padding: 20px;
}
</style>
