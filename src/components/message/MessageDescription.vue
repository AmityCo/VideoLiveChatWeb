<template>
  <div id="MessageDescription">
    <p class="title is-7"> {{ text }} </p>
  </div>
</template>

<script>
export default {
  name: "MessageDescription",
  props: ["text"],
};
</script>

<style>
</style>