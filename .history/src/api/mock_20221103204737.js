import Mock from 'mockjs'
import homeApi from './mockServe/home'

Mock.mock('/home/getDate',homeApi.getStateDate)