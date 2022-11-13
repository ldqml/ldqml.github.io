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
    }
}