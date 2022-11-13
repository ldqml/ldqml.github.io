import Mock from 'mockjs'

Mock.mock('http://localhost:8080/api/home/getDate',function(){
    console.log('拦截到了')
})