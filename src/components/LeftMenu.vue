<template>
    <el-row class="menu_page">
         <el-col>
             <el-menu
                mode="vertical"
                background-color="#324057"
                text-color="#fff"
                active-text-color="#409eff"
                class="el-menu-vertical-demo">
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
                 <router-link to="/province">
                     <el-menu-item index="9">
                         <!--<i class="fa fa-margin fa-server"></i>-->
                         <span slot="title">省</span>
                     </el-menu-item>
                 </router-link>
                <router-link to="/wagesAndAttendance">
                    <el-menu-item index="1">
                        <!--<i class="fa fa-margin fa-server"></i>-->
                        <span slot="title">工人工资与考勤匹配情况</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/nativePlace">
                    <el-menu-item index="2">
                        <!--<i class="fa fa-margin fa-server"></i>-->
                        <span slot="title">工人籍贯统计分析</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/age">
                    <el-menu-item index="3">
                        <!--<i class="fa fa-margin fa-server"></i>-->
                        <span slot="title">工人年龄分析</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/output">
                    <el-menu-item index="4">
                        <!--<i class="fa fa-margin fa-server"></i>-->
                        <span slot="title">进场人数与产值匹配度</span>
                    </el-menu-item>
                </router-link>
                 <router-link to="/attendance">
                     <el-menu-item index="5">
                         <!--<i class="fa fa-margin fa-server"></i>-->
                         <span slot="title">期间工人出勤率</span>
                     </el-menu-item>
                 </router-link>
                 <router-link to="/wave">
                     <el-menu-item index="6">
                         <!--<i class="fa fa-margin fa-server"></i>-->
                         <span slot="title">期间工人入场波动情况</span>
                     </el-menu-item>
                 </router-link>
                 <router-link to="/foundlist">
                     <el-menu-item index="7">
                         <!--<i class="fa fa-margin fa-server"></i>-->
                         <span slot="title">资金管理</span>
                     </el-menu-item>
                 </router-link>
                 <router-link to="/infoshow">
                     <el-menu-item index="8">
                         <!--<i class="fa fa-margin fa-server"></i>-->
                         <span slot="title">信息管理</span>
                     </el-menu-item>
                 </router-link>

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
  data() {
    return {
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
  }
};
</script>
<style scoped>
.menu_page {
  position: fixed;
  top: 71px;
  left: 0;
  min-height: 100%;
  background-color: #324057;
  z-index: 99;
}
.el-menu {
  border: none;
}
.fa-margin {
  margin-right: 5px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
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
</style>
