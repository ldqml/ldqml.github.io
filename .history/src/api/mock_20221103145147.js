import Mock from 'mockjs'

Mock.mock('/api/home/getDate',function(){
    console.log('拦截到了')
    return []
})