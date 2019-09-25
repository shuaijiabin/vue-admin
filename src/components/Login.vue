<template>
  <div id="login">
  	<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-position="left" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="account">
        <el-input type="name" v-model="ruleForm2.account" autocomplete="off"></el-input>
      </el-form-item>
  	  <el-form-item label="密码" prop="pass">
  	    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  	  </el-form-item>
      <!-- <el-row type="flex" class="row-bg">
        <el-col :span="16">
          <el-form-item label="验证码" prop="code">
            <el-input type="code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <div class="va-code"></div>
        </el-col>
      </el-row> -->
  	  <el-form-item>
  	    <el-button type="primary" @click.prevent="submitForm('ruleForm2')">提交</el-button>
  	    <el-button @click.prevent="resetForm('ruleForm2')">重置</el-button>
  	  </el-form-item>
  	</el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
      var validatePass = (rule, value, callback) => {
        let reg = /[a-zA-Z\d]+\@[a-zA-Z]+\.[a-zA-Z]+/
        if (Number.isInteger(Number(value))||reg.test(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的邮箱号！'))
        }
      };
      return {
        ruleForm2: {
          account: '',
          pass: ''
        },
        rules2: {
          account: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
	},
	methods: {
	  submitForm(formName) {
      var _this=this
	    this.$refs[formName].validate((valid) => {
	      if (valid) {
          var url=this.GLOBAL.URL.mainPage[0].login
          this.$axios.get(url,{
            params: {
              user_name:this.ruleForm2.account,
              user_pwd:this.ruleForm2.pass
            }
          })
          .then(function (response) {
            if (response.data.code==200) {
              _this.$store.dispatch('logined',response)
              _this.$router.push({ path: '/' })
            } else {
              _this.openError('账号或密码错误。')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
	      } else {
	        console.log('error submit!!');
	        return false;
	      }
	    });
	  },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    openWarning(msg) {
      this.$message({
        message: msg,
        type: 'warning'
      });
    },
    openError(msg) {
        this.$message.error(msg);
    },
    openSuccess(msg) {
      this.$message({
        message: msg,
        type: 'success'
      });
    },
    openHTML(msg) {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<i :loading="true"></i> '+msg+'</strong>'
      });
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
