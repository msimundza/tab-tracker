<template>
  <Panel title="YouTube Videos">
    <youtube :video-id="youtubeId" :player-width="600" :player-height="340"></youtube>
  </Panel>
</template>

<script>
export default {
  props: ["youtubeId"]
};
</script>

<style scoped>

</style>
