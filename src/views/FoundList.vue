<template>
    <div class="fillcontain">
        <div>
            <el-form
                :inline="true"
                ref="search_data"
                :model='search_data' >
                <el-input v-model="input" placeholder="请输入内容" style="width:200px"></el-input>

                <!--<el-form-item label="投标时间筛选:">-->
                    <!--<el-date-picker-->
                        <!--v-model="search_data.startTime"-->
                        <!--type="datetime"-->
                        <!--placeholder="选择开始时间">-->
                    <!--</el-date-picker> &#45;&#45;-->
                    <!--<el-date-picker-->
                        <!--v-model="search_data.endTime"-->
                        <!--type="datetime"-->
                        <!--placeholder="选择结束时间">-->
                    <!--</el-date-picker>-->
                <!--</el-form-item>-->
                <el-form-item>
                    <el-button type="primary" size ="middle" icon="search" @click='onScreeoutMoney()'>搜素</el-button>
                </el-form-item>
                 <!--<el-form-item class="btnRight">-->
                    <!--<el-button type="primary" size ="small" icon="view" @click='onAddMoney()'>添加</el-button>-->
                <!--</el-form-item>-->
            </el-form>
        </div>
        <div class="table_container">
            <el-table
                v-if="tableData.length > 0"
                :data='tableData'
                border
                :default-sort = "{prop: 'date', order: 'descending'}"
                style="width: 100%">
                 <el-table-column
                    type="index"
                    label="序号"
                    align='center'
                    width="70">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="项目名称"
                    align='center'
                    width="250">
                    <!--<template slot-scope="scope">-->
                        <!--<el-icon name="time"></el-icon>-->
                        <!--<span style="margin-left: 10px">{{ scope.row.date }}</span>-->
                    <!--</template>-->
                </el-table-column>
                <el-table-column
                    prop="main"
                    label="项目内容"
                    align='center'
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="startime"
                    label="开始时间"
                    align='center'
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="endtime"
                    label="竣工时间"
                    align='center'
                    width="170">
                </el-table-column>
                <el-table-column
                    prop="overtime"
                    label="初始化时间"
                    align='center'
                    width="170">
                </el-table-column>
                <el-table-column
                    prop="starer"
                    label="创建人"
                    align='center'
                    width="170">
                </el-table-column>
                <el-table-column
                    prop="head"
                    label="负责人"
                    align='center'
                    width="170">
                </el-table-column>
                 <el-table-column
                    prop="city"
                    label="所在城市"
                    align='center'
                    width="220">
                </el-table-column>
                <el-table-column
                        prop="gateBrake"
                        label="闸机"
                        align='center'
                        width="170">
                </el-table-column>
                <el-table-column
                        prop="workstatus"
                        label="工程状态"
                        align='center'
                        width="170">
                </el-table-column>
                <el-table-column
                        prop="projectstatus"
                        label="项目状态"
                        align='center'
                        width="170">
                </el-table-column>
                <el-table-column
                        prop="authenticationstatus"
                        label="认证状态"
                        align='center'
                        width="170">
                </el-table-column>
                <el-table-column
                    prop="operation"
                    align='center'
                    label="操作"
                    fixed="right"
                    width="380">
                    <template slot-scope='scope'>
                        <span  class="btns bg-799EFF"  @click='onSuss(scope.row)' >认证通过</span>
                        <span class="btns bg-409EFF"  @click='onEditMoney(scope.row,scope.$index)' >修改</span>
                        <span class="btns bg-F56C6C"   @click='onDeleteMoney(scope.row,scope.$index)' >删除</span>
                        <span  class="btns bg-409EFF"    >检查点</span>
                        <span  class="btns bg-67C23A"    >班组信息</span>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
             <el-row>
                <el-col :span="24">
                    <div class="pagination">
                        <el-pagination
                            v-if='paginations.total > 0'
                            :page-sizes="paginations.page_sizes"
                            :page-size="paginations.page_size"
                            :layout="paginations.layout"
                            :total="paginations.total"
                            :current-page.sync='paginations.page_index'
                            @current-change='handleCurrentChange'
                            @size-change='handleSizeChange'>
                        </el-pagination>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!-- 弹框页面 -->
        <DialogFound :dialog='dialog' :form='form' @update="getProfile"></DialogFound>
    </div>
