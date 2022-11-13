export default{
    state:{
        isCollapse:false,
        tabsList:[
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
              }
        ]
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse= !state.isCollapse
        }
    }
}