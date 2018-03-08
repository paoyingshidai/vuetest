<template>
  <div>
    <span> hello man </span>
    <el-table :data="users" border style="width: 80%">
      <el-table-column fixed prop="userId" label="Id" width="150"></el-table-column>
      <el-table-column prop="username" label="姓名" width="150"></el-table-column>
      <el-table-column prop="province" label="省份" width="150"></el-table-column>
      <el-table-column prop="city" label="市区" width="150"></el-table-column>
      <el-table-column prop="address" label="地址" width="150"></el-table-column>
      <el-table-column prop="stamp" label="邮编" width="150"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name: "table",
        data: function () {
          return {
            users: []
          }
        },
        methods: {
          handleClick(row) {
            console.log(row);
          },
          getUsers: function () {
            this.$ajax('/user/getAll').then((data) => {
              console.log("成功" + JSON.stringify(data.data))
              this.users = data.data
            }).catch(err => {
              console.log(JSON.stringify(err))
            })
          }
        },
      created: function () {
        this.getUsers();
      }
    }
</script>

<style scoped>

</style>
