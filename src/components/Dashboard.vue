<template>
  <div>
    <button v-on:click="generateToken">Generate token</button>
  </div>
</template>

<script>
import store from "../state/store";
export default {
  name: "Dashboard",
  props: {
    msg: String
  },
  methods: {
    async generateToken() {
      let token = await store.getters["auth/currentUser"].jwt(true);
      console.log("This is the token: " + token);
      console.log(
        "This is the User object: ",
        store.getters["auth/currentUser"]
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
