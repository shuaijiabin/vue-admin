<template>
  <div id="login">
  	<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-position="left" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="user">
        <el-input type="name" v-model="ruleForm2.user" autocomplete="off"></el-input>
      </el-form-item>
  	  <el-form-item label="密码" prop="pass">
  	    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  	  </el-form-item>
      <el-row type="flex" class="row-bg">
        <el-col :span="16">
          <el-form-item label="验证码" prop="code">
            <el-input type="code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <div class="va-code"><img width="100%" src="http://localhost/vue/vue-admin/captcha.php?0.50005451541515" alt="验证码"/></div>
        </el-col>
      </el-row>
  	  <el-form-item>
  	    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
  	    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  	  </el-form-item>
  	</el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm2: {
          user: '',
          pass: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
	},
	methods: {
	  submitForm(formName) {
	    this.$refs[formName].validate((valid) => {
	      if (valid) {
	        alert('submit!');
	      } else {
	        console.log('error submit!!');
	        return false;
	      }
	    });
	  },
	  resetForm(formName) {
	    this.$refs[formName].resetFields();
	  }
	}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
  width:328px;
  padding:40px 20px 20px;
  position:absolute;
  top:100px;
  left:0;
  right:0;
  margin:auto;
  border-radius:4px;
  -moz-box-shadow:0px 0px 8px #969696; -webkit-box-shadow:0px 0px 8px #969696; box-shadow:0px 0px 8px #969696;
}
.va-code{
  width:100%;
  border-radius:4px;
  overflow:hidden;
}
</style>
