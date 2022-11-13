<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <com-aside></com-aside>
      </el-aside>
      <el-container>
        <el-header>
          <com-header></com-header>
        </el-header>
        <common-tag></common-tag>
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
import CommonTag from '../components/CommonTag.vue'
export default {
  data() {
    return {}
  },
  components:{
    ComAside,
    ComHeader,
    CommonTag
  }
};
</script>

<style scoped>
.el-header{
  padding: 0;
}
</style>
