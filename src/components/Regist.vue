<template>
  <div id="login">
  	<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-position="left" label-width="100px" class="demo-ruleForm">
  	  <el-form-item label="密码" prop="pass">
  	    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  	  </el-form-item>
  	  <el-form-item label="确认密码" prop="checkPass">
  	    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
  	  </el-form-item>
  	  <el-form-item label="年龄" prop="age">
  	    <el-input v-model.number="ruleForm2.age"></el-input>
  	  </el-form-item>
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
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
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
</style>
