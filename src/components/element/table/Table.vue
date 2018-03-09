<template>
  <div>
    <span> hello man </span>
    <el-table height="250" :data="pageResult.content" border style="width: 80%" highlight-current-row @current-change="handleCurrentChange">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="姓名">
              <span>{{ props.row.username }}</span>
            </el-form-item>
            <el-form-item label="省份">
              <span>{{ props.row.province }}</span>
            </el-form-item>
            <el-form-item label="市区">
              <span>{{ props.row.city }}</span>
            </el-form-item>
            <el-form-item label="地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="邮编">
              <span>{{ props.row.stamp }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
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

    <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageResult.number+1"
        :page-sizes="[15, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageResult.totalElements">
      </el-pagination>

    </div>
  </div>
</template>

<script>
    export default {
        name: "table",
        data: function () {
          return {
            pageResult: {
              number: 0,
              size: 15
            }
          }
        },
        methods: {
          getUsers: function (page) {
            this.$ajax('/user/findPage?page='+ page + '&size='+this.pageResult.size).then((data) => {
              this.pageResult = data.data
            }).catch(err => {
              console.log(JSON.stringify(err))
            })
          },

          handleCurrentChange: function (page) {
            this.$ajax('/user/findPage?page='+ (page-1) + '&size=' + this.pageResult.size).then((data) => {
              this.pageResult = data.data
            }).catch(err => {
              console.log(JSON.stringify(err))
            })
          },

          handleSizeChange: function (size) {
            this.$ajax('/user/findPage?page='+ (this.pageResult.page-1) + '&size=' + size).then((data) => {
              this.pageResult = data.data
            }).catch(err => {
              console.log(JSON.stringify(err))
            })
          }

        },
      created: function () {
        this.getUsers(0);
      }
    }
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
