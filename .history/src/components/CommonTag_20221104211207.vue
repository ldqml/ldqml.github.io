<template>
  <div class="tabs">
    <el-tag
      v-for="(item,index) in tags"
      :key="item.path"
      :closable="item.name !== 'home'"
      :type="item.type"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changMenu(item)"
      @close="handleClose(item,index)"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
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
    },
    methods:{
      ...mapMutations(['closeTag']),
      changMenu(item){
        this.$router.push({name:item.name})
      },
      handleClose(item,index){
        this.closeTag(item)
        const length = this.tags.length
        if(item.name !== this.$route.name){
          return
        }
        if(index == length){
          this.$router.push({
            name:this.tags[index-1].name
          })
        }else{
          this.$router.push({
            name:this.tags[index].name
          })
        }
      }
    }
}
</script>
