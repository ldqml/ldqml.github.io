import http from './request'

export const getDate =() =>{
    return http.get('/home/getDate')
}

export const getUser =(data) =>{
    return http.get('/user/getUser',data)
}

export const addUser =(data) =>{
    return http.post('/user/add',data)
}

export const editUser =(data) =>{
    return http.post('/user/edit',data)
}

export const delUser =(data) =>{
    return http.post('/user/del',data)
}