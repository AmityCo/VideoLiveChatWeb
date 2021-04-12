<template>
  <b-dropdown
    id="MessageOptions"
    :scrollable="true"
    :max-height="60"
    aria-role="list"
    position="is-bottom-left"
  >
    <template #trigger>
      <b-button type="is-light" icon-left="dots-vertical" />
    </template>

    <b-dropdown-item aria-role="listitem">
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
export default {
  name: "MessageOptions",
};
</script>

<style scoped>

.media {
    border-top: none;
    padding-top: 0;
}
</style>>
