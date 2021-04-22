<template>
  <div class="card">
    <div class="card-content transparent-bg">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              class="is-rounded"
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content has-text-left">
          <p class="title is-5 no-spaced">Video Title</p>
          <p class="subtitle is-6 is-hidden-touch">
            <b-icon icon="eye" size="is-small"> </b-icon> 34,820 watching now |
            Started streaming on Feb 23, 202
          </p>
          <p class="subtitle is-6 is-hidden-desktop">
            <b-icon icon="eye" size="is-small"> </b-icon> 34k watching
          </p>
        </div>
        <div class="block">
          <b-icon class="spaced" icon="share-variant" />
          <b-icon icon="dots-horizontal" />
        </div>
      </div>
      <hr />
      <p class="trancaded has-text-left">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 0;
  border-radius: 0.25rem;
}
.card-content {
  padding: 0.5rem 1.5rem 1rem 1rem;
}
.spaced {
  padding: 0 1.5rem;
}

.subtitle {
  margin-bottom: 0.5rem;
}
@media (max-width: 1023px) {
  .no-spaced {
    margin-bottom: 0.5rem;
  }
  .trancaded {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
