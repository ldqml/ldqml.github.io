<template>
  <div class="manage">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="35%"
      :before-close="handleClose"
    >
      <el-form ref="form" :rules="rules" :inline="true" :model="form" label-width="80px">
        <el-form-item label="姓名" prop="name">
          <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.birth"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="canc">取 消</el-button>
        <el-button type="primary" @click="submit"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <div class="manage-header">
      <el-button @click="dialogVisible = true" type="primary">
        + 新增
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        age: "",
        sex: "",
        birth: "",
        addr: "",
      },
      rules:{
        name:[
          {required:true ,message:'请输入姓名'}
        ],
        age:[
          {required:true ,message:'请输入年龄'}
        ],
        sex:[
          {required:true ,message:'请选择性别'}
        ],
        birth:[
          {required:true ,message:'请选择生日'}
        ],
        addr:[
          {required:true ,message:'请输入地址'}
        ]
      }
    };
  },
  methods:{
    submit(){
      this.$refs.form.validate((valid)=>{
        if(valid){
          this.$refs.form.resetFields()
          this.dialogVisible = false
        }
      });
    },
    handleClose(){
      this.$refs.form.resetFields(),
      this.dialogVisible = false
    },
    canc(){
      this.handleClose()
    }
  }
};
</script>
