<template>
  <div id="login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-position="left" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户" prop="account">
        <el-input v-model="ruleForm2.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="re-code">
          <el-input type="text" v-model="ruleForm2.code"></el-input>
          <el-button @click="sendForm('ruleForm2')" :loading="iscodeloading">发送</el-button>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'regist',
  data() {
      var _this=this;
      var validateAccount = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          let reg = /[a-zA-Z\d]+\@[a-zA-Z]+\.[a-zA-Z]+/
          if (Number.isInteger(Number(value))||reg.test(value)) {
            var url = this.GLOBAL.URL.mainPage[0].is_exist
            this.$axios.get(url,{
              params: {
                user_name: this.ruleForm2.account,
              }
            })
            .then(function (response) {
              if (response.data.data===1) {
                callback()
              } else {
                callback(new Error('该邮箱已被注册'));
              }
            })
            .catch(function (error) {
              console.log(error);
            })
          } else {
            callback(new Error('请您使用正确的手机号或邮箱登录'));
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
        iscodeloading: false,
        ruleForm2: {
          account: '',
          pass: '',
          checkPass: '',
          code: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          account: [
            { validator: validateAccount, trigger: 'blur' }
          ]
        }
      };
  },
  methods: {
    submitForm(formName) {
      var _this=this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          _this.openHTML('注册中......');
          var url = this.GLOBAL.URL.mainPage[0].register
          this.$axios.get(url,{
            params: {
              user_name: this.ruleForm2.account,
              user_pwd: this.ruleForm2.pass,
              code: this.ruleForm2.code
            }
          })
          .then(function (response) {
            _this.openHTML('注册成功！');
            _this.$router.push({ path: '/login' })
          })
          .catch(function (error) {
            _this.openError('注册失败');
          })
        } else {
          _this.openWarning('邮箱验证失败');
          return false;
        }
      });
    },
    sendForm(formName) {
      this.isloading=true;
      var _this=this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var url = this.GLOBAL.URL.mainPage[0].code
          this.$axios.get(url,{
            params: {
              user_name: this.ruleForm2.account,
              is_exist: 0 //账号是否已存在
            }
          })
          .then(function (response) {
            _this.iscodeloading=false;
          })
          .catch(function (error) {
            _this.iscodeloading=false;
            _this.openWarning('验证匹配失败');
          })
        } else {
          this.iscodeloading=false;
          _this.openWarning('验证失败哦');
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
.re-code{
  width:100%;
  position:relative;
  overflow:hidden;
}
.re-code .el-button{
  position:absolute;
  top:2px;
  right:1px;
  border:none;
}
.re-code .el-button:before{
  position:absolute;
  content:"";
  top:0;
  bottom:0;
  left:0;
  margin:auto 0;
  width:1px;
  height:14px;
  background:#ddd;
}
</style>
