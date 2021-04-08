<template>
  <div id="MessageTitle">
    <p class="subtitle is-6 spaced">{{ text }}</p>
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
