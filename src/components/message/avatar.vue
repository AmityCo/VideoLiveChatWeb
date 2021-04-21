<template>
  <div id="Avatar">
    <div v-if="show">
      <img
        class="is-rounded"
        src="https://bulma.io/images/placeholders/96x96.png"
        alt="Placeholder image"
      />
    </div>
    <div v-else>
      <b-icon icon="account-circle" style="width: 32px; height: 32px" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: ["image", "show"],
};
</script>

<style></style>
