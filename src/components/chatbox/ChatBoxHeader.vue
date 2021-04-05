<template>
  <div id="ChatBoxHeader">
    <div class="card-header" role="button" aria-controls="contentIdForA11y3">
      <div class="chat-header">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-6">Chat Box</p>
            <p class="subtitle is-7">10.4k Onliine</p>
          </div>
        </div>
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
