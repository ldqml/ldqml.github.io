import http from './request'

export const getDate =() =>{
    return http.get('/home/getDate')
}

export const getUser =(params) =>{
    return http.get('/user/getUser',params)
}
