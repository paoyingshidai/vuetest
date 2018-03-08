<template>
  <div>
    <span>this is nav page</span>
    <router-link to="/element/nav/leftnav">To Left Nav</router-link>
    <br>
    <el-card class="box-card">
      <br>
      <router-view></router-view>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "nav"

    }
</script>
<style scoped>
  el-card {
    width: 85%;
  }
</style>
