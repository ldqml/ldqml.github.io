import Mock from "mockjs";

function param2Obj(url){
    const search = url.split('?')[1]
    if(!search){
        return {}
    }
    return JSON.parse(
        '{"'+
        decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g,'","')
        .replace(/=/g,'";"') +
        '}"'
    )
}

let List = []
const count = 200
for(let i = 0; i < count; i++){
    List.push(
        Mock.mock({
            id:Mock.Random.guid(),
            name:Mock.Random.cname(),
            addr:Mock.mock('@county(true)'),
            'age|18-60':1,
            birth:Mock.Random.date(),
            sex:Mock.Random.integer(0,1)
        })
    )
}

export default {
    getUserList: config =>{
        const {name,page =1,limit =20} = param2Obj(config.url)
        console.log('name:'+name,'page:'+page,'分页大小limit:' +limit)
        const mockList = List.filter(user=>{
            if(name&&user.name.indexof(name)===-1&&user.addr.indexof(name)===-1) return false
            return true
        })
        const pageList =mockList.filter((item,index)=>index<limit*page&&index>=limit*(page-1))
        return{
            code:20000,
            count:mockList.length,
            List:pageList
        }
    },
    createUser:config=>{
        const {name,addr,age,birth,sex} = JSON.parse(config.body)
        console.log(JSON.parse(config.body))
        List.unshift({
            id:Mock.Random.guid(),
            name:name,
            addr:addr,
            age:age,
            birth:birth,
            sex:sex
        })
        return{
            code:20000,
            date:{
                message:'添加成功'
            }
        }
    }
}