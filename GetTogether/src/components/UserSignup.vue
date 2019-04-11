<template>
  <div id="signup">
    <div class="container">
      <div class="row">
        <div id="LeftSide" class="col-lg-6"></div>
        <div id="RightSide" class="col-lg-6">
          <div class="signupBox">
            <h2>sign up</h2>
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
              <input type="text" name="email" class="inputs" placeholder="email" v-model="email">
              <input
                type="password"
                name="password"
                class="inputs"
                placeholder="password"
                v-model="password"
              >
              <button @click="insertUser" class="signupButton">sign up</button>
              <router-link to="/loginpage" tag="button" class="backtoLogin">go back</router-link>
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
import Main from "@/components/EventForm.vue";

export default {
  name: "signup",
  components: {
    Main: Main
  },
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    backtoLogin: function() {
      this.$router.push("loginpage");
    },
    insertUser: async function() {
      var userForm = new FormData();
      userForm.append("username", this.username);
      userForm.append("email", this.email);
      userForm.append("password", this.password);
      await fetch(
        "https://gettogetherbcit.herokuapp.com/mysql/insertUser.php",
        {
          method: "POST",
          body: userForm
        }
      )
        .then(resp => {
          return resp.json;
        })
        .then(json => {
          if (json) {
            this.$router.push("loginpage");
          }
        });
      if (typeof Storage !== "undefined") {
        sessionStorage.setItem("username", this.username);
        document.getElementById("result").innerHTML = sessionStorage.getItem(
          "username"
        );
      }
    }
  }
};
</script>
