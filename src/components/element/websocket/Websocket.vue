<template>
<div>
  <span>this is websocket !</span>
  <br>
  <span>
    <el-input v-model="send_message" placeholder="请输入内容"></el-input>
    <el-button @click="doSend(send_message)">发送消息</el-button>
  </span>
  <br>
  <span>{{ message }}</span>
</div>
</template>

<script>
    import ElInput from "element-ui/packages/input/src/input";
    import ElButton from "element-ui/packages/button/src/button";

    export default {
      components: {
        ElButton,
        ElInput},
      name: "websocket",
        data: function () {
          return {
            wsUrl: 'ws://localhost:8900/webSocket',
            web_socket: {},
            message: "",
            send_message: ""
          }
        },
        methods: {
          init_socket: function () {
            this.web_socket = new WebSocket(this.wsUrl);
            this.web_socket.onopen = this.onOpen;

            this.web_socket.onclose  = this.onClose;
            this.web_socket.onmessage  = this.onMessage;
            this.web_socket.onerror  = this.onError;
          },
          onOpen (evt) {
              console.log("open");
              this.doSend("WebSocket rocks");
          },
          onClose (evt) {
              console.log("close")
          },
          onMessage (evt) {
              console.log("getMessage = " + evt.data)
              this.message = evt.data;
          },
          onError (evt) {
              console.log(JSON.stringify(evt))
          },
          doSend (message) {
            this.web_socket.send(message)
          }
        },
        created: function () {
            this.init_socket();
        },
        beforeDestroy: function () {
          this.web_socket.close()
        }
    }
</script>

<style scoped>

</style>
