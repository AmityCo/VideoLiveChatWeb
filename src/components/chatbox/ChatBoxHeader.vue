<template>
  <div id="ChatBoxHeader">
    <div class="card-header" role="button" aria-controls="contentIdForA11y3">
      <div class="chat-header">
        <p class="title is-6">Live Chat</p>
      </div>

      <a class="card-header-icon">
        <b-icon :icon="collapsed ? 'menu-down' : 'menu-up'"> </b-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatBoxHeader",
  props: ["collapsed"],
};
</script>

<style scoped>
#ChatBoxHeader {
  border-bottom: 1px #e0e0e0 solid;
  background-color: white;
}
.chat-header {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding: 0.75rem 1rem;
}
</style>
