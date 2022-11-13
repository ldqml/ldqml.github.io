import http from './request'

export const getDate =() =>{
    return http.get('api/home/getDate')
}
