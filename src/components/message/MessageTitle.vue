<template>
  <div id="MessageTitle">
    <p class="title is-6 spaced">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "MessageTitle",
  props: ["text"],
};
</script>

<style scoped>
.spaced {
  padding-bottom: 0.25rem;
}
</style>
