<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <span>使用button实现路由跳转</span><br>
    <span>
      <el-button @click="toRouter">toRouter</el-button>
      <el-button @click="toElemnets">toElements</el-button>
    </span>
    <el-card class="box-card">
      <router-view></router-view>
    </el-card>

  </div>
</template>

<script>
import ElButton from "element-ui/packages/button/src/button";

export default {
  components: {ElButton},
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toRouter: function () {
      this.$router.push('/router/1');
    },
    toElemnets: function () {
      this.$router.push('/element/nav')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.el-row {
  margin-bottom: 20px;
}
:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>
