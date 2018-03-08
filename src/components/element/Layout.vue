<template>
  <div>
    <span>获取helloworld 组件传过来的值：{{$route.params.id}}</span>
    <br>
    <a href="www.baidu.com">{{ message }} and {{ message2 }}</a>
    <br>
    <el-button @click="test_method">test_method</el-button>
    <br>
    <el-button @click="test_service">test_service</el-button>

    <el-form>
      <el-input v-model="student.id" placeholder="id"></el-input>
      <el-input v-model="student.name" placeholder="姓名"></el-input>
      <el-input v-model="student.age" placeholder="年龄"></el-input>
      <el-input v-model="student.sex" placeholder="性别"></el-input>
      <el-button @click="test_object">打印属性</el-button>
    </el-form>
    <br>
    <el-button @click="getStudent">获取学生列表</el-button>
    <el-table :data="students" border style="width: 100%; text-align: left">
      <el-table-column prop="studId" label="编号" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄" width="180"></el-table-column>
      <el-table-column prop="sex" label="性别" width="180"></el-table-column>
    </el-table>
    <ul id="example-1">
      <li> 学生列表 </li>
      <li v-for="item in students">{{ item.name }}</li>
    </ul>
  </div>
</template>


<script>
    import ElButton from "element-ui/packages/button/src/button";
    import testService from "../../service/service_test";
    import Student from "../../object/student";
    import ElForm from "element-ui/packages/form/src/form";
    import ElInput from "element-ui/packages/input/src/input";
    // import ElTable from "element-ui/packages/table/src/table";
    import {getStudents} from "../../service/api"

    export default {
      components: {
        // ElTable,
        ElInput,
        ElForm,
        ElButton},
      name: "Layout",
        data: function () {
          return {
            message: '去百度',
            message2: '上班',
            student: Student,
            students: []
          }
        },
        methods: {
          test_method: function () {
            var id = this.$route.params.id;
            alert("getId : " + id);
          },
          test_service: function () {
            testService.testService();
          },
          test_object: function () {
            console.debug("test_object")
            alert(JSON.stringify(this.student))
          },
          getStudent: function () {
            // getStudents().getStudent().then((data) => {
              this.$ajax('/student/findAll').then((data) => {
              console.log("成功" + JSON.stringify(data.data))
              this.students = data.data
            }).catch(err => {
                console.log(JSON.stringify(err))
            })
          }
        },
        created: function () {
          this.getStudent();
        }
    }
</script>
<style scoped>

</style>
