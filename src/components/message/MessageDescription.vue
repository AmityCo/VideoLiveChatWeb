<template>
  <div id="MessageDescription">
    <b-tooltip
      type="is-light"
      :triggers="['click']"
      :auto-close="['outside', 'escape']"
    >
      <template v-slot:content>
        <b-icon icon="heart" type="is-danger" />
        <span style="padding: 0.4rem" />
        <b-icon icon="thumb-up" type="is-info" />
        <span style="padding: 0.4rem" />
        <b-icon icon="thumb-down" type="is-warning" />
        <span style="padding: 0.4rem" />
        <b-icon icon="emoticon-cool" />
      </template>
      <b-button :label="message.data.text" type="is-light" >
            <p class="title is-7">{{ text }}</p>

      <b-button/>
    </b-tooltip>
  </div>
</template>

<script>
export default {
  name: "MessageDescription",
  props: ["text"],
};
</script>

<style></style>
