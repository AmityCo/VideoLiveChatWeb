<template>
  <div class="home">
    <div class="columns">
      <div class="column is-8">
        <video-player />
      </div>
      <div class="column is-4">
        <chat-box :apiKey="apiKey" :userId="user" :channelId="channelId" />
      </div>
    </div>
  </div>
</template>

<script>
import { CHANNEL_NAME } from "@/config";

import ChatBox from "@/chatbox/ChatBox.vue";
import VideoPlayer from "@/components/video/VideoPlayer.vue";

export default {
  name: "Home",
  components: {
    ChatBox,
    VideoPlayer,
  },
  computed: {
    user: ({ $route }) => $route.params.userId,

    apiKey: () => "b0ece00b388ff9371d668b1a550e148bd55cddeae83d6e2d",
    channelId: () => CHANNEL_NAME,
  },
};
</script>
