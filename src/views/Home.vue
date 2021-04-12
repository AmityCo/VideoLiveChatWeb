<template>
  <div class="home">
    <div class="columns">
      <div class="column is-8">
        <video-player />
      </div>
      <div class="column is-4">
        <chat-box :channelId="channel" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import ChatBox from "@/components/chatbox/ChatBox.vue";
import VideoPlayer from "@/components/video/VideoPlayer.vue";

export default {
  name: "Home",
  components: {
    ChatBox,
    VideoPlayer,
  },
  data() {
    return {
      channel: "video-livechat",
    };
  },
  methods: {
    ...mapMutations(["setChannel"]),
  },
  beforeMount() {
    this.setChannel(this.channel);
  },
};
</script>
