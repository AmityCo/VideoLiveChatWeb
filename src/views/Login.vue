<template>
  <div id="Login">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="card">
          <div class="card-content">
            <div class="content has-text-left">
              <b-field label="Username">
                <b-input v-model="username" />
              </b-field>
              <b-field label="Password">
                <b-input
                  type="password"
                  v-model="password"
                  password-reveal
                  @keyup.native.enter="onsubmit"
                />
              </b-field>
            </div>
            <b-button type="is-primary" expanded @click="onsubmit">
              <b> Sign In</b>
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: "",
  }),

  methods: {
    onsubmit() {
      this.$router.push({ name: "home", params: { userId: this.username } });
    },
  },
};
</script>
