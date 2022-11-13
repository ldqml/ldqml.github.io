import Mock, { mock } from 'mockjs'

let list = []
export default {
    getStateDate:()=>{
        for(let i=0; i<7;i++){
            list.push(
                Mock.mock({
                    苹果:Mock.Random.float(100,8000,0,0),
                    vivo:Mock.Random.float(100,8000,0,0),
                    OPPO:Mock.Random.float(100,8000,0,0),
                    华为:Mock.Random.float(100,8000,0,0),
                    三星:Mock.Random.float(100,8000,0,0),
                    小米:Mock.Random.float(100,8000,0,0)
                })
            )
        }
        return {
            code:20000,
            data:{
                videDate:[
                    {
                        name:'小米',
                        value:2999
                    },
                    {
                        name:'苹果',
                        value:2000
                    },
                    {
                        name:'vivo',
                        value:1699
                    },
                    {
                        name:'OPPO',
                        value:4999
                    },
                    {
                        name:'华为',
                        value:3699
                    },
                    {
                        name:'三星',
                        value:2499
                    }
                ],
                userDate:[
                    {
                        date:'周一',
                        new:5,
                        active:200
                    },
                    {
                        date:'周二',
                        new:5,
                        active:500
                    }
                ]
            }
        }
    }
}