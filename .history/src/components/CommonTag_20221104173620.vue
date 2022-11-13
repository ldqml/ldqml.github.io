<template>
  <div class="tabs">
    <el-tag
      v-for="item in tags"
      :key="item.path"
      :closable="item.name !== 'home'"
      :type="item.type"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
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
            tags:state=>state.tab.tabsList
        })
    }
}
</script>
