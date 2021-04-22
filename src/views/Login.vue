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
            <b-button
              :disabled="!username || !password"
              @click.prevent="onsubmit"
              >Login</b-button
            >
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
    async onsubmit() {
      await this.$store.dispatch("login", this.username);
      this.$router.push("/");
    },
  },
};
</script>