</template>

<script>
import DialogFound from "../components/DialogFound";

export default {
  name: "fundlist",
  data() {
    return {
        input:"",
      tableData: [],
      allTableData: [],
      filterTableData: [],
      dialog: {
        show: false,
        title: "",
        option: "edit"
      },
      form: {
        type: "",
        describe: "",
        income: "",
        expend: "",
        cash: "",
        remark: "",
        id: ""
      },
      //需要给分页组件传的信息
      paginations: {
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 5, // 1页显示多少条
        page_sizes: [5, 10, 15, 20], //每页显示多少条
        layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
      },
      search_data: {
        startTime: "",
        endTime: ""
      }
    };
  },
  components: {
    DialogFound
  },
  created() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      // 获取表格数据
      // this.$axios.get("./data/list.json").then(res => {
        // this.tableData = res.data;
        let res =[
            {
                "name": "保利花园二期",
                "main": "保利力花园二期开工啦！！！！！！！！！！！！！！",
                "startime": "2018-11-17",
                "endtime": "2022-02-21",
                "overtime": "2018-12-04 10:22:30",
                "starer": "张三",
                "head": "李四",
                "city": "广东省-广州市-番禺区",
                "gateBrake": "新闸机",
                "workstatus":"进行中",
                "projectstatus":"正常啊",
                "authenticationstatus": "认证不过"
            },
            {
                "name": "保利花园二期",
                "main": "保利力花园二期开工啦！！！！！！！！！！！！！！",
                "startime": "2018-11-17",
                "endtime": "2022-02-21",
                "overtime": "2018-12-04 10:22:30",
                "starer": "张三",
                "head": "李四",
                "city": "广东省-广州市-番禺区",
                "gateBrake": "新闸机",
                "workstatus":"进行中",
                "projectstatus":"正常啊",
                "authenticationstatus": "认证不过"
            },
            {
                "name": "保利花园二期",
                "main": "保利力花园二期开工啦！！！！！！！！！！！！！！",
                "startime": "2018-11-17",
                "endtime": "2022-02-21",
                "overtime": "2018-12-04 10:22:30",
                "starer": "张三",
                "head": "李四",
                "city": "广东省-广州市-番禺区",
                "gateBrake": "新闸机",
                "workstatus":"进行中",
                "projectstatus":"正常啊",
                "authenticationstatus": "认证不过"
            },
            {
                "name": "保利花园二期",
                "main": "保利力花园二期开工啦！！！！！！！！！！！！！！",
                "startime": "2018-11-17",
                "endtime": "2022-02-21",
                "overtime": "2018-12-04 10:22:30",
                "starer": "张三",
                "head": "李四",
                "city": "广东省-广州市-番禺区",
                "gateBrake": "新闸机",
                "workstatus":"进行中",
                "projectstatus":"正常啊",
                "authenticationstatus": "认证不过"
            },
            {
                "name": "保利花园二期",
                "main": "保利力花园二期开工啦！！！！！！！！！！！！！！",
                "startime": "2018-11-17",
                "endtime": "2022-02-21",
                "overtime": "2018-12-04 10:22:30",
                "starer": "张三",
                "head": "李四",
                "city": "广东省-广州市-番禺区",
                "gateBrake": "新闸机",
                "workstatus":"进行中",
                "projectstatus":"正常啊",
                "authenticationstatus": "认证不过"
            },
            {
                "name": "保利花园二期",
                "main": "保利力花园二期开工啦！！！！！！！！！！！！！！",
                "startime": "2018-11-17",
                "endtime": "2022-02-21",
                "overtime": "2018-12-04 10:22:30",
                "starer": "张三",
                "head": "李四",
                "city": "广东省-广州市-番禺区",
                "gateBrake": "新闸机",
                "workstatus":"进行中",
                "projectstatus":"正常啊",
                "authenticationstatus": "认证不过"
            },
            {
                "name": "保利花园二期",
                "main": "保利力花园二期开工啦！！！！！！！！！！！！！！",
                "startime": "2018-11-17",
                "endtime": "2022-02-21",
                "overtime": "2018-12-04 10:22:30",
                "starer": "张三",
                "head": "李四",
                "city": "广东省-广州市-番禺区",
                "gateBrake": "新闸机",
                "workstatus":"进行中",
                "projectstatus":"正常啊",
                "authenticationstatus": "认证不过"
            }
        ]
        this.allTableData = res ;
        this.filterTableData = res ;
        // 设置分页数据
        this.setPaginations();
      // });
    },
    onEditMoney(row) {
      // 编辑
      this.dialog = {
        show: true,
        title: "修改资金信息",
        option: "edit"
      };
      this.form = {
        type: row.type,
        describe: row.describe,
        income: row.income,
        expend: row.expend,
        cash: row.cash,
        remark: row.remark,
        id: row._id
      };
    },
    onDeleteMoney(row, index) {
      // 删除
      // this.$axios.delete(`/api/profile/delete/${row._id}`).then(res => {
        this.$confirm('确认删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
        }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });
        });
      // });
    },
      onSuss(){
          this.$message({
              type: 'success',
              message: '认证成功!'
          });
      },
    onAddMoney() {
      // 添加
      this.dialog = {
        show: true,
        title: "添加资金信息",
        option: "add"
      };
      this.form = {
        type: "",
        describe: "",
        income: "",
        expend: "",
        cash: "",
        remark: "",
        id: ""
      };
    },
    handleCurrentChange(page) {
      // 当前页
      let sortnum = this.paginations.page_size * (page - 1);
      let table = this.allTableData.filter((item, index) => {
        return index >= sortnum;
      });
      // 设置默认分页数据
      this.tableData = table.filter((item, index) => {
        return index < this.paginations.page_size;
      });
    },
    handleSizeChange(page_size) {
      // 切换size
      this.paginations.page_index = 1;
      this.paginations.page_size = page_size;
      this.tableData = this.allTableData.filter((item, index) => {
        return index < page_size;
      });
    },
    setPaginations() {
      // 总页数
      this.paginations.total = this.allTableData.length;
      this.paginations.page_index = 1;
      this.paginations.page_size = 5;
      // 设置默认分页数据
      this.tableData = this.allTableData.filter((item, index) => {
        return index < this.paginations.page_size;
      });
    },
    onScreeoutMoney() {
      // 筛选
      if (!this.search_data.startTime || !this.search_data.endTime) {
        this.$message({
          type: "warning",
          message: "请选择时间区间"
        });
        this.getProfile();
        return;
      }
      const stime = this.search_data.startTime.getTime();
      const etime = this.search_data.endTime.getTime();
      this.allTableData = this.filterTableData.filter(item => {
        let date = new Date(item.date);
        let time = date.getTime();
        return time >= stime && time <= etime;
      });
      // 分页数据
      this.setPaginations();
    }
  }
};
</script>
<style scoped>
.fillcontain {
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.btnRight {
  float: right;
}
.pagination {
  text-align: right;
  margin-top: 10px;
}
.btns{
    padding: 2px 10px;
    display: inline-block;
    color: #fff;
    border-radius: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
}
.bg-409EFF{
    background: #409EFF;
}
.bg-67C23A{
    background: #67C23A;
}
.bg-F56C6C{
    background: #F56C6C;
}
.bg-799EFF{
    background: #799EFF;
}


</style>
