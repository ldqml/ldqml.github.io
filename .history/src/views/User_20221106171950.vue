<template>
  <div class="manage">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="35%"
      :before-close="handleClose"
    >
      <el-form ref="form" :inline="true" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input placeholder="请输入年龄" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
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
    };
  },
};
</script>
