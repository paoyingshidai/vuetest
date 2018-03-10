<template>
  <div>
    <span>
      <el-button @click="toNav">Nav</el-button>
      <el-button @click="toTable">Table</el-button>
      <el-button @click="toFileUpload">FileUpdate</el-button>
      <el-button @click="toWebSocket">WebSocket</el-button>
    </span>
    <br>
    <el-card class="box-card">
      <br>
      <router-view></router-view>
    </el-card>
  </div>
</template>

<script>
    import ElButton from "element-ui/packages/button/src/button";

    export default {
      components: {ElButton},
      name: "elementNav",
      data: function () {
        return {
          msg: 'message',
          msg2: 'messge2'
        }
      },
      methods: {
        toNav: function () {
          this.$router.push('/element/nav/leftnav')
        },
        toTable: function () {
          this.$router.push('/element/nav/table')
        },
        toFileUpload: function () {
          this.$router.push('/element/nav/fileupload')
        },
        toWebSocket: function () {
          this.$router.push('/element/nav/websocket')
        }
      }
    }
</script>
<style scoped>
  el-card {
    width: 85%;
  }
</style>
