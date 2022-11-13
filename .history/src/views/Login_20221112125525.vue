<template>
    <el-form :model="form" :rules="rules">
        <h3 class="login_title">系统登入</h3>
        <el-form-item></el-form-item>
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