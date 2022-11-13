<template>
  <div class="tabs">
    <el-tag
      v-for="item in tags"
      :key="item.path"
      :type="item.type"
      effect="dark"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'ComTag',
    data() {
        return {
            
        }
    },
    computed:{
        ...mapState({
            tags:state=>state.tab.tabList
        })
    }
}
</script>
