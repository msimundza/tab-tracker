<template>
  <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">
      <songs-bookmarks class="mb-2" />
      <recently-viewed-songs />
    </v-flex>
    <v-flex :class="{
      xs12: !isUserLoggedIn,
      xs6:isUserLoggedIn
    }" class="ml-2">
      <songs-search-panel />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from "./SongsPanel";
import SongsBookmarks from "./SongsBookmarks";
import RecentlyViewedSongs from "./RecentlyViewedSongs";
import SongsSearchPanel from "./SongsSearchPanel";
import SongsService from "@/services/SongsService";
import { mapState } from "vuex";

export default {
  data() {
    return {
      songs: null
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn"])
  },
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  }
};
</script>

<style scoped>

</style>
