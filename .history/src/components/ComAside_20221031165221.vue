<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <el-menu-item v-for="item in noChildren" :key='item.name' :index="item.name">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :key="item.name" :index="item.name">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="subitem in item.children" :key="subitem.name" :index="subitem.name">{{subitem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuDate:[
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 's-cooperation',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 's-custom',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'lcoation',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '首页1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '首页2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed:{
    noChildren(){
        return this.menuDate.filter(item => !item.children)
    },
    hasChildren(){
        return this.menuDate.filter(item => item.children)
    }
  }
};
</script>
