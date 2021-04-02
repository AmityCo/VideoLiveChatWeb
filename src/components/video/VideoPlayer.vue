<template>
  <div>
    <video width="100%" height="100%" :controls="true" autoplay>
      <source src="@/assets//our_planet.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <video-info />
  </div>
</template>

<script>
import VideoInfo from "@/components/video/VideoInfo.vue";

export default {
  name: "VideoPlayer",
  props: ["src", "type"],
  components: {
    VideoInfo,
  },
};
</script>