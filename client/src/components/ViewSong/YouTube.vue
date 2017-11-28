<template>
  <panel title="YouTube Videos">
    <youtube :video-id="youtubeId" :player-width="600" :player-height="340"></youtube>
  </panel>
</template>

<script>
import Panel from "@/components/Panel";

export default {
  props: ["youtubeId"],
  components: {
    Panel
  }
};
</script>

<style scoped>

</style>
