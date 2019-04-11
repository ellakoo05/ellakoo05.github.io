<template>
  <div id="tasklist">
    <div id="taskListRight">
      <div class="displayItems" v-if="isTasksNotEmpty" v-for="item in newTasks" v-bind:key="item">
        <div class="listItemsForUsers">
          {{item.tasks}}
          <br>
          <div class="userList" v-for="user in item.assignedUsers" v-bind:key="user">
            <div>{{user}}</div>
          </div>
          <button class="taskSignup" @click="selectTask(item.id)">SELECT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito");
@import "./style.css";
</style>
<script>
export default {
  name: "eventDetails",
  data() {
    return {
      newTasks: "",
      isTasksNotEmpty: false
    };
  },
  methods: {
    selectTask: async function(id) {
      var selectTask = new FormData();
      selectTask.append("taskID", id);
      selectTask.append("userID", sessionStorage.getItem("userID"));
      selectTask.append("eventCode", sessionStorage.getItem("eventCode"));

      var resp = await fetch(
        "https://gettogetherbcit.herokuapp.com/mysql/assignTasks.php",
        {
          method: "POST",
          body: selectTask
        }
      );

      var json = await resp.json();
      if (json) {
        alert("thank you for your input!");
      }
    }
  },
  beforeCreate: async function() {
    var displayTasks = new FormData();
    displayTasks.append("eventCode", sessionStorage.getItem("eventCode"));

    var resp = await fetch(
      "https://gettogetherbcit.herokuapp.com/mysql/getJoinedTasks.php",
      {
        method: "POST",
        body: displayTasks
      }
    );

    var json = await resp.json();

    if (json.length > 0) {
      this.isTasksNotEmpty = true;
      debugger;
      var tasksMap = new Map();
      for (var i = 0; i < json.length; i++) {
        tasksMap.set(json[i].id, json[i]);
      }

      this.newTasks = tasksMap;

      var assignedUsers = new FormData();
      assignedUsers.append("eventCode", sessionStorage.getItem("eventCode"));

      var resp2 = await fetch(
        "https://gettogetherbcit.herokuapp.com/mysql/getAssignedUsers.php",
        {
          method: "POST",
          body: assignedUsers
        }
      );

      var json2 = await resp2.json();
      var usersArray = [];
      for (var i = 0; i < json2.length; i++) {
        if (tasksMap.has(json2[i].taskID)) {
          var taskObject = tasksMap.get(json2[i].taskID);
          if (taskObject.assignedUsers !== undefined) {
            usersArray = taskObject.assignedUsers;
          } else {
            usersArray = [];
          }
          usersArray.push(json2[i].username);
          taskObject.assignedUsers = usersArray;
        }
        tasksMap.set(json2[i].taskID, taskObject);
      }

      var tasksJSONArray = [];
      var temp = tasksMap.entries();

      for (var task of temp) {
        tasksJSONArray.push(task[1]);
      }
      this.newTasks = tasksJSONArray;
    }
  }
};
</script>
