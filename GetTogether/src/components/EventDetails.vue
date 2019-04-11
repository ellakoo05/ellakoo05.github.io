<template>
  <div id="eventdetails_page">
    <div class="container">
      <div class="row">
        <div id="eventLeft">
          <div id="leftBox">
          <div id="eventInfo" v-for="item in event" v-bind:key="item">
            <div id="eventnameInfo">{{item.eventname}}</div>
            <div id="eventdateInfo">
              <span style="font-weight: 600">When:</span>
              {{item.eventdate}}
            </div>
            <div id="eventtimeInfo">
              <span style="font-weight: 600">Time:</span>
              {{item.eventtime}}
            </div>
            <div id="eventlocationInfo">
              <span style="font-weight: 600">Where:</span>
              {{item.eventlocation}}
            </div>
            <div v-if="isAdmin" id="eventCodeInfo">
              <span style="font-weight: 600">Event Code:</span>
              {{item.eventCode}}
            </div>
            <button class="goDashboard-btn" @click="goToDashboard">DASHBOARD</button>
            <button v-if="isUser" @click="refreshPage" class="goRefresh-btn">REFRESH</button>
            <button v-if="isAdmin" class="goEdit-btn" @click="goEdit">EDIT EVENT</button>
            <button v-if="isAdmin" class="goDelete-btn" @click="deleteEvent">DELETE EVENT</button>
          </div>

          <div class="chatBox">
            <div class="chatContain">
              <div v-for="m in allMsgs">
                
                <div 
                class="pl-3 pr-3 pb-2 pt-2 msg_container"
                v-if="m.username === username">
                  {{m.username}}: {{m.msg}}
                </div>

                <div v-else
                class="pl-3 pr-3 pb-2 pt-2 msg_container2">
                  {{m.username}}: {{m.msg}}
                </div>
                
              </div>

            </div>

            <div class="col-lg-12">
            <input
              v-model="msg"
              class="col-lg-11"
              id="type"
              type="text"
              placeholder="Type your message here and press enter..."
              @keyup.enter="sendMessage"
            >
            </div>
             </div>
                                    </div>
        </div>
        </div>

        <div id="eventRight"></div>
        <AddTask v-if="isAdmin"/>
        <TaskList v-if="isUser"/>
      </div>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito");
@import "./style.css";
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
</style>

<script>
import AddTask from "@/components/AddTask.vue";
import TaskList from "@/components/TaskList.vue";

import io from "socket.io-client";

export default {
  name: "eventDetails",
  components: {
    AddTask: AddTask,
    TaskList: TaskList
  },
  data() {
    return {
      event: "",
      eventname: "",
      eventdate: "",
      eventtime: "",
      eventlocation: "",
      display: false,
      eventCode: "",
      tasks: "",
      newTasks: "",
      isAdmin: false,
      isUser: false,
      taskID: this.store.taskID,
      socket: io("https://gettogetherserver.herokuapp.com/chat"),
      msg: "",
      allMsgs: [],
      myRoom: ""
    };
  },
  methods: {
    sendMessage: function() {
      this.username = sessionStorage.getItem("username");

      var obj = {
        username: this.username,
        msg: this.msg,
        roomName: this.myRoom
      };

      this.socket.emit("send_msg", obj);
      this.store.username = this.username;
      this.msg = "";
    },
    refreshPage: function() {
      this.$router.go();
    },
    goToDashboard: function() {
      this.$router.push("dashboard");
    },
    goEdit: function() {
      this.$router.push("editpage");
    },
    deleteEvent: async function() {
      this.$swal({
        title: "Are you sure?",
        text: "If you click yes, this event will be deleted forever.",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Delete this event",
        cancelButtonText: "No, keep it",
        confirmButtonColor: "lightcoral",
        cancelButtonColor: "lightblue",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          this.$swal(
            "Deleted",
            "You successfully deleted this event",
            "success"
          );

          this.$router.push("dashboard");

          var deleteEvent = new FormData();
          deleteEvent.append("eventCode", sessionStorage.getItem("eventCode"));
          var resp = fetch(
            "https://gettogetherbcit.herokuapp.com/mysql/deleteEvents.php",
            {
              method: "POST",
              body: deleteEvent
            }
          );
        } else {
          this.$swal("Cancelled", "Your event still exists", "info");
        }
      });
    }
  },
  beforeCreate: async function() {
    var eventForm = new FormData();
    eventForm.append("eventCode", sessionStorage.getItem("eventCode"));

    var resp = await fetch(
      "https://gettogetherbcit.herokuapp.com/mysql/selectEvent.php",
      {
        method: "POST",
        body: eventForm
      }
    );

    var json = await resp.json();
    this.event = json;

    if (json) {
      this.store.eventID = json[0].id;
      this.store.eventname = json[0].eventname;
      this.store.eventlocation = json[0].eventlocation;
      this.store.eventdate = json[0].eventdate;
      this.store.eventenddate = json[0].eventenddate;
      this.store.eventtime = json[0].eventtime;
      this.store.eventend = json[0].eventend;
      this.store.eventnote = json[0].eventnote;

      var temp = sessionStorage.getItem("userID");
      var temp2 = json[0].admin;

      if (sessionStorage.getItem("userID") === json[0].admin) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
        this.isUser = true;
      }
    }

    var displayTasks = new FormData();
    displayTasks.append("eventCode", sessionStorage.getItem("eventCode"));
    displayTasks.append("tasks", this.tasks);

    var resp = await fetch(
      "https://gettogetherbcit.herokuapp.com/mysql/getJoinedTasks.php",
      {
        method: "POST",
        body: displayTasks
      }
    );

    var json = await resp.json();
    this.newTasks = json;

    this.myRoom = sessionStorage.getItem("eventCode");

    var obj = {
      roomName: this.myRoom
    };

    this.socket.emit("join_room", obj);
  },
  mounted() {
    this.socket.on("receive_msg", data => {
      this.allMsgs.push(data);
    });
  }
};
</script>
