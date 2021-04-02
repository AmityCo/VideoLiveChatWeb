<template>
  <div class="home">
    <video-player/>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoPlayer from "@/components/video/VideoPlayer.vue";

export default {
  name: "Home",
  components: {
    VideoPlayer,
  },
  data() {
    return {
    };
  },
};
</script>
