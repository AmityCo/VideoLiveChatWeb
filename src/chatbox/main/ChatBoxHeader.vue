<template>
  <div id="ChatBoxHeader" :style="css_vars">
    <div class="card-header">
      <div class="chat-header">
        <p class="title is-6 fontstyle">Live Chat</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatBoxHeader",
  props: ["collapsed"],
  inject: ["section_color", "font_color"],
  computed: {
    css_vars() {
      return {
        "--color": this.section_color,
        "--font": this.font_color,
      };
    },
  },
};
</script>

<style scoped>
#ChatBoxHeader {
  border-bottom: 1px #e0e0e0 solid;
  background-color: var(--color);
}

.fontstyle {
  color: var(--font);
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
