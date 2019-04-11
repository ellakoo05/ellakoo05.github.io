<template>
  <div id="chat">
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito");
@import "./style.css";
</style>

<script>
import io from "socket.io-client";

export default {
  name: "eventChat",
  data() {
    return {
      socket: io("localhost:9000"),
      msg: "",
      allMsgs: []
    };
  },
  methods: {
    sendMessage: function() {
      this.username = sessionStorage.getItem("username");

      var obj = {
        username: this.username,
        msg: this.msg
      };

      this.socket.emit("send_msg", obj);
      this.store.username = this.username;
      this.msg = "";
    },}
};
</script>
