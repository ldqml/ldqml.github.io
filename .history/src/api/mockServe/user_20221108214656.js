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
            addr:Mock.mock('@county(true)')
        })
    )
}