<template>
    <div class="infoshow">
       <el-row type="flex" class="row-bg" justify="center">
           <el-col :span='8'>
               <div class="user">
                    <img :src="user.avatar" class='avatar' alt="">
               </div>
           </el-col>
           <el-col :span='16'>
               <div class="userinfo">
                  <div class="user-item">
                    <i class="fa fa-user"></i>
                   <span>{{user.name}}</span>
                  </div>
                  <!--<div class="user-item">-->
                    <!--<i class="fa fa-cog"></i>-->
                    <!--<span>{{user.identity == 'manager' ? '管理员' : '普通员工'}}</span>-->
                  <!--</div>-->
                   <div  class="user-item">
                       <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                           <el-form-item label="修改密码" prop="pass">
                               <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" style="width: 200px"></el-input>
                           </el-form-item>
                           <el-form-item label="确认密码" prop="checkPass">
                               <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" style="width: 200px"></el-input>
                           </el-form-item>
                           <el-form-item>
                               <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                               <el-button @click="resetForm('ruleForm2')">重置</el-button>
                           </el-form-item>
                       </el-form>
                   </div>
               </div>

           </el-col>
       </el-row>
    </div>
</template>
<script>

export default {
    computed: {
        user() {
            return this.$store.getters.user;
        }
    },
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
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$message({
                              message: "修改成功！",
                              type: "success"
                            });
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
<style scoped>
.infoshow {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  /* padding: 16px; */
}
.row-bg {
  width: 100%;
  height: 100%;
}
.user {
  text-align: center;
  position: relative;
  top: 30%;
}
.user img {
  width: 150px;
  border-radius: 50%;
}
.user span {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
.userinfo {
  height: 100%;
  background-color: #eee;
}
.user-item {
  position: relative;
  top: 30%;
  padding: 26px;
  font-size: 28px;
  color: #333;
}
</style>
