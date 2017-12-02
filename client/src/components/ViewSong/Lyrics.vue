<template>
  <Panel title="Lyrics">
    <textarea label="Tabs" readonly v-model="song.lyrics"></textarea>
  </Panel>
</template>

<script>
export default {
  props: ["song"]
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
