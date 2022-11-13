<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <com-aside></com-aside>
      </el-aside>
      <el-container>
        <el-header>
          <header></header>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import ComAside from '../components/ComAside.vue'
import Header from '../components/Header.vue'
export default {
  data() {
    return {}
  },
  components:{
    ComAside,
    Header
  }
};
</script>
