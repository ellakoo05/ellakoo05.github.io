<template>
  <div id="editForm">
    <div id="edit"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-5 EditEvent">
          <h2>{{eventTitle}}</h2>
          <div class="col-lg-12">
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
            <input type="text" name="eventorganizer" class="EventInputs" placeholder="Organizer">
          </div>
          <br>

          <div class="col-lg-12">
            <label for="location">Location</label>
            <input
              type="text"
              name="eventlocation"
              class="EventInputs"
              placeholder="enter address or venue name"
              v-model="eventlocation"
            >
          </div>
          <br>

          <div class="col-lg-12">
            <label for="datetime">Date and Time</label>
          </div>

          <br>
          <br>

          <div class="col-lg-6">
            <input type="date" name="eventdate" v-model="eventdate" class="EventInputs" required>
          </div>

          <div class="col-lg-6">
            <input
              type="time"
              name="eventtime"
              v-model="eventtime"
              class="EventInputs"
              placeholder="start time"
              required
            >
          </div>

          <button class="edit-btn" @click="goBack">Back</button>
          <button class="edit-btn" @click="UpdateEvent">Done</button>
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
  name: "edit",
  data() {
    return {
      eventTitle: "Editing " + this.store.eventname,
      tasks: "",
      eventlocation: this.store.eventlocation,
      eventname: this.store.eventname,
      eventdate: this.store.eventdate,
      eventenddate: this.store.eventenddate,
      eventtime: this.store.eventtime,
      eventend: this.store.eventend,
      userID: this.store.userID
    };
  },
  methods: {
    goBack: function() {
      this.$router.push("eventpage");
    },
    UpdateEvent: async function() {
      this.$swal({
        title: "Are you sure?",
        text: "If you click yes, this event will be updated.",
        type: "info",
        showCancelButton: true,
        confirmButtonText: "Yes, update this event information",
        cancelButtonText: "No, keep it",
        confirmButtonColor: "lightcoral",
        cancelButtonColor: "lightblue",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          var eventForm = new FormData();
          eventForm.append("eventname", this.eventname);
          eventForm.append("eventdate", this.eventdate);
          eventForm.append("eventlocation", this.eventlocation);
          eventForm.append("eventenddate", this.eventenddate);
          eventForm.append("eventtime", this.eventtime);
          eventForm.append("eventend", this.eventend);
          eventForm.append("eventCode", sessionStorage.getItem("eventCode"));
          console.log("eventCode", sessionStorage.getItem("eventCode"));

          var resp = fetch(
            "https://gettogetherbcit.herokuapp.com/mysql/updateEvents.php",
            {
              method: "POST",
              body: eventForm
            }
          );

          this.$router.push("eventpage");

          this.$swal(
            "Updated",
            "You successfully updated this event",
            "success"
          );
        }
      });
    }
  }
};
</script>
