<template>
  <div id="MessageReaction">
    <b-taglist v-if="messageReactions.length > 0" attached>
      <b-tag
        rounded
        v-for="reaction in messageReactions"
        :key="reaction"
        type="is-light"
      >
        <b-icon :icon="reaction" size="is-small" />
      </b-tag>
    </b-taglist>
  </div>
</template>

<script>
export default {
    name: "MessageReaction",
    props:["messageReactions"],
};
</script>

<style>
</style>