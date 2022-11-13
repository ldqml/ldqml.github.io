import Mock from 'mockjs'
import homeApi from './mockServe/home'
import user from './mockServe/user'

Mock.mock('/api/home/getDate',homeApi.getStateDate)
Mock.mock('/api/home/add','post',user.createUser)
Mock.mock('/api/home/edit','post',user.updateUser)
Mock.mock('/api/home/del','post',user.deleteUser)
Mock.mock('/api/user/getUser','post',user.getUserList)