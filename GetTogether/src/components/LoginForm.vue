<template>
  <div id="login">
    <div class="container">
      <div class="row">
        <div id="LeftSide" class="col-lg-6"></div>
        <div id="RightSide" class="col-lg-6">
          <div class="signupBox">
            <h2>login</h2>
            <hr style="width: 300px;">
            <div class="signupForm">
              <input
                type="text"
                name="username"
                class="inputs"
                placeholder="username"
                v-model="username"
                required
                autofocus
              >
              <input
                type="password"
                name="password"
                class="inputs"
                placeholder="password"
                v-model="password"
              >
              <button @click="LogIn" class="partyButton">let's party!</button>
              <router-link to="/signuppage" tag="button" class="signupButton">sign up</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito");
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
@import "./style.css";
</style>

<script>
export default {
  name: "login",
  data() {
    return {
      userID: this.store.userID,
      username: "",
      password: "",
    };
  },
  methods: {
    LogIn: async function() {
      var userForm = new FormData();
      userForm.append("username", this.username);
      userForm.append("password", this.password);
      var resp = await fetch(
        "https://gettogetherbcit.herokuapp.com/mysql/selectUser.php",
        {
          method: "POST",
          body: userForm
        }
      );
      var json = await resp.json();
      if (json.status) {
        this.store.userID = json.id;
        this.store.username = json.username;
        this.store.email = json.email;

        if (typeof Storage !== "undefined") {
          sessionStorage.setItem("username", json.username);
          sessionStorage.setItem("userID", json.id);
          sessionStorage.setItem("email", json.email);
          this.$router.push("mainpage");
        }
      } else {
        alert("Please Check your Information.");
      }
    }
  }
};
</script>