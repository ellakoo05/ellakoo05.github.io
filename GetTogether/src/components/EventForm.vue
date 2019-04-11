<template>
  <div id="eventform_page">
    
    <div id="EventLeftSide">
      <div class="container eventCreate">
        <h2>Create</h2>
        <div class="row eventCol">
          <div class="col-md-7">
            <label for="basic">Basics</label>
            <input
              type="text"
              name="eventname"
              class="EventInputs"
              placeholder="Event Name"
              v-model="eventname"
            >
            <br>
            <br>
          </div>
          <div class="col-md-7">
            <input type="text" name="eventorganizer" class="EventInputs" placeholder="Organizer">
            <br>
            <br>
          </div>
          <div class="col-md-7">
            <label for="location">Location</label>
            <input
              type="text"
              name="eventlocation"
              class="EventInputs"
              placeholder="enter address or venue name"
              v-model="eventlocation"
            >
            <br>
            <br>
          </div>

          <div class="col-md-7">
            <label for="datetime">Date and Time</label>

            <div class="col-md-5">
              <input type="date" name="eventdate" v-model="eventdate" class="EventInputs" required>
            </div>

            <div class="col-md-5">
              <input
                type="time"
                name="eventtime"
                v-model="eventtime"
                class="EventInputs"
                placeholder="start time"
                required
              >
            </div>
          </div>
          <button @click="insertEvent" class="partyButton">Let's Party!</button>
        </div>
      </div>
    </div>

    <div id="EventRightSide" class="vl">
      <button class="dashboard-btn-main" @click="goToDashboard">DASHBOARD</button>
      <div class="container eventCreate">
        <h2>Join</h2>
        <div class="row eventCol">
          <div class="col-md-5">
            <label for="eventCode">Event Code</label>
            <input
              type="text"
              name="eventCode"
              class="EventInputs"
              placeholder="enter event code...(eg.876598)"
              v-model="eventCode"
            >
            <br>
            <br>
            <button @click="joinEvent" class="joinButton">Join Event</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito");
@import "./style.css";
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
</style>

<script>
export default {
  data() {
    return {
      eventname: "",
      eventdate: "",
      eventlocation: "",
      eventenddate: "",
      eventtime: "",
      eventend: "",
      page: 0,
      eventCode: "",
      userID: this.store.userID,
      username: this.store.username
    };
  },
  methods: {
    goToDashboard: function() {
      this.$router.push("dashboard");
    },
    insertEvent: async function() {
      var generatedEventCode = "";
      for (var i = 0; i < 6; i++) {
        var t = Math.round(Math.random() * 9);
        generatedEventCode += t;
      }

      sessionStorage.setItem("eventCode", generatedEventCode);
      var eventForm = new FormData();
      eventForm.append("eventname", this.eventname);
      eventForm.append("eventdate", this.eventdate);
      eventForm.append("eventlocation", this.eventlocation);
      eventForm.append("eventenddate", this.eventenddate);
      eventForm.append("eventtime", this.eventtime);
      eventForm.append("eventend", this.eventend);
      eventForm.append("eventCode", generatedEventCode);
      eventForm.append("userID", sessionStorage.getItem("userID"));
      var resp = await fetch(
        "https://gettogetherbcit.herokuapp.com/mysql/insertEvents.php",
        {
          method: "POST",
          body: eventForm
        }
      );
      var json = await resp.json();
      if (json) {
        this.eventCode = generatedEventCode;
        this.joinEvent();
        this.$router.push("eventpage");
      } else {
        alert("Create Failed. Try Again");
      }
    },
    joinEvent: async function(rn) {
      var joinForm = new FormData();
      joinForm.append("userID", sessionStorage.getItem("userID"));
      joinForm.append("eventCode", this.eventCode);

      sessionStorage.setItem("eventCode", this.eventCode);
      var resp = await fetch(
        "https://gettogetherbcit.herokuapp.com/mysql/joinEvent.php",
        {
          method: "POST",
          body: joinForm
        }
      );
      var json = await resp.json();
      if (json) {
        this.$router.push("eventpage");
      } else {
        alert("Please check again.");
      }
    }
  }
};
</script>