<template>
  <div id="start_page">
    <div class="wrapper d-flex w-100 h-100 p-3 mx-auto flex-column">
    <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <div class="row">
        <div class="col-lg-12 m-auto logotitle">
          <img id="logo" src="../assets/title.png" alt="title">
          <img id="logo_wave" src="../assets/undertitle4x.png" alt="titlewave">
        </div>
        <div class="col-lg-10 m-auto">
          <router-link to="/loginpage" tag="button" class="start-btn">Get Started</router-link>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 start-details">
            <h3
              class="start-details"
            >Plan your events with an app you, your family, and your friends can count on</h3>
            <img class="col-lg-4" src="../assets/svg/customer-review.png" alt="star">
          </div>
          <div class="col-lg-4 start-details">
            <h3
              class="start-details"
            >Invite your family and friends by sending out the special event code</h3>
            <img class="col-lg-4" src="../assets/svg/magic-wand.png" alt="magic">
          </div>
          <div class="col-lg-4 start-details">
            <h3
              class="start-details"
            >Assign party members with tasks and watch the party plan itself</h3>
            <img class="col-lg-4" src="../assets/svg/list.png" alt="list">
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12" id="footer">GetTogether &copy; 2019</div>
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
  name: "login"
};
</script>