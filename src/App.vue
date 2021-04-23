<template>
  <div id="app" class="section">
    <h1 class="title">AMITY LIVE CHAT DEMO</h1>
    <router-view />
  </div>
</template>

<style>
html,
body {
  background-color: #f9f9f9 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.card {
  background-color: transparent !important;
}
.card-header {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.message-body {
  border-color: transparent !important;
  border-style: none !important;
  padding: 0.1rem 0 !important;
}
.media-content {
  overflow-x: unset !important;
}
.transparent-bg {
  background-color: transparent !important;
}

hr {
  margin: 0.5rem 0 !important;
}

@media (max-width: 767px) {
  /* <== You can change this break point as per your  needs */
  .reverse-columns {
    flex-direction: column-reverse;
    display: flex;
  }
}
</style>
