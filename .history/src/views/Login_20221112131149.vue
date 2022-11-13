<template>
    <el-form class="login-container" :model="form" :rules="rules">
        <h3 class="login_title">系统登入</h3>
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="bt">
            <el-button type="primary">登入</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            form:{
                username:'',
                password:''
            },
            rules:{
                username:[
                    {required:true,trigger:'blur',message:'请输入用户名'}
                ],
                password:[
                    {required:true,trigger:'blur',message:'请输入密码'}
                ]
            }
        }
    },
}
</script>

<style lang="less" scoped>
.login-container{
    width: 350px;
    border: 1px solid #eaeaea;
    margin: 180px auto;
    padding: 35px 35px 5px 35px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
    .login_title{
        text-align: center;
    }
    .bt{
        text-align: center;
    }
}
</style>