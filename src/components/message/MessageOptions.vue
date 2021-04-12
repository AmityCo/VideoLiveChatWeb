<template>
  <b-dropdown
    id="MessageOptions"
    aria-role="list"
    position="is-bottom-left"
    :mobile-modal="false"
  >
    <template #trigger>
      <b-icon icon="dots-vertical" />
    </template>
    <b-dropdown-item aria-role="listitem" @click="requestFlagMessage()">
      <div class="media">
        <b-icon class="media-left" icon="flag" />
        <div class="media-content">
          <h3>Report</h3>
        </div>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { MessageFlagRepository } from "eko-sdk";

export default {
  name: "MessageOptions",
  props: ["messageModel"],
  methods: {
    requestFlagMessage: function () {
      const flagRepo = new MessageFlagRepository(this.messageModel.messageId);
      if (this.messageModel.flagCount > 0) {
        if (this.messageModel.isFlaggedByMeCache) {
          flagRepo.unflag();
          this.$buefy.snackbar.open("The message was unflagged!");
          return;
        }
      }
      flagRepo.flag();
      this.$buefy.snackbar.open("The message was flagged!");
      return;
    },
  },
};
</script>

<style>
.dropdown-menu {
  min-width: 1rem;
}

.dropdown-item {
  padding: 0.2rem 1rem !important;
}

.media {
  border-top: none;
  padding-top: 0;
}
</style>
>
