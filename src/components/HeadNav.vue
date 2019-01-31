<template>
    <header class="head-nav">
        <el-row>
            <el-col :span="6" class='logo-container'>
                <span class='title'>建信开太平建筑工程政府监管系统</span>
            </el-col>
            <el-col :span='6' class="user">
                <div class="userinfo">
                    <!--<img :src="user.avatar" class='avatar' alt="">-->
                     <div class='welcome'>
                        <!--<p class='name comename'>欢迎</p>-->
                        <!--<p class='name avatarname'>{{user.name}}</p>-->
                        <p class='name avatarname'>admin</p>
                         <span class="todo" @click="onEditMoney">修改密码</span>
                         <span class="todo" @click="logout">退出登陆</span>
                    </div>
                    <!--<span class='username'>-->
                        <!--<el-dropdown-->
                                <!--trigger="click"-->
                                <!--@command='setDialogInfo'>-->
                            <!--<span class="el-dropdown-link">-->
                                <!--<i class="el-icon-caret-bottom el-icon&#45;&#45;right"></i>-->
                            <!--</span>-->
                            <!--<el-dropdown-menu slot="dropdown">-->
                                <!--<el-dropdown-item command='info'>修改密码</el-dropdown-item>-->
                                <!--<el-dropdown-item  command='logout'>退出</el-dropdown-item>-->
                            <!--</el-dropdown-menu>-->
                        <!--</el-dropdown>-->
                     <!--</span>-->
                </div>
            </el-col>

        </el-row>
        <el-dialog
                title="个人信息"
                :visible.sync="dialog.show"
                :close-on-click-modal='false'
                :close-on-press-escape='false'
                :modal-append-to-body="false">
            <div class="userinfo">
                <div class="user-item">
                    <i class="fa fa-user"></i>
                    <span>{{user.name}}</span>
                </div>
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
        </el-dialog>
    </header>
</template>
<script>
export default {
  name: "head-nav",
  computed: {
    user() {
        console.log( this.$store.getters.user)
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
        },
        dialog: {
            show: false,

        },
        items: [
            // {
            //   icon: "fa-money",
            //   name: "资金管理",
            //   path: "fund",
            //   children: [{ path: "foundlist", name: "资金流水" }]
            // },
            // {
            //   icon: "fa-asterisk",
            //   name: "信息管理",
            //   path: "info",
            //   children: [{ path: "infoshow", name: "个人信息" }]
            // },
            // {
            //   icon: "fa-asterisk",
            //   name: "地图",
            //   path: "map",
            //   children: [{ path: "wel", name: "地图" }]
            // }
        ]
    };
},
  methods: {
      onEditMoney() {
          // 编辑
          this.dialog = {
              show: true,

          };
      },
      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
              if (valid) {
                  this.$message({
                      message: "修改成功！",
                      type: "success"
                  });
                  this.dialog = {
                      show: false,

                  };
              } else {
                  console.log('error submit!!');
                  return false;
              }
          });
      },
    setDialogInfo(cmditem) {
      if (!cmditem) {
        console.log("test");
        this.$message("菜单选项缺少command属性");
        return;
      }
      switch (cmditem) {
        case "info":
          this.onEditMoney();
          break;
        case "logout":
          this.logout();
          break;
      }
    },
    showInfoList() {
      // 个人信息
      this.$router.push("/infoshow");
    },
    logout() {
      // 清除token
      localStorage.removeItem("eleToken");
      this.$store.dispatch("clearCurrentState");

      // 页面跳转
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.head-nav {
  width: 100%;
  height: 60px;
  min-width: 600px;
  background: #393939;
  color: #fff;
    overflow: hidden;
  /*border-bottom: 1px solid #393939;*/
}
.logo-container {
  line-height: 60px;
  min-width: 400px;
}
.logo {
  height: 50px;
  width: 50px;
  margin-right: 5px;
  vertical-align: middle;
  display: inline-block;
}
.title {
  vertical-align: middle;
    font-size: 18px;
  font-family: "Microsoft YaHei";
    margin-left: 20px;
}
.user {
  /*line-height: 60px;*/
  text-align: right;
  float: right;
  padding-right: 10px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}
.welcome {
  display: inline-block;
  width: auto;
  vertical-align: middle;
  padding: 0 5px;
}
.name {
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    margin-top: 12px;
}
.comename {
  font-size: 12px;
}
.avatarname {
}
.username {
  cursor: pointer;
  margin-right: 5px;
}
.el-dropdown {
  color: #fff;
}
.user-item {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
}
.fa-user{
    margin-right: 10px;
    margin-left: 35px;
}
.todo{
    display: inline-block;
    color: #65aff2;
    font-size: 12px;
    margin-left: 5px;
    cursor: pointer;
}
.todo:hover{
    display: inline-block;
    color: #ff6e00;

}
</style>
