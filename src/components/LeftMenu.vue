<template>

        <el-row class="menu_page">
            <el-col>
                <el-menu
                        class="el-menu-vertical-demo"
                        mode="vertical"
                        text-color="#fff"
                        active-text-color="#fff"
                        :default-active="navMenu"
                        @select="handleSelect"
                >
                    <!--<router-link to="/home">-->
                    <!--<el-menu-item index="0">-->
                    <!--<i class="fa fa-margin fa-server"></i>-->
                    <!--<span slot="title">首页</span>-->
                    <!--</el-menu-item>-->
                    <!--</router-link>-->
                    <router-link to="/map">
                        <el-menu-item index="0">
                            <!--<i class="fa fa-margin fa-server"></i>-->
                            <span slot="title">首页</span>
                        </el-menu-item>
                    </router-link>
                    <!--<router-link to="/province">-->
                    <!--<el-menu-item index="9">-->
                    <!--&lt;!&ndash;<i class="fa fa-margin fa-server"></i>&ndash;&gt;-->
                    <!--<span slot="title">省</span>-->
                    <!--</el-menu-item>-->
                    <!--</router-link>-->
                    <a href="http://120.76.60.230:8081/JMBBackend/BEProject/List">
                        <el-menu-item index="7">
                            <!--<i class="fa fa-margin fa-server"></i>-->
                            <span slot="title">项目列表</span>
                        </el-menu-item>
                    </a>
                    <router-link to="/city">
                        <el-menu-item index="10">
                            <!--<i class="fa fa-margin fa-server"></i>-->
                            <span slot="title">项目对接</span>
                        </el-menu-item>
                    </router-link>
                    <!--<router-link to="/output">-->
                        <!--<el-menu-item index="4">-->
                            <!--&lt;!&ndash;<i class="fa fa-margin fa-server"></i>&ndash;&gt;-->
                            <!--<span slot="title">进场人数</span>-->
                        <!--</el-menu-item>-->
                    <!--</router-link>-->
                    <router-link to="/wave">
                        <el-menu-item index="6">
                            <!--<i class="fa fa-margin fa-server"></i>-->
                            <span slot="title">工人入场</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/attendance">
                        <el-menu-item index="5">
                            <!--<i class="fa fa-margin fa-server"></i>-->
                            <span slot="title">工人出勤</span>
                        </el-menu-item>
                    </router-link>

                    <router-link to="/wagesAndAttendance">
                        <el-menu-item index="1">
                            <!--<i class="fa fa-margin fa-server"></i>-->
                            <span slot="title">工资考勤</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/nativePlace">
                        <el-menu-item index="2">
                            <!--<i class="fa fa-margin fa-server"></i>-->
                            <span slot="title">工人籍贯</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/age">
                        <el-menu-item index="3">
                            <!--<i class="fa fa-margin fa-server"></i>-->
                            <span slot="title">工人年龄</span>
                        </el-menu-item>
                    </router-link>





                    <!--<el-menu-item index="8" @click="onEditMoney">-->
                        <!--&lt;!&ndash;<i class="fa fa-margin fa-server"></i>&ndash;&gt;-->
                        <!--<span slot="title" >信息管理</span>-->
                    <!--</el-menu-item>-->


                    <template  v-for="item in items" >
                        <el-submenu v-if="item.children" :index="item.path" :key="item.path">
                            <template slot="title">
                                <i :class="'fa fa-margin '+item.icon"></i>
                                <span slot="title">{{item.name}}</span>
                            </template>
                            <router-link v-for="(citem,cindex) in item.children"
                                         :to="citem.path" :key="cindex">
                                <el-menu-item
                                        :index='citem.path'>
                                    <span slot="title">{{citem.name}}</span>
                                </el-menu-item>
                            </router-link>
                        </el-submenu>

                    </template>
                </el-menu>
            </el-col>

        </el-row>
</template>
<script>
export default {
  name: "leftmenu",
    computed: {
        navMenu() {
            console.log(localStorage.getItem("setNavmenuIndex"))
            return localStorage.getItem("setNavmenuIndex")
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
        // navMenu:localStorage.setNavmenuIndex,
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
        handleSelect(key) {
            // console.log(key)
            // this.$store.dispatch("setNavmenuIndex", key);
            // localStorage.setItem("setNavmenuIndex", key);
        },
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
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>
<style scoped>
.menu_page {
  position: fixed;
  top: 60px;
  left: 0;
  min-height: 100%;
  background-color: #393939;
  z-index: 99;
}
.el-menu {
  border: none;
}
.fa-margin {
  margin-right: 5px;
}
.el-menu-item{
    height: 46px;
    line-height:46px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    margin-left: 10px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
    background-color: #393939;
}
.el-menu-item:focus, .el-menu-item:hover,.el-menu-item.is-active{
    background-color:#65aff2;
}
.el-menu-vertical-demo {
  width: 35px;
}
.el-submenu .el-menu-item {
  min-width: 180px;

}

.hiddenDropdown,
.hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
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
</style>
