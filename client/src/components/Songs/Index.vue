<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <songs-search-panel />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from "./SongsPanel";
import SongsSearchPanel from "./SongsSearchPanel";
import SongsService from "@/services/SongsService";
export default {
  data() {
    return {
      songs: null
    };
  },
  components: {
    SongsPanel,
    SongsSearchPanel
  }
};
</script>

<style scoped>

</style>
