<template>
  <div id="addtask">
    <div id="tasks">
      <div id="myDIV" class="header">
        <h3>Add Tasks</h3>
        <input type="text" id="myInput" v-model="tasks" placeholder="New Task...">
        <span @click="InsertTask" class="addBtn">Add</span>
      </div>

      <ul id="myUL"></ul>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito");
@import "./style.css";
</style>

<script>
import TaskList from "@/components/TaskList.vue";
export default {
  name: "AddTask",
  components: {
    TaskList: TaskList
  },
  data() {
    return {
      tasks: "",
      newTasks: ""
    };
  },
  methods: {
    deleteTask: async function(event) {
      var parentDiv = event.target.parentElement;
      event.target.style.display = "none";
      parentDiv.style.display = "none";
      var deleteForm = new FormData();
      deleteForm.append("taskID", event.target.parentElement.id);
      var resp = await fetch(
        "https://gettogetherbcit.herokuapp.com/mysql/deleteTasks.php",
        {
          method: "POST",
          body: deleteForm
        }
      );
    },
    editTask: async function(event) {
      var editTask = new FormData();
      editTask.append(
        "tasks",
        event.target.parentElement.querySelector(".updateInput").value
      );
      editTask.append("taskID", event.target.parentElement.id);
      var resp = await fetch(
        "https://gettogetherbcit.herokuapp.com/mysql/updateTasks.php",
        {
          method: "POST",
          body: editTask
        }
      );

      var result = await resp.json();

      if (!result) {
        alert("update failed. try again");
      } else {
        var task = event.target.parentElement;
        var taskText = task.querySelector(".taskText");

        var updateButton = event.target;
        updateButton.onclick = e => {
          this.changeEditInput(e);
        };

        updateButton.style.backgroundImage =
          "url('https://image.flaticon.com/icons/svg/1159/1159633.svg')";

        taskText.innerHTML = event.target.parentElement.querySelector(
          ".updateInput"
        ).value;

        var inputBox = task.querySelector(".updateInput");
        inputBox.style.display = "none";
        inputBox.value = "";
      }
    },
    createTaskElement: function(taskID, inputValue, assignedUsers) {
      var i;
      var li = document.createElement("div");
      var taskText = document.createElement("div");
      taskText.className = "taskText";
      taskText.innerHTML = inputValue;
      li.id = taskID;
      li.className = "listItems";
      li.appendChild(taskText);
      if (inputValue === "") {
        alert("You have to write something!");
      } else {
        document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInput").value = "";

      var updateInput = document.createElement("input");
      updateInput.className = "updateInput";
      updateInput.style.display = "none";
      li.appendChild(updateInput);

      // create 'x' button
      var deleteButton = document.createElement("span");
      deleteButton.className = "deleteButton";
      li.appendChild(deleteButton);

      //create update button
      var updateButton = document.createElement("span");
      updateButton.className = "updateButton";
      li.appendChild(updateButton);

      updateButton.onclick = e => {
        this.changeEditInput(e);
      };

      var deleteButton = document.getElementsByClassName("deleteButton");

      for (i = 0; i < deleteButton.length; i++) {
        deleteButton[i].onclick = e => {
          this.deleteTask(e);
        };
      }

      if (assignedUsers !== undefined) {
        for (i = 0; i < assignedUsers.length; i++) {
          var assignedUserList = document.createElement("div");
          assignedUserList.className = "userListForAdmin";
          assignedUserList.innerHTML = assignedUsers[i];
          li.appendChild(assignedUserList);
        }
      }
    },
    changeEditInput: async function(event) {
      var task = event.target.parentElement;
      var taskText = task.querySelector(".taskText");

      var updateButton = event.target;
      updateButton.onclick = e => {
        this.editTask(e);
      };

      updateButton.style.backgroundImage =
        "url('https://image.flaticon.com/icons/svg/128/128384.svg')";

      var inputBox = task.querySelector(".updateInput");
      inputBox.style.display = "block";
      inputBox.style.margin = "auto";
      inputBox.value = taskText.innerHTML;

      taskText.innerHTML = "";
    },
    InsertTask: async function() {
      var taskForm = new FormData();
      var inputValue = document.getElementById("myInput").value;
      taskForm.append("tasks", this.tasks);
      taskForm.append("eventCode", sessionStorage.getItem("eventCode"));

      if (inputValue === "") {
        alert("You have to write something!");
      } else {
        var resp = await fetch(
          "https://gettogetherbcit.herokuapp.com/mysql/insertTasks.php",
          {
            method: "POST",
            body: taskForm
          }
        );
        var json = await resp.json();

        if (json) {
          this.createTaskElement(json, inputValue, undefined);
        }
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
        this.createTaskElement(
          task[1].id,
          task[1].tasks,
          task[1].assignedUsers
        );
      }
    }
  }
};
</script>
