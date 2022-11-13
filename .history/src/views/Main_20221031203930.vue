<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <com-aside></com-aside>
      </el-aside>
      <el-container>
        <el-header>
          <com-header></com-header>
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
import ComHeader from '../components/ComHeader.vue'
export default {
  data() {
    return {}
  },
  components:{
    ComAside,
    ComHeader
  }
};
</script>

<style scoped>
.el-header{
  padding: 0;
}
</style>
