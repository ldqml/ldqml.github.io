import Mock from 'mockjs'
import homeApi from './mockServe/home'
import user from './mockServe/user'

Mock.mock('/api/home/getDate',homeApi.getStateDate)
Mock.mock('/api/home/add',user.createUser)