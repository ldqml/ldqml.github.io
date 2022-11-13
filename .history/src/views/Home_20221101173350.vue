<template>
  <div>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div class="user">
              <img src="../images/1.jpeg" alt="" />
              <div class="userInfo">
                <p class="name">Admin</p>
                <p class="access">超级管理员</p>
              </div>
            </div>
            <div class="login-info">
              <p>上次登入时间：<span>2021-1-19</span></p>
              <p>上次登入地点：<span>武汉</span></p>
            </div>
          </el-card>
          <el-card>
            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="name" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="todayBuy" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="monthBuy" label="地址"> </el-table-column>
              <el-table-column prop="totalBuy" label="日期" width="180">
              </el-table-column>
            </el-table>
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
    return {
        tableData: [{
          todayBuy: '100',
          name: 'OPPO',
          monthBuy: '300',
          totalBuy: '800'
        }, {
          todayBuy: '100',
          name: 'ViVO',
          monthBuy: '300',
          totalBuy: '800'
        }, {
          todayBuy: '100',
          name: 'iPhnoe',
          monthBuy: '300',
          totalBuy: '800'
        }, {
          todayBuy: '100',
          name: 'HUAWEI',
          monthBuy: '300',
          totalBuy: '800'
        }]
    };
  },
};
</script>

<style lang="less" scoped>
.user {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }
  .userInfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999999;
    }
  }
}
.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;
    span {
      color: #666666;
      margin-left: 60px;
    }
  }
}
</style>
