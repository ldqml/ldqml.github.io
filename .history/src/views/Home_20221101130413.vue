<template>
  <div>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div class="user">
                <img src="../images/1.jpeg" alt="">
                <div class="userInfo">
                    <p class="name">Admin</p>
                    <p class="access">超级管理员</p>
                </div>
            </div>
            <div class="login-info"></div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="16"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
