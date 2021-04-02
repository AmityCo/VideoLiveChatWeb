<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-96x96">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content has-text-left">
          <p class="title is-4">Demo Video Title</p>
          <p class="subtitle is-6"><b-icon icon="eye" size="is-small"> </b-icon> 38</p>
        </div>
        <div class="block">
          <b-icon icon="star-circle"> </b-icon>
          <b-icon class="spaced" icon="share-variant"> </b-icon>
          <b-icon icon="dots-horizontal"> </b-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  padding: 0;
  border-radius: 0.25rem;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.card-content {
  background-color: transparent;
  padding: 0.5rem 1.5rem 1rem 1rem;
}

.spaced {
    padding: 0 1.5rem;
}
</style>