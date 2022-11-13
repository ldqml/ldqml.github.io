import Mock from 'mockjs'
import homeApi from './mockServe/home'
import user from './mockServe/user'

Mock.mock('./api/home/getDate',homeApi.getStateDate)
Mock.mock('./api/user/add','post',user.createUser)
Mock.mock('./api/user/edit','post',user.updateUser)
Mock.mock('./api/user/del','post',user.deleteUser)
Mock.mock('./api/user/getUser','post',user.getUserList)