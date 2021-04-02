<template>
  <div class="home">
    <div class="columns is-gapless">
      <div class="column is-8">
        <video-player />
      </div>
      <div class="column is-4">
        <chat-box />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ChatBox from "@/components/chatbox/ChatBox.vue";
import VideoPlayer from "@/components/video/VideoPlayer.vue";

export default {
  name: "Home",
  components: {
    ChatBox,
    VideoPlayer,
  },
  data() {
    return {};
  },
};
</script>
