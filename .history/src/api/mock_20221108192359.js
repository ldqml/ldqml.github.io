import Mock from 'mockjs'
import homeApi from './mockServe/home'
import user from './mockServe/user'

Mock.mock('/api/home/getDate',homeApi.getStateDate)
Mock.mock('/api/home/add',user.createUser)
Mock.mock('/api/home/edit',user.updateUser)
Mock.mock('/api/home/del',user.deleteUser)
Mock.mock('/api/home/getUser',user.getUserList)