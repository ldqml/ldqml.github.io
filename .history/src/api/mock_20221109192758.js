import Mock from 'mockjs'
import homeApi from './mockServe/home'
import userApi from './mockServe/user'

Mock.mock('/api/home/getDate',homeApi.getStateDate)
Mock.mock('/api/user/add','post',userApi.createUser)
Mock.mock('/api/user/edit','post',userApi.updateUser)
Mock.mock('/api/user/del','post',userApi.deleteUser)
Mock.mock('/api/user/getUser','post',userApi.getUserList)